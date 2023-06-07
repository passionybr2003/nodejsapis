import { createSelector } from 'reselect';
import isEmpty from 'lodash/isEmpty';
import forEach from 'lodash/forEach';
import unionBy from 'lodash/unionBy';
import cloneDeep from 'lodash/cloneDeep';
import { initialState } from '../app/reducers/app.reducer';

const selectApp = (state) => state.app || initialState;

const getConfigAuthorizedUsers_selector = () =>
  createSelector(selectApp, (buState) => {
    if (!isEmpty(buState.configData) && buState.configData.users) {
      const tempUsers = [];
      forEach(buState.configData.users, (user) => {
        tempUsers.push({
          label: user.userName,
          value: user.userId,
        });
      });
      return tempUsers;
    }
    return [];
  });
const getConfigurationData = () =>
  createSelector(selectApp, (buState) => buState.configData.list);
const getTheme = () => createSelector(selectApp, (buState) => buState);
const getLoaderStatus = () =>
  createSelector(selectApp, (buState) => buState.showLoading);
const getBuList = () => createSelector(selectApp, (buState) => buState.buList);
const getStatus = () => createSelector(selectApp, (buState) => buState.status);
const getUserToken = () =>
  createSelector(selectApp, (buState) => buState.userToken);
const getPermissions = () =>
  createSelector(selectApp, (buState) => buState.permission);
const getDomainURL_selector = () =>
  createSelector(selectApp, (buState) => buState.domainURLs);
// createSelector(selectApp, (buState) => {
//   if (buState.permission.list) {
//     console.log("16 in selectors", buState.permission.list);
//     return {
//       applications: buState.permission,
//       status: buState.permission.status
//     }
//   } else {
//     return {
//       applications: buState.permission.list,
//       status: false
//     };
//   }
// });
const getProdPromoPackagesData = () =>
  createSelector(selectApp, (buState) => buState.prodPromosPackages);
const getConfigurationDataforEmail = () =>
  createSelector(selectApp, (buState) => buState.configData);
const getConfigPromotionCategory = () =>
  createSelector(selectApp, (buState) => buState.configData);
const dmaProductsAndPackagesByDMAID = () =>
  createSelector(selectApp, (buState) => {
    const dmaProductsAndPackages = [];
    let tempPackageData = [];
    let tempProductsData = [];
    if (!isEmpty(buState.configData)) {
      const data = cloneDeep(buState.configData);
      if (!isEmpty(data.dmaProductsAndPackages)) {
        data.dmaProductsAndPackages.forEach((item) => {
          tempPackageData =
            item.dmaPackagesMap &&
            Object.keys(item.dmaPackagesMap).map((elem) => ({
              label: elem,
              value: `${item.dmaPackagesMap[elem]}_${'package'}`,
              type: 'package',
            }));
          tempProductsData =
            item.dmaProductsMap &&
            Object.keys(item.dmaProductsMap).map((elem) => ({
              label: elem,
              value: `${item.dmaProductsMap[elem]}_${'product'}`,
              type: 'product',
            }));

          const allProdsandPackages = unionBy(
            tempPackageData,
            tempProductsData,
          );
          dmaProductsAndPackages.push({
            dmaID: item.dmaID,
            pkgwithProms: allProdsandPackages,
          });
        });
      }
    }
    return dmaProductsAndPackages;
  });
const allDMAPkgwithPromos = () =>
  createSelector(selectApp, (buState) => {
    let dmaProductsAndPackages = [];
    let tempPackageData = [];
    let tempProductsData = [];
    if (!isEmpty(buState.configData)) {
      const data = cloneDeep(buState.configData);
      if (!isEmpty(data.buPackagesMap)) {
        tempPackageData = Object.keys(data.buPackagesMap).map((elem) => ({
          label: elem,
          value: `${data.buPackagesMap[elem]}_${'package'}`,
          type: 'package',
        }));
      }
      if (!isEmpty(data.buProductsMap)) {
        tempProductsData = Object.keys(data.buProductsMap).map((elem) => ({
          label: elem,
          value: `${data.buProductsMap[elem]}_${'product'}`,
          type: 'product',
        }));
      }
      const allProdsandPackages = unionBy(tempPackageData, tempProductsData);

      dmaProductsAndPackages = unionBy(
        dmaProductsAndPackages,
        allProdsandPackages,
      );
    }
    return dmaProductsAndPackages;
  });
const serviceTypesAndProductCategories_selector = () =>
  createSelector(selectApp, (buState) => {
    if (!isEmpty(buState.configData)) {
      const serviceTypesData = buState.configData.serviceTypes;
      const temp = [];
      forEach(serviceTypesData, (serviceType) => {
        temp.push({
          label: serviceType.name,
          value: serviceType.content,
          ...serviceType,
        });
      });
      return temp;
    }
    return [];
  });
const getServiceFamilyDropdowns = () =>
  createSelector(selectApp, (buState) => {
    if (!isEmpty(buState.configData)) {
      const serviceFamilyData = buState.configData.serviceFamilies;
      const temp = [];
      forEach(serviceFamilyData, (serviceFamily) => {
        temp.push({
          label: serviceFamily,
          value: serviceFamily,
        });
      });
      return temp;
    }
    return [];
  });
export {
  getConfigAuthorizedUsers_selector,
  getConfigurationData,
  getTheme,
  getLoaderStatus,
  getBuList,
  getStatus,
  getUserToken,
  getPermissions,
  getProdPromoPackagesData,
  getConfigurationDataforEmail,
  getConfigPromotionCategory,
  dmaProductsAndPackagesByDMAID,
  allDMAPkgwithPromos,
  serviceTypesAndProductCategories_selector,
  getServiceFamilyDropdowns,
  getDomainURL_selector,
};
