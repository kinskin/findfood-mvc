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
  //app.get('/pokemons/:id', pokemons.getPokemon);
};