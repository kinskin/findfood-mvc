import React from 'react';

class SignIn extends React.Component{

    constructor(){
        super()

        this.state ={
            emailPlaceholder: 'Enter email address',
            passwordPlaceholder: 'Enter password'
        }
    }

    render(){
        let signIn = '/findfood/signin'
        return(
            <div class="modal fade" id="signInModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Hello, please sign in</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form className='form-group'method='POST' url={signIn}>
                                <p>Email Address:</p>
                                <input className='form-control' placeholder={this.state.emailPlaceholder}/>
                                <p>Password:</p>
                                <input className='form-control' placeholder={this.state.passwordPlaceholder}/>
                                <br/>
                                <div className='d-flex flex-row justify-content-around'>
                                    <button type="button" class="btn btn-lg" data-dismiss="modal"><i class='bx bx-window-close'></i>Close</button>
                                    <button type="submit" className='btn btn-lg'><i className='bx bx-log-in'></i>Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;