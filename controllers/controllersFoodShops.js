module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


    let homeControllerCallback = (request,response) =>{
        db.foodShops.getFeaturedShop((error,result)=>{
            if(error){
                console.log(error)
                console.log('error in getting featured shop')
            }
            else{
                db.users.getFeaturedUsers((error,result2)=>{
                    if(error){
                        console.log(error)
                        console.log('error in getting featured users')
                    }
                    else{
                        let data = {
                            loggedIn: request.cookies.logged_in,
                            userId: request.cookies.userId,
                            featuredShop: result,
                            featuredUser: result2
                        }
                        response.render('foodShops/home', data)
                    }
                })
            }
        })
   }

   let foodShopControllerCallback = (request, response) => {
    db.foodShops.getFoodShop(request.params.id, (error,result)=>{

        let data = {
            foodshop: result[0],
            loggedIn: request.cookies.logged_in,
            userId: request.cookies.userId
        }
        response.render('foodShops/show', data)
    })
   }

    let foodShopsControllerCallback = (request, response) => {
        if(!request.query.location){
            db.foodShops.getAllFoodShops(request.query.location, (error, result) => {
                if(error){
                    console.log(error)
                    console.log('error in getting data from database')
                }
                else{
                    if(!request.query.category){
                        db.foodShops.getDistinctCategory((error,result2)=>{
                            if(error){
                                console.log(error)
                                console.log('error in getting distinct location')
                            }
                            else{
                                console.log('this is the id: ', request.cookies.userId)
                                let data = {
                                    location: 'all locations',
                                    foodShops : result,
                                    category: result2,
                                    loggedIn: request.cookies.logged_in,
                                    userId: request.cookies.userId
                                }
                                response.render('foodShops/index', data);
                            }
                        })
                    }
                    else{
                        let filterResult = []
                        console.log('this is the category: ', Array.isArray(request.query.category))
                        if(Array.isArray(request.query.category) === true){
                            for(let i = 0; i < request.query.category.length; i++){
                                for(let j = 0; j < result.length; j++){
                                    if(result[j].category === request.query.category[i]){
                                        filterResult.push(result[j])
                                    }
                                }
                            }
                        }
                        else{
                            for(let i = 0; i < result.length; i++){
                                if(result[i].category === request.query.category){
                                    filterResult.push(result[i])
                                }
                            }
                        }
                        db.foodShops.getDistinctCategory((error,result2)=>{
                            if(error){
                                console.log(error)
                                console.log('error in getting distinct location')
                            }
                            else{
                                let data = {
                                    location: 'all locations',
                                    foodShops : filterResult,
                                    category: result2,
                                    loggedIn: request.cookies.logged_in,
                                    userId: request.cookies.userId
                                }
                                response.render('foodShops/index', data);
                            }
                        })
                    }
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
                    if(!request.query.category){
                        db.foodShops.getDistinctCategory((error,result2)=>{
                            if(error){
                                console.log(error)
                                console.log('error in getting distinct location')
                            }
                            else{
                                let data = {
                                    location: request.query.location,
                                    foodShops : result,
                                    category: result2,
                                    loggedIn: request.cookies.logged_in,
                                    userId: request.cookies.userId
                                }
                                response.render('foodShops/index', data);
                            }
                        })
                    }
                    else{
                        let filterResult = []
                        if(Array.isArray(request.query.category) === true){
                            for(let i = 0; i < request.query.category.length; i++){
                                for(let j = 0; j < result.length; j++){
                                    if(result[j].category === request.query.category[i]){
                                        filterResult.push(result[j])
                                    }
                                }
                            }
                        }
                        else{
                            for(let i = 0; i < result.length; i++){
                                if(result[i].category === request.query.category){
                                    filterResult.push(result[i])
                                }
                            }
                        }
                        db.foodShops.getDistinctCategory((error,result2)=>{
                            if(error){
                                console.log(error)
                                console.log('error in getting distinct location')
                            }
                            else{
                                let data = {
                                    location: request.query.location,
                                    foodShops : filterResult,
                                    category: result2,
                                    loggedIn: request.cookies.logged_in,
                                    userId: request.cookies.userId
                                }
                                response.render('foodShops/index', data);
                            }
                        })
                    }
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
    home: homeControllerCallback,
    foodShops: foodShopsControllerCallback,
    foodshop: foodShopControllerCallback,
  };

}