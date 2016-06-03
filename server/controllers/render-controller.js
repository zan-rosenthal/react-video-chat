import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router'
import App from '../generated/app'

export default (req, res) => {
  const initialState = {
    currentMessage: '',
    messages: []
  };

  const store = createStore((state = initialState) => state);

  const appContent = ReactDOMServer.renderToString(
    <Provider store = {store} >
        <App />
    </Provider>
  );

  res.render('app', {
    app:appContent,
    initialState: JSON.stringify(initialState)
  });

};
