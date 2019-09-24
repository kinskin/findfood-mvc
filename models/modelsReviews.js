module.exports = dbPoolInstance => {

    let getReviews = (shopId,callback)=>{
        let query = 'select * from reviews where shop_id = $1'
        let values = [shopId]
        dbPoolInstance.query(query,values,(error,queryResult)=>{
            if(error){
                callback(error,null)
            }
            else{
                if(queryResult.rows.length > 0){
                    callback(null,queryResult.rows)
                }
                else{
                    callback(null,null)
                }
            }
        })
    }

    let postReview = (rating,comment,shopId,userId,callback)=>{
        let query = 'insert into reviews(rating,comment,shop_id,user_id) values($1,$2,$3,$4) returning *'
        let values = [rating,comment,shopId,userId]
        dbPoolInstance.query(query,values,(error,queryResult)=>{
            if(error){
                callback(error,null)
            }
            else{
                callback(null,queryResult.rows[0])
            }
        })
    }

    return {
        getReviews,
        postReview,
    }
}