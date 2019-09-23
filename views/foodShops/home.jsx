import React, {fragment} from 'react';
import Navbar from '../components/navbar'
import SignIn from '../components/signin'
import SignUp from '../components/signup'
import Bootstrap from '../components/head'
import JQBootstrap from '../components/jqbootstrap'


class Home extends React.Component{

    render(){

        let bodyStyle = {
            backgroundImage: `url('https://al-assri.com/wp-content/uploads/2019/04/WhatsApp-Image-2019-01-03-at-9.42.54-PM.jpeg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            backgroundAttachment:'fixed',
            fontFamily: 'CenturyGothic,AppleGothic'
        }

        let banner ={
            backgroundImage: `url('https://res.cloudinary.com/kinskin/image/upload/v1569243611/shutterstock_692950210_yfoxef.jpg')`,
            backgroundSize: 'cover',
            height:'300px',
            width:'100%'
        }

        let userImageStyle = {
            borderRadius: '100%',
            height:'200px',
            width:'200px',
            border:'5px solid white'
        }

        let userCard = {
            height: '320px',
            width:'14rem',
            border:'5px solid white'
        }

        let featuredUsers = this.props.featuredUser.map((user,index)=>{
            let userUrl = '/findfood/profile/'+user.id
            return(
                <div className='text-center' style={userCard}>
                    <img src={user.profile_image} style={userImageStyle}/>
                    <div className='text-center my-4'>
                        <a className='text-light' href={userUrl}>{user.profile_name}</a>
                    </div>
                </div>
            )
        })

        return(
            <html>
                <head>
                    <Bootstrap/>
                </head>
                <body style = {bodyStyle}>
                    <Navbar loggedIn = {this.props.loggedIn} userId = {this.props.userId}/>
                    <div style={banner}>
                        <div className='text-center d-flex flex-column justify-content-center align-items-center text-light' style={{fontSize:'25px'}}>
                            <h3>Hawkers</h3>
                            <p>Sign in/Sign up to view more</p>
                            <small>Click on the top right hand corner to sign in</small>
                        </div>
                    </div>
                    <div className='container-fluid'>
                        <div className='my-4'>
                            <div className='text-center my-3'>
                                <h4 className='text-light'>Featured hawker goers</h4>
                            </div>
                            <div className='card-body d-flex flex-wrap justify-content-around'>
                                {featuredUsers}
                            </div>
                        </div>
                    </div>

                    <SignIn />
                    <SignUp />

                    <JQBootstrap/>
                </body>
            </html>
        )
    }
}

export default Home;