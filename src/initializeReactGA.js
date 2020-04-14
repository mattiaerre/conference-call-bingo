import ReactGA from 'react-ga';

// CREDIT: https://medium.com/google-cloud/tracking-site-visits-on-react-app-hosted-in-google-cloud-using-google-analytics-f49c2411d398
function initializeReactGA() {
  const { NODE_ENV, REACT_APP_TRACKING_CODE } = process.env;
  if (NODE_ENV === 'production') {
    ReactGA.initialize(REACT_APP_TRACKING_CODE);
    ReactGA.pageview('/');
  }
}

export default initializeReactGA;
