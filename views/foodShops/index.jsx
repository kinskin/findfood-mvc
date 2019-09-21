var React = require('react')

import Navbar from '../components/navbar'
import SignIn from '../components/signin'
import SignUp from '../components/signup'
import Bootstrap from '../components/head'
import JQBootstrap from '../components/jqbootstrap'


class Index extends React.Component {

    constructor(props){

        super()

        this.state = {
            location: props.location
        }
    }



    render(){

        let search = '/findfood/shops'

        let shopImageCategory = {
            height:'200px',
            widht:'300px'
        }

        let allFoodStyle = {
            borderRadius: '10px',
            backgroundColor: 'white',
            height: '650px',
            width: 'auto',
            overflowY: 'scroll'
        }

        let shopStyle = {
            height: '320px',
            width:'14rem',
        }

        let formStyle = {
            height:'400px',
            backgroundColor: 'white'
        }

        let bodyStyle = {
            backgroundImage: `url('https://al-assri.com/wp-content/uploads/2019/04/WhatsApp-Image-2019-01-03-at-9.42.54-PM.jpeg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat'
        }

        let mapFoodShops;

        if(this.props.foodShops != null){
            mapFoodShops = this.props.foodShops.map((shop,index)=>{
                let showUrl = '/findfood/shop'+shop.foodplace_id
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
        else{
            mapFoodShops = <p> No hawkers entries </p>
        }

        let filterCategory = this.props.category.map((category,index)=>{
            return(
                <div className='d-flex flex-row justify-content-start align-items-baseline'>
                    <input type='checkbox' name= 'category' value={category.category} key={index}></input>
                    <p> {category.category}</p>
                </div>
            )
        })

    return(
        <html>
            <head>
                <Bootstrap/>
                <link rel="stylesheet" href="./foodShops/index.css"/>
            </head>
            <body style={bodyStyle}>
                <div className='container-fluid'>
                    <Navbar loggedIn = {this.props.loggedIn}/>
                    <div className='row'>
                        <div className='col-3 my-4'>
                            <div className='card'>
                                <form method='GET' action={search}>
                                    <div className='my-3 text-center'>
                                        <h6>Search by: </h6>
                                    </div>
                                    <div className='card-body'>
                                        <input className='form-control'type='text' name='location' placeholder='search by location'/>
                                    </div>
                                    <br/>
                                    <div className='my-3 text-center'>
                                        <h6> Filter by: </h6>
                                    </div>
                                    <div className='card-body'>
                                        {filterCategory}
                                    </div>
                                    <div className='mb-3 text-right d-flex flex-row justify-content-around align-items-baseline'>
                                        <a href='/findfood'><i class='bx bx-reset' style={{fontSize: '30px'}}></i></a>
                                        <button className='btn btn-sm' type='submit'><i class='bx bxs-send' style={{fontSize: '30px'}}></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-9 my-4'>
                            <div className='card'>
                                <div className='my-3 text-center'>
                                    <h6>Hawker stalls at {this.state.location}</h6>
                                </div>
                                <div className="card-body d-flex flex-wrap justify-content-around" style={allFoodStyle}>
                                    {mapFoodShops}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <SignIn/>
                <SignUp/>


                <JQBootstrap/>
            </body>
        </html>
        )
    }
}


module.exports = Index;