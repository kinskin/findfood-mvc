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
            backgroundRepeat: 'repeat'
        }

        return(
            <html>
                <head>
                    <Bootstrap/>
                </head>
                <body style = {bodyStyle}>
                    <div className='container-fluid'>
                        <Navbar loggedIn = {this.props.loggedIn}/>
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