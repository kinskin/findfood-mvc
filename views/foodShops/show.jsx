import React from 'react';

class Show extends React.Component{

    render(){

        let bodyStyle = {
            backgroundImage: `url('https://al-assri.com/wp-content/uploads/2019/04/WhatsApp-Image-2019-01-03-at-9.42.54-PM.jpeg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat'
        }

        let imageStyle = {
            border: '10px solid white',
            height: 'auto',
            width: '100%'
        }

        return(
            <html>
                <head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                    <link rel="stylesheet" href="./foodShops/index.css"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"/>
                </head>
                <body style={bodyStyle}>
                    <div className = 'container-fluid'>
                        <div className='navbar text-light rounded'>
                            <h3>Hawkers</h3>
                            <div className="dropleft">
                                <button class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class='bx bx-user'></i>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#"><i className='bx bxs-user-circle' style={{fontSize: '15px'}}></i>Profile</a>
                                    <a className="dropdown-item" href="#"><i className='bx bxs-log-out' style={{fontSize: '15px'}}></i>Sign out</a>
                                </div>
                            </div>
                        </div>
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





                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
                </body>
            </html>
        )
    }
}
export default Show;