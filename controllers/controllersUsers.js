module.exports = (db) => {



  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let signinControllerCallback = (request,response)=>{
        db.users.getUser(request.body.email, request.body.password,(error,result)=>{
            if(error){
            console.log(error)
            console.log('error in get user in db')
            }
            else{
                if(result != null){
                    response.cookie('logged_in', true)
                    response.cookie('userlogIn', result[0].profile_name)
                    response.cookie('userId', result[0].id)
                    response.redirect('/findfood/home')
                }
                else{
                    response.redirect('/findfood/home')
                }
            }
        })
    }

    let signupControllerCallback = (request,response)=>{
        console.log(request.body)
        console.log(request.file)
    };


    let signoutControllerCallback = (request,response)=>{
        response.clearCookie('logged_in')
        response.clearCookie('userlogIn')
        response.clearCookie('userId')
        response.redirect('/findfood/home')
    }


    let profileControllerCallback = (request,response)=>{
        if(request.cookies.logged_in !== undefined ){
            db.users.showUser(request.cookies.userId,(error,result)=>{
                if(error){
                    console.log(error)
                    console.lor('error is getting specific user')
                }
                else{
                    db.foodShops.getUserShop(result[0].id,(error,result2)=>{
                        if(error){
                            console.log(error)
                            console.log('error in getting user shop entries')
                        }
                        else{
                            if(result2 === null){
                                let data = {
                                    userId: request.cookies.userId,
                                    loggedIn: request.cookies.logged_in,
                                    user: result[0],
                                    userShopEntries: null
                                }
                                response.render('../views/profile/profile', data)
                            }
                            else{
                                db.foodShops.countEntries(result[0].id, (error,result3)=>{
                                    if(error){
                                        console.log(error)
                                        console.log('error in counting entries')
                                    }
                                    else{
                                        let data = {
                                            userId: request.cookies.userId,
                                            loggedIn: request.cookies.logged_in,
                                            user: result[0],
                                            userShopEntries: result2,
                                            numEntries: result3[0].count
                                        }
                                        response.render('../views/profile/profile', data)
                                    }
                                })

                            }
                        }
                    })
                }
            })
        }
        else{
            response.redirect('/')
        }

    }

    let allUsersControllerCallback = (request,response)=>{
        if(request.cookies.logged_in !== undefined ){
            db.users.getAllUsers((error,result)=>{
                if(error){
                    console.log(error)
                    console.log('error in getting all users')
                }
                else{
                    let data = {
                        loggedIn: request.cookies.logged_in,
                        users: result
                    }
                    response.render('../views/profile/users',data)
                }
            })
        }
        else{
            response.redirect('/')
        }

    }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    signin: signinControllerCallback,
    signup: signupControllerCallback,
    signout: signoutControllerCallback,
    profile: profileControllerCallback,
    allUsers: allUsersControllerCallback
  };

}