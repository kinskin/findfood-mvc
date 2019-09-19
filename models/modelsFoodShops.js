/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope


    let getAllFoodShops = (location, callback) => {
        if(location === ''){
            let query = 'SELECT * FROM foodplace';

            dbPoolInstance.query(query, (error, queryResult) => {
                if( error ){
                // invoke callback function with results after query has executed
                callback(error, null);
                }
                else{
                // invoke callback function with results after query has executed
                    if( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                    }
                    else{
                    callback(null, null);

                    }
                }
            });
        }
        else{
            let query = 'SELECT * FROM foodplace where foodplace.location = $1';
            let values = [location]
            dbPoolInstance.query(query, values, (error, queryResult) => {

                if( error ){
                // invoke callback function with results after query has executed
                callback(error, null);
                }
                else{
                // invoke callback function with results after query has executed
                    if( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                    }
                    else{
                    callback(null, null);

                    }
                }
            });
        }
    };

    let getDistinctCategory = (callback)=>{
        let query = 'SELECT DISTINCT foodplace.category FROM foodplace'
        dbPoolInstance.query(query,(error,queryResult)=>{
            if(error){
                callback(error,null)
            }
            else{
                if(queryResult.rows.length > 0){
                    callback(null, queryResult.rows)
                }
                else{
                    callback(null,null)
                }
            }
        })
    }

    let getFoodShop = (params, callback) => {
        console.log(params)
        let query = 'SELECT * FROM foodplace where foodplace_id = $1'
        let values = [params]
        dbPoolInstance.query(query, values, (error, queryResult)=>{
            if (error){
                callback(error,null)
            }
            else{
                if (queryResult.rows.length > 0){
                    callback(null, queryResult.rows)
                }
                else{
                    callback(null,null)
                }
            }
        })
    }

  return {
    getAllFoodShops,
    getFoodShop,
    getDistinctCategory
  };
};