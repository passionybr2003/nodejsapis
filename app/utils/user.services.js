/* eslint-disable no-unused-vars */
import config from 'config';
import axios from 'axios';
import { commonHelper } from 'helpers';



//Insert data in database
const insertBDData = (data) => {
  const txnId = data.txnId;
  localStorage.setItem("dBTxnId", txnId);
  //Get count of subscriptions from database
  const res = axios.post('/api/addPayments', data).then((response) => {
    //console.log('insert response: ' + response);
  })
    .catch((error) => Promise.reject(error));
}

//Update data in Database
const updateDBData = (data, id) => {
  if (id !== undefined) {
    //Get count of subscriptions from database
    const reqData = { ...data, txnId: id }
    //Get count of subscriptions from database
    const res = axios.post('/api/updatePayment', reqData).then((response) => {
      //console.log('Update response: ', response);
    })
      .catch((error) => Promise.reject(error));
  }
}

//Record logger
const recordLogger = (data) => {
  if (commonHelper.getDataLocalStorage('cpCustomerID')) {
    data.cpCustomerId = commonHelper.getDataLocalStorage('cpCustomerID');
  }
  // console.log('recordLogger, data', data);
  const res = axios.post('/logs', data).then((response) => {
  })
    .catch((error) => Promise.reject(error));
}



const UserService = {
  insertBDData,
  updateDBData,
  recordLogger
};

export default UserService;