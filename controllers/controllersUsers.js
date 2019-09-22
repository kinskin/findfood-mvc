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
        console.log('this is the user id: ', request.cookies.userId)
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
    profile: profileControllerCallback
  };

}