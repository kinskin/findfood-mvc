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


  app.get('/findfood/:id', foodShopsControllerCallbacks.foodshop)
  app.get('/findfood', foodShopsControllerCallbacks.foodShops)
  app.get('/', foodShopsControllerCallbacks.foodShops);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};