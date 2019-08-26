module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


   let foodShopControllerCallback = (request, response) => {
    db.foodShops.getFoodShop(request.params.id, (error,result)=>{
        console.log(result)
        let data = {
            foodshop: result
        }
        response.render('foodShops/show', data)
    })
   }

    let foodShopsControllerCallback = (request, response) => {
      db.foodShops.getAllFoodShops((error, result) => {
        console.log(result)
        let data = {
            foodShops : result
        }
        response.render('foodShops/index', data);
      });
    };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    foodShops: foodShopsControllerCallback,
    foodshop: foodShopControllerCallback
  };

}