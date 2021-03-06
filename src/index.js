import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain="jrovnerdev.acmetest.org"
//    clientId='JOHbDS8ByJEgkpkDoliWbkljKvYiaryo'
    clientId={process.env.REACT_APP_CLIENT_ID} 
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

