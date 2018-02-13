import React, {Component} from 'react'

class AddListing extends Component {
    
    createListing = () => {
        var newItem = { "title" : this.title.value, "price" : this.price.value, "desc" : this.desc.value, "location" : this.location.value}
        console.log(newItem);
    }
    
    render() {
        var newListing = (
            <div>
                <input ref={r => this.title = r} placeholder="Title"/> 
                <input ref={r => this.price = r} placeholder="Price" type="number" min="0" step="0.01" />
                <input ref={r => this.desc = r} placeholder="Description"/>
                <input ref={r => this.location = r} placeholder="Location"/>
                <button onClick={this.createListing}>Add Listing</button>
                </div>
        )
        return (
            newListing
        )
    }
}

export default AddListing;