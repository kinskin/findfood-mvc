import React, {fragment} from 'react';
import Navbar from '../components/navbar'
import SignIn from '../components/signin'
import SignUp from '../components/signup'
import Bootstrap from '../components/head'
import NewHawker from '../components/newhawker'
import JQBootstrap from '../components/jqbootstrap'

class Show extends React.Component{

    constructor(){
        super()

        this.state = {
            comment: 'Enter your comment here'
        }
    }

    render(){

        let postReview = '/findfood/newreview/'+this.props.foodshop.foodplace_id

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

        let showReview;
        if(this.props.reviews === null){
            showReview = <fragment>
                            <p> No reviews made for this shop </p>
                         </fragment>
        }
        else{
            showReview = this.props.reviews.map((review,index)=>{
                return(
                    <div>
                        <p>Rating: {review.rating}</p>
                        <p>Comments: {review.comment}</p>
                    </div>
                )
            })
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
                                    <div className='my-3 text-center'>
                                        <h3>{this.props.foodshop.shopname} reviews </h3>
                                    </div>
                                    <div>
                                        <div className='text-center'>
                                            <h5>Add Reviews</h5>
                                        </div>
                                        <form className='form-group my-4 col-10 offset-1' method='POST' action={postReview}>
                                            <div className='d-flex flex-row justify-content-around'>
                                                Rating:
                                                <div>
                                                    <input type='radio' name='rating' value='1'/> 1
                                                </div>
                                                <div>
                                                    <input type='radio' name='rating' value='2'/> 2
                                                </div>
                                                <div>
                                                     <input type='radio' name='rating' value='3'/> 3
                                                </div>
                                                <div>
                                                    <input type='radio' name='rating' value='4'/> 4
                                                </div>
                                                <div>
                                                    <input type='radio' name='rating' value='5'/> 5
                                                </div>
                                            </div>
                                            <div className='d-flex flex-row align-items-baseline'>
                                                <p>Comment: </p>
                                                <input className='form-control' type='text-field' name= 'comment' placeholder={this.state.comment}/>
                                            </div>
                                            <div className='text-center'>
                                                <button className='btn btn-md btn-outline-success' type='submit'>Post</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className='card-body'>
                                        <div className='text-center my-3'>
                                            <h5>Reviews</h5>
                                        </div>
                                        {showReview}
                                    </div>
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