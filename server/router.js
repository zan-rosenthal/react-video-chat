import initialRender from './controllers/render-controller'

//Routes
export default app => {
  app.get('/', initialRender);
}
