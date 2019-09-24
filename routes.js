module.exports = (app, allModels) => {

    const multer = require('multer');

    const storage = multer.diskStorage({
        destination: function (request, file, callback) {
        callback(null, './uploads')
        },
        filename: function (request, file, callback) {
            callback(null,file.originalname)
        }
    })

    const upload = multer({ storage: storage })


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

    app.post('/findfood/newreview/:shopid', foodShopsControllerCallbacks.newReview)
    app.post('/findfood/newshop', upload.single('image_url'), foodShopsControllerCallbacks.newShop)
    app.get('/findfood/shop/:id', foodShopsControllerCallbacks.foodshop)
    app.get('/findfood/shops', foodShopsControllerCallbacks.foodShops)
    app.get('/findfood/home', foodShopsControllerCallbacks.home)
    app.get('/', foodShopsControllerCallbacks.home);


    const usersControllerCallbacks = require('./controllers/controllersUsers.js')(allModels)

    app.get('/findfood/users', usersControllerCallbacks.allUsers)
    app.get('/findfood/profile/:id', usersControllerCallbacks.profile)
    app.post('/findfood/signout', usersControllerCallbacks.signout)
    app.post('/findfood/signup', upload.single('profile_image'), usersControllerCallbacks.signup)
    app.post('/findfood/signin', usersControllerCallbacks.signin)

    //app.get('/pokemons/:id', pokemons.getPokemon);
};