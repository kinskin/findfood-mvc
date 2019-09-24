/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope


    let getAllFoodShops = (location, callback) => {
        if(location === '' || location === undefined){
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

    let getUserShop = (userId,callback)=>{
        let query = 'select * from foodplace where user_id = $1'
        let values = [userId]
        dbPoolInstance.query(query,values,(error,queryResult)=>{
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

    let countEntries = (userId,callback)=>{
        let query = 'select count(*) from foodplace where user_id = $1'
        let values = [userId]
        dbPoolInstance.query(query,values,(error,queryResult)=>{
            if(error){
                callback(error,null)
            }
            else{
                callback(null,queryResult.rows)
            }
        })
    }

    let getFeaturedShop = (callback)=>{
        let query = 'select * from foodplace order by foodplace_id desc'
        dbPoolInstance.query(query,(error,queryResult)=>{
            if(error){
                callback(error,null)
            }
            else{
                callback(null, queryResult.rows)
            }
        })
    }

    let newShop = (shopname,address,postalcode,location,category,user_id,image_url,callback)=>{
        let query = 'insert into foodplace(shopname,address,postalcode,location,category,user_id,image_url) values($1,$2,$3,$4,$5,$6,$7) returning *'
        let values = [shopname,address,postalcode,location,category,user_id,image_url]
        dbPoolInstance.query(query,values,(error,queryResult)=>{
            if(error){
                callback(error,null)
            }
            else{
                callback(null,queryResult.rows)
            }
        })
    }

  return {
    getAllFoodShops,
    getFoodShop,
    getDistinctCategory,
    getUserShop,
    countEntries,
    getFeaturedShop,
    newShop,
  };
};