var React = require('react')


class Index extends React.Component {

    constructor(props){

        super()

        this.state = {
            location: props.location
        }
    }



    render(){

        let search = '/findfood/'

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
            backgroundImage: `url('https://mymodernmet.com/wp/wp-content/uploads/2018/07/food-art-foodscapes-carl-warner-23.jpg')`,
            backgroundRepeat: 'repeat'
        }

        let mapFoodShops;

        if(this.props.foodShops != null){
            mapFoodShops = this.props.foodShops.map((shop,index)=>{
                let showUrl = '/findfood/'+shop.foodplace_id
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
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="./foodShops/index.css"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"/>
            </head>
            <body style={bodyStyle}>
                <div className='container-fluid'>
                    <div className='navbar text-warning'>
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

                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
            </body>
        </html>
        )
    }
}


module.exports = Index;