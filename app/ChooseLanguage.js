import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import { MenuItem, FormControl } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import appServices from 'services/app.services';

const locales = {
  en: 'English',
  jp: 'Japanese',
  sp: 'Spain',
};

const ChooseLanguage = (props) => {
  const [currentLocalLanguage, setCurrentLocalLanguage] = useState(
    localStorage.getItem('userSelectedLanguage') || 'en',
  );

  // If you add a new language for transaltion please specify locales object
  const languagesList = [
    {
      key: 'English',
      value: 'en',
    },
    {
      key: 'Japan',
      value: 'jp',
    },
    {
      key: 'Spanish',
      value: 'sp',
    },
  ];

  const typeOfMasterData = {
    English: `${process.env.BUILD_ENV}_normalMasterData`,
    Japanese: `${process.env.BUILD_ENV}_japanMasterData`,
  };

  const changeLanguageFunc = async (value) => {
    // The reason this causes bug with BUSelection is it's resetting the entire userData Object,
    // so using another state variable to store & update the chosen language (to access it globally)

    // props.context.updateUserData({
      //   ...currentContext,
      //   userPrefLanguage: value,
      // });
    i18n.changeLanguage(value);
    const masterDataFromAPI = await appServices.loadNormalMasterData(
      typeOfMasterData[locales[value]] ||
        `${process.env.BUILD_ENV}_normalMasterData`,
    );
    props.context.setMasterData(masterDataFromAPI);
    localStorage.setItem('userSelectedLanguage', value);

    setCurrentLocalLanguage(value);
    props.context.setCurrentLang(value);
  };

  // useEffect(() => {
  //   if (currentLocalLanguage != null && !isEmpty(currentLocalLanguage)) {
  //     changeLanguage({
  //       target: { value: localStorage.getItem('userSelectedLanguage') },
  //     });
  //   } else {
  //     changeLanguage({ target: { value: 'en' } });
  //   }
  // }, []);

  useEffect(() => {
    // if (masterData.userLanguages && masterData.userLanguages.length > 0) {
    //   setLanguagesList(masterData.userLanguages);
    // } else {
    //   setLanguagesList(['English']);
    // }
  }, []);

  useEffect(() => {
    const lang = localStorage.getItem('userSelectedLanguage');
    changeLanguageFunc(lang || 'en');
  }, [localStorage.getItem('userSelectedLanguage')]);

  return (
    <FormControl variant="filled" className="langSelection">
      <Select
        id="languageSelection"
        // value={
        //   props.context.userData.userPrefLanguage
        //     ? props.context.userData.userPrefLanguage
        //     : currentLocalLanguage
        // }
        // onChange={changeLanguageFunc}
        value={currentLocalLanguage}
        onChange={(e) => {
          changeLanguageFunc(e.target.value);
        }}
        MenuProps={{
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
        }}
      >
        {languagesList.length > 0 &&
          languagesList.map((language) => (
            <MenuItem key={language} value={language.value}>
              {language.key}
            </MenuItem>
          ))}
        {/* <MenuItem value={'enus'}>English (US)</MenuItem>{' '}
        <MenuItem value={'de'}>Deutsch</MenuItem>
        <MenuItem value={'es'}>Español</MenuItem>
        <MenuItem value={'fr'}>Francais</MenuItem>
        <MenuItem value={'it'}>Italiano</MenuItem>
        <MenuItem value={'pt'}>Português</MenuItem>
        <MenuItem value={'hi'}>हिन्दी</MenuItem>
        <MenuItem value={'te'}>తెలుగు</MenuItem>
        <MenuItem value={'ja'}>日本語</MenuItem> */}
      </Select>
    </FormControl>
  );
};

export default ChooseLanguage;
