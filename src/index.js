import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

import env from "react-dotenv";


ReactDOM.render(
  <Auth0Provider
    domain="jrovnerdev.acmetest.org"
    client_id={process.env.CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

