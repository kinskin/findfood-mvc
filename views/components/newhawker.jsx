import React, {fragment} from 'react';

class NewHawker extends React.Component{

    constructor(){
        super()

        this.state = {
            shopName: 'Enter shop name',
            address: 'Enter shop address',
            postalcode: 'Enter postalcode',
            location: 'Enter location'
        }
    }

    render(){
        let newHawker = '/findfood/newshop'
        return(
            <div className="modal fade" id="addHawkerModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Hello, enter hawker details below</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className='form-group' encType="multipart/form-data" method='POST' action={newHawker}>
                                Shop name: <input className='form-control' type='text' name='shopname' placeholder={this.state.shopName}/>
                                Address: <input className='form-control' type='text' name='address' placeholder={this.state.address}/>
                                Postalcode: <input className='form-control' type='text' name='postalcode' placeholder={this.state.postalcode}/>
                                <div className= 'my-2 d-flex flex-row justify-content-around'>
                                    Category:   <input type='radio' name='category' value='non-halal'></input>Non-halal
                                                <input type='radio' name='category' value='halal'></input>Halal
                                                <input type='radio' name='category' value='vegetarian'></input>Vegetarian
                                </div>
                                Location: <input className='form-control' type='text' name='location' placeholder={this.state.location}/>
                                Shop Image <input className='btn btn-md' type='file' name='image_url'/>
                                <br/>
                                <div className='d-flex flex-row justify-content-around'>
                                    <button type="button" className="btn btn-lg" data-dismiss="modal"><i class='bx bx-window-close'></i>Close</button>
                                    <button type="submit" className='btn btn-lg'><i class='bx bx-plus' style={{fontSize: '25px'}}></i>Add hawker</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewHawker;