module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR FOODSHOP CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const foodShopsControllerCallbacks = require('./controllers/controllersFoodShops.js')(allModels);

  app.get('/findfood/shop/:id', foodShopsControllerCallbacks.foodshop)
  app.get('/findfood/shops', foodShopsControllerCallbacks.foodShops)
  app.get('/findfood/home', foodShopsControllerCallbacks.home)
  app.get('/', foodShopsControllerCallbacks.home);


  const usersControllerCallbacks = require('./controllers/controllersUsers.js')(allModels)
  app.get('/findfood/profile', usersControllerCallbacks.profile)
  app.post('/findfood/signout', usersControllerCallbacks.signout)
  app.post('/findfood/signup', usersControllerCallbacks.signup)
  app.post('/findfood/signin', usersControllerCallbacks.signin)

  //app.get('/pokemons/:id', pokemons.getPokemon);
};