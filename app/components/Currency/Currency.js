// We get user's currency from his/her local storage and find its matching symbol here. We export that
// currency symbol to wherever it is required.

import currencyConstants from '../../constants/currency.constants';

let userCurrency='';
let currencyCode = '';

if (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).currency )
{
 userCurrency = JSON.parse(localStorage.getItem('user')).currency;
}

currencyConstants.forEach((item) => { if (item.value === userCurrency) { currencyCode = item.symbol; } });


export default currencyCode;