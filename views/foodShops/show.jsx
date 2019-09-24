import React from 'react';
import Navbar from '../components/navbar'
import SignIn from '../components/signin'
import SignUp from '../components/signup'
import Bootstrap from '../components/head'
import NewHawker from '../components/newhawker'
import JQBootstrap from '../components/jqbootstrap'

class Show extends React.Component{

    render(){

        let bodyStyle = {
            backgroundImage: `url('https://al-assri.com/wp-content/uploads/2019/04/WhatsApp-Image-2019-01-03-at-9.42.54-PM.jpeg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            fontFamily: 'CenturyGothic,AppleGothic'
        }

        let imageStyle = {
            border: '10px solid white',
            height: 'auto',
            width: '100%'
        }

        return(
            <html>
                <head>
                    <Bootstrap/>
                    <link rel="stylesheet" href="./foodShops/index.css"/>
                </head>
                <body style={bodyStyle}>
                    <div className = 'container-fluid'>
                        <Navbar loggedIn = {this.props.loggedIn} userId = {this.props.userId}/>
                        <div className ='row'>
                            <div className='col-6 my-4'>
                                <div className='card'>
                                    <img className= 'rounded' src={this.props.foodshop.image_url} style={imageStyle}/>
                                    <div className='card-body'>
                                        <h6>Shop: {this.props.foodshop.shopname}</h6>
                                        <p> Location: {this.props.foodshop.location} </p>
                                        <br/>
                                        <p> Address: {this.props.foodshop.address} </p>
                                        <p> Singapore ({this.props.foodshop.postalcode}) </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 my-4'>
                                <div className='card'>
                                    <p> for review and comments </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <SignIn/>
                    <SignUp/>
                    <NewHawker user={this.props.user}/>
                <JQBootstrap/>
                </body>
            </html>
        )
    }
}
export default Show;