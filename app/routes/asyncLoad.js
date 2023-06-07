import Loader from 'components/Loader';
import Loadable from 'react-loadable';

// Global Components Lazy Loading
export const LandingPage = Loadable({
  loader: () => import(/* webpackChunkName: "LandingPage" */ 'ManagePayment/ManagePayment'),
  loading: Loader,
});
