import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import router from './router';


const app = express();
const port = process.env.PORT || 3000;

//Set up express app
app.use(cors());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'));
}

//Setup Views
app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  layoutsDir: path.resolve(__dirname, 'views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'views'));

//Static assets
app.use(express.static(path.resolve(__dirname, '../dist')));


router(app);

export default app;
