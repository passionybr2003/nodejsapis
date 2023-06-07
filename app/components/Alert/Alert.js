import React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

const ToastAlert = () => {
  return <ToastContainer newestOnTop closeOnClick={false} />;
};

export default ToastAlert;
