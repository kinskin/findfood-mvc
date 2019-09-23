import React, {fragment} from 'react';
import Navbar from '../components/navbar'
import SignIn from '../components/signin'
import SignUp from '../components/signup'
import Bootstrap from '../components/head'
import JQBootstrap from '../components/jqbootstrap'

class UserProfile extends React.Component{

    render(){

        let bodyStyle = {
            backgroundImage: `url('https://al-assri.com/wp-content/uploads/2019/04/WhatsApp-Image-2019-01-03-at-9.42.54-PM.jpeg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            backgroundAttachment: 'fixed',
            fontFamily: 'CenturyGothic,AppleGothic'
        }

        let profileImage = {
            height: '300px',
            width: '300px',
            backgroundColor:'transparent',
            borderRadius: '100%',
            border:'5px solid white'
        }

        let shopImageCategory = {
            height:'200px',
            widht:'300px'
        }

        let shopStyle = {
            height: '200px',
            width:'12rem',
            overflowY: 'scroll'
        }

        let postCard = {
            height: '600px',
            width:'100%',
            overflowY: 'scroll',
            marginBottom:'20px'
        }

        let shops;
        if(this.props.userShopEntries === null){
            shops = <p> No entries found </p>
        }
        else{
            shops = this.props.userShopEntries.map((shop,index)=>{
                let showUrl = '/findfood/shop/'+shop.foodplace_id
                return(
                    <div className="card mb-3" style={shopStyle} key={index}>
                        <img style={shopImageCategory} className="card-img-top" src={shop.image_url}/>
                        <div className="card-body text-center">
                            <a className='btn' href={showUrl}>
                            <strong>{shop.shopname}</strong>
                            </a>
                            <p>{shop.category}</p>
                        </div>
                    </div>
                )
            })
        }


        return(
            <html>
                <head>
                    <Bootstrap/>
                </head>
                <body style={bodyStyle}>
                    <div className='container-fluid'>
                        <Navbar loggedIn = {this.props.loggedIn} userId={this.props.userId}/>
                        <div className='text-center'>
                            <img src={this.props.user.profile_image} style={profileImage}/>
                            <div className='card-body rounded bg-light col-4 offset-4 my-3'>
                                <h3> {this.props.user.profile_name} </h3>
                                <div className='row'>
                                    <div className='col-6'>
                                        <p> Total post made: </p>
                                        <p>{this.props.numEntries}</p>
                                    </div>
                                    <div className='col-6'>
                                        <p> Total review made : </p>
                                        <p> nil </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='card' style={postCard}>
                                    <div className='text-center my-2'>
                                        <h5> Your posts </h5>
                                    </div>
                                    <div className='card-body d-flex flex-wrap justify-content-around m-2'>
                                        {shops}
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                            </div>
                        </div>
                    </div>


                    <JQBootstrap/>
                </body>
            </html>
        )
    }
}

export default UserProfile;