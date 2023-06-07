import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from 'config';
import { history, commonHelper } from 'helpers';

export default function alertHelper(errorMsg = "", alert = false) {
  // console.log("alertHelper errorMsg", errorMsg);
  // console.log("alertHelper alert", alert);
  if (alert) {
    let message = errorMsg != "" ? errorMsg : config.GENERIC_ERROR_MESSGE;
    toast.error(message, {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else {

    //redirect to Oops page
    history.push("/error");
  }

}
