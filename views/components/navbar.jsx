import React, {fragment} from 'react'

class Navbar extends React.Component{
    render(){

        let navbar = {
            fontSize: '20px',
            color: 'white'
        }

        let userStatus;
        let allUsers;
        if(this.props.loggedIn === undefined){
            userStatus = <fragment>
                            <button className="dropdown-item btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#signInModal"><i class='bx bx-log-in' style={{fontSize: '15px'}}></i>Sign in</button>
                            <button className="dropdown-item btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#signUpModal"><i class='bx bxs-user-plus' style={{fontSize: '15px'}}></i>Sign up</button>
                         </fragment>
        }
        else{
            userStatus = <fragment>
                            <a className="dropdown-item" href="/findfood/profile"><i className='bx bxs-user-circle' style={{fontSize: '15px'}}></i>Profile</a>
                            <form method='POST' action='/findfood/signout'>
                                <button className="dropdown-item btn btn-sm"><i className='bx bxs-log-out' style={{fontSize: '15px'}}></i>Sign out</button>
                            </form>
                        </fragment>
            allUsers =  <fragment>
                            <a href='/findfood/users' style={navbar}> || Food Goers</a>
                        </fragment>
        }


        return(
            <div className='navbar text-light'>
                <div className='text-left'>
                    <a href='/findfood/home' style={navbar}><i class='bx bx-home'></i> Hawkers </a> ||
                    <a href='/findfood/shops' style ={navbar}> Shops </a>
                    {allUsers}
                </div>
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