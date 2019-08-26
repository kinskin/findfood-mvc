var React = require('react')


class Index extends React.Component {
    render(){

        let shopImageCategory = {
            height:'200px',
            weight:'300px'
        }

        let allFoodStyle = {
            display:'flex',
            flexWrap:'wrap'
        }

        let shopStyle = {
            width:'18rem',
            margin:'10px auto'
        }

        let mapFoodShops = this.props.foodShops.map(shop=>{
            let showUrl = '/findfood/'+shop.foodplace_id
            return(
                <div className="card" style={shopStyle}>
                    <img style={shopImageCategory} className="card-img-top" src={shop.image_url}/>
                    <div className="card-body">
                        <a className='btn' href={showUrl}>
                        Shop name: {shop.shopname}
                        </a>
                        <div className='card-header'>
                            <p>Location: {shop.location}</p>
                            <p>Address: {shop.address}</p>
                            <p>Postal Code: S({shop.postalcode})</p>
                        </div>
                    </div>
                </div>
                )
        })


    return(
        <html>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="./foodShops/index.css"/>
            </head>
            <body>

                <div className='container-fluid'>
                    <div className="card">
                        <div class="card-header">All foodplace</div>
                        <div className="card-body" style={allFoodStyle}>
                            <p>{mapFoodShops}</p>
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