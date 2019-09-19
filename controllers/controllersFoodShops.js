module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


   let foodShopControllerCallback = (request, response) => {
    db.foodShops.getFoodShop(request.params.id, (error,result)=>{
        let data = {
            foodshop: result
        }
        response.render('foodShops/show', data)
    })
   }

    let foodShopsControllerCallback = (request, response) => {
        console.log(!request.query.location)
        if(!request.query.location || request.query.location === undefined){
            db.foodShops.getAllFoodShops(request.query.location, (error, result) => {
                if(error){
                    console.log(error)
                    console.log('error in getting data from database')
                }
                else{
                    db.foodShops.getDistinctCategory((error,result2)=>{
                        if(error){
                            console.log(error)
                            console.log('error in getting distinct location')
                        }
                        else{
                            let data = {
                                location: 'all locations',
                                foodShops : result,
                                category: result2
                            }
                            response.render('foodShops/index', data);
                        }
                    })
                }
            });
        }
        else{
            console.log(request.query.location)
            db.foodShops.getAllFoodShops((request.query.location).toLowerCase(), (error, result) => {
                if(error){
                    console.log(error)
                    console.log('error in getting data from database')
                }
                else{
                    db.foodShops.getDistinctCategory((error,result2)=>{
                        if(error){
                            console.log(error)
                            console.log('error in getting distinct location')
                        }
                        else{
                            let data = {
                                location: request.query.location,
                                foodShops : result,
                                category: result2
                            }
                            response.render('foodShops/index', data);
                        }
                    })
                }
            });
        }
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