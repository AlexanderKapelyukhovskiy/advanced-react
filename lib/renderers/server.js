import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from 'config';
import StateApi from 'state-api';
import axios from 'axios';

import App from 'components/App';

const serverRender = async () => {
  const response = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(response.data);

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App store={store}/>
    ),
    initialData: response.data
  };
};

export default serverRender;
