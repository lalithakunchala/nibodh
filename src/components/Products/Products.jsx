import React, { Component } from 'react'
import { connect } from 'react-redux'
import data from '../../data.json'

export class Products extends Component {
    render() {
        return (
            
            <div class="container-fluid">
                <div class="row">
                <h1 class="m-4">Order Now</h1>
            <div class="row row-cols-1 row-cols-md-4 mt-5">
                {data&&data.map(item=>(
                        <div class="col mb-4">
                        <div class="card">
                        <img src={item.image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title">Price: {item.cost}</h5>
                        <p class="card-text">Rating:{item.star}</p>
                        </div>
                        </div>
                    </div>
                ))}
        </div>
        </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
