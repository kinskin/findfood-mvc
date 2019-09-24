module.exports = (db) => {

    const cloudinary = require('cloudinary');
    const multer = require('multer');

    const storage = multer.diskStorage({
      destination: function (request, file, callback) {
        callback(null, '/uploads')
      },
      filename: function (request, file, callback) {
        callback(null,file.originalname)
      }
    })

    const upload = multer({ storage: storage })


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
                            user: request.cookies.userlogIn,
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
            if(error){
                console.log(error)
                console.log('error in getting the shop detail')
            }
            else{
                db.reviews.getReviews(request.params.id,(error,result2)=>{
                    if(error){
                        console.log(error)
                        console.log('error in getting the reviews')
                    }
                    else{
                        if(result2 === null){
                            let data = {
                                foodshop: result[0],
                                loggedIn: request.cookies.logged_in,
                                userId: request.cookies.userId,
                                user: request.cookies.userlogIn,
                                reviews: null
                            }
                            response.render('foodShops/show', data)
                        }
                        else{
                            let data = {
                                foodshop: result[0],
                                loggedIn: request.cookies.logged_in,
                                userId: request.cookies.userId,
                                user: request.cookies.userlogIn,
                                reviews: result2
                            }
                            response.render('foodShops/show', data)
                        }
                    }
                })
            }
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
                                let data = {
                                    location: 'all locations',
                                    foodShops : result,
                                    category: result2,
                                    loggedIn: request.cookies.logged_in,
                                    userId: request.cookies.userId,
                                    user: request.cookies.userlogIn,
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
                                    userId: request.cookies.userId,
                                    user: request.cookies.userlogIn,
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
                                    userId: request.cookies.userId,
                                    user: request.cookies.userlogIn,
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
                                    userId: request.cookies.userId,
                                    user: request.cookies.userlogIn
                                }
                                response.render('foodShops/index', data);
                            }
                        })
                    }
                }
            });
        }
    };

    let newShop = (request,response) => {
        cloudinary.uploader.upload(request.file.path, (result) => {
            db.foodShops.newShop(request.body.shopname,request.body.address,request.body.postalcode,request.body.location,request.body.category, request.cookies.userId, result.url,(error,result)=>{
                if(error){
                    console.log(error)
                    consolelog('error in add new shop')
                }
                else{
                    let data = {
                        loggedIn: request.cookies.logged_in,
                        userId: request.cookies.userId,
                        user: request.cookies.userlogIn,
                        foodshop:result[0]
                    }
                    response.render('foodShops/show', data)
                }
            })
        })
    }


    let newReview = (request,response)=>{
        db.reviews.postReview(request.body.rating,request.body.comment,request.params.shopid,request.cookies.userId,(error,result)=>{
            if(error){
                console.log(error)
                console.log('error in posting review')
            }
            else{
                console.log('this is the post result: ', result)
                response.redirect('/findfood/shop/'+request.params.shopid)
            }
        })
    }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    home: homeControllerCallback,
    foodShops: foodShopsControllerCallback,
    foodshop: foodShopControllerCallback,
    newShop: newShop,
    newReview: newReview,
  };

}