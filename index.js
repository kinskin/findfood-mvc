/**
 * ===================================
 * Configurations and set up
 * ===================================
 */


const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');
const cloudinary = require('cloudinary');
const multer = require('multer');


/**
 * ======================================================================================
 * the configuration below is for the uploading of file to cloudinary
 * ======================================================================================
 */




// Init express app
const app = express();

// Set up middleware
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('./uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, './uploads')
  },
  filename: function (request, file, callback) {
    callback(null,file.originalname)
  }
})

const upload = multer({ storage: storage })

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

cloudinary.config({
cloud_name: 'kinskin',
api_key: '247796894467252',
api_secret: '7lp9R--e0hOxUv0nROCeD0OyBVc'
});


/**
 * ===================================
 * ===================================
 *                DB
 * ===================================
 * ===================================
 */

// db contains *ALL* of our models
const allModels = require('./db');

/**
 * ===================================
 * ===================================
 * Routes
 * ===================================
 * ===================================
 */

// get the thing that contains all the routes
const setRoutesFunction = require('./routes');

// call it and pass in the "app" so that we can set routes on it (also models)
setRoutesFunction(app, allModels);

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));

let onClose = function(){

  server.close(() => {
    console.log('Process terminated')
    allModels.pool.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);