module.exports = dbPoolInstance =>{

    let getUser = (email,password,callback)=>{
        let query = 'select * from users where email = $1 and password = $2 '
        let values = [email, password]
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

    let showUser = (userId, callback)=>{
        let query = 'select * from users where id =$1'
        let values = [userId]
        dbPoolInstance.query(query,values, (error,queryResult)=>{
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

    let getAllUsers = (callback)=>{
        let query = 'select * from users'
        dbPoolInstance.query(query,(error,queryResult)=>{
            if(error){
                callback(error,null)
            }
            else{
                callback(null,queryResult.rows)
            }
        })
    }

    let getFeaturedUsers = callback =>{
        let query = 'select distinct users.id,users.profile_name,users.profile_image from users inner join foodplace on users.id = foodplace.user_id'
        dbPoolInstance.query(query,(error,queryResult)=>{
            if(error){
                callback(error,null)
            }
            else{
                callback(null,queryResult.rows)
            }
        })
    }

    return{
        getUser,
        showUser,
        getAllUsers,
        getFeaturedUsers
    }
}