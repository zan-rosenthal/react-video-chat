import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './generated/app'

const app = express();
const port = process.env.PORT || 3000;

//Views
app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  layoutsDir: path.resolve(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'views'));

//Static assets
app.use(express.static(path.resolve(__dirname, '../dist')))

//Routes
app.get('/', (request, response) => {
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

  response.render('app', {
    app:appContent,
    initialState: JSON.stringify(initialState)
  });
});

app.listen(port, ()=> console.log('Server running on port: ', port));
