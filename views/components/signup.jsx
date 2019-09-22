import React from 'react';

class SignUp extends React.Component{

    constructor(){
        super()

        this.state = {
            emailPlaceholder:'Enter email address',
            profileNamePlaceholder:'Enter profile name',
            passwordPlaceholder:'Enter password'
        }
    }


    render(){
        let signUp = '/findfood/signup'
        return(
            <div className="modal fade" id="signUpModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Hello new user. Please sign up below.</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className='form-group' method='POST' action={signUp}>
                                <p> Email Address </p>
                                <input className='form-control' type='text' name='email' placeholder={this.state.emailPlaceholder}/>
                                <p> Profile Name </p>
                                <input className='form-control' type='text' name='profilename' placeholder={this.state.profileNamePlaceholder}/>
                                <p> Profile Image </p>
                                <input type='file' className='btn btn-md' type='file' name='profile_image'/>
                                <p> Password </p>
                                <input className='form-control' type='password' name='password' placeholder={this.state.passwordPlaceholder}/>
                                <br/>
                                <div className='d-flex flex-row justify-content-around'>
                                    <button type="button" className="btn btn-lg" data-dismiss="modal"><i class='bx bx-window-close'></i>Close</button>
                                    <button type="submit" className='btn btn-lg'><i class='bx bxs-user-plus' style={{fontSize: '25px'}}></i>Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;