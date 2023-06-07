import isUndefined from 'lodash/isUndefined';

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  const selectedBu = JSON.parse(localStorage.getItem('selectedBUData'));
  if (user && user.channelPartners) {
    const getSelectedChannelPartnerObj = user.channelPartnerObj.find(
      (n) =>
        n.channelPartnerName === selectedBu.selectedData.parentMarketAreaName,
    );
    return {
      channelPartnerID: user.channelPartners,
      selectedBu: selectedBu.selectedData,
      isDataMaskOnMail: !isUndefined(getSelectedChannelPartnerObj)
        ? getSelectedChannelPartnerObj.isDataMaskOnMail
        : false,
      isDataMaskOnMobile: !isUndefined(getSelectedChannelPartnerObj)
        ? getSelectedChannelPartnerObj.isDataMaskOnMobile
        : false,
    };
  }
  return {};
}
