import React, {fragment} from 'react';

import Navbar from '../components/navbar'
import SignIn from '../components/signin'
import SignUp from '../components/signup'
import Bootstrap from '../components/head'
import JQBootstrap from '../components/jqbootstrap'


class Users extends React.Component{

    render(){

        let userCard = {
            height: '320px',
            width:'14rem'
        }

        let imgStyle = {
            borderRadius: '100%',
            height:'200px',
            width:'200px'
        }

        let bodyStyle = {
            backgroundImage: `url('https://al-assri.com/wp-content/uploads/2019/04/WhatsApp-Image-2019-01-03-at-9.42.54-PM.jpeg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            backgroundAttachment: 'fixed',
            fontFamily: 'CenturyGothic,AppleGothic'
        }
        let users = this.props.users.map((users,index)=>{
            let profileUrl = '/findfood/profile/'+users.id
            return(
                <div style={userCard}>
                    <div className='text-center'>
                        <img src={users.profile_image} style={imgStyle}/>
                    </div>
                    <div className='card-body'>
                        <a href={profileUrl}>{users.profile_name}</a>
                    </div>
                </div>
            )
        })

        return(
            <html>
                <head>
                    <Bootstrap/>
                </head>
                <body style={bodyStyle}>
                    <div className='container-fluid'>
                        <Navbar loggedIn = {this.props.loggedIn}/>
                        <div className='card text-center'>
                            <h3 className='my-3'> All users</h3>
                            <div className='card-body d-flex flex-wrap justify-content-around'>
                                {users}
                            </div>
                        </div>
                    </div>

                    <JQBootstrap/>
                </body>
            </html>
        )
    }
}

export default Users;