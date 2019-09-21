import React, {fragment} from 'react'

class Navbar extends React.Component{
    render(){

        let userStatus;
        if(this.props.loggedIn === false){
            userStatus = <fragment>
                            <button className="dropdown-item btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#signInModal"><i class='bx bx-log-in' style={{fontSize: '15px'}}></i>Sign in</button>
                            <button className="dropdown-item btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#signUpModal"><i class='bx bxs-user-plus' style={{fontSize: '15px'}}></i>Sign up</button>
                         </fragment>
        }
        else{
            userStatus = <fragment>
                            <a className="dropdown-item" href="#"><i className='bx bxs-user-circle' style={{fontSize: '15px'}}></i>Profile</a>
                            <a className="dropdown-item" href="#"><i className='bx bxs-log-out' style={{fontSize: '15px'}}></i>Sign out</a>
                        </fragment>
        }


        return(
            <div className='navbar text-light'>
                <h3>Hawkers</h3>
                <div className="dropleft">
                    <button className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class='bx bx-user'></i>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        {userStatus}
                    </div>
                </div>
            </div>
        )
    }
}


export default Navbar;