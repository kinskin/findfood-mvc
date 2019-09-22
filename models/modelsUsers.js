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

    return{
        getUser
    }
}