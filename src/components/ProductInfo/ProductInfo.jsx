import React, { Component } from 'react'
import { connect } from 'react-redux'
import data from '../../data.json'
import {Link} from 'react-router-dom'

export class ProductInfo extends Component {
    render() {
        var items = data[0].items
        return (
            <div>
                

<div className='container my-5'>
                            <Link to="/">Back</Link>
                        <div className='d-flex flex-row'>
                            <div style={{ flex: 3 }}>
                                <h1 className='mb-4 ' style={{ marginLeft: '150px' }}>{this.props.product}:</h1>
                                <hr style={{ border: '2px solid black', margin: '10px 170px', marginRight: '300px' }} />
                                {/* <p style={{ marginLeft: '200px' }}>{item.items.biryani.length} Items</p> */}
                                {/* {item.items.biryani.map(elem => <PriceCard data={elem} name={elem.itemName} price ={elem.itemPrice}/>)} */}
                                {data[0].items.filter(ele => ele.category === this.props.product && ele).map(elem => <div className='container '>
                                    <div className='row'>
                                        <div className='col-3 offset-2'>
                                            <h5 className='fontweight-bold'>{elem.itemName}</h5>
                                            <p className='text-muted'>₹ {elem.itemPrice}</p>
                                        </div>
                                        <div className='col-2 offset-1'>
                                            {elem.qty === 0 ?
                                                <button className='btn text-success '  style={{ border: '1px solid green' }}>ADD</button>
                                                : <button className='btn font-weight-bold text-success' style={{ border: '1px solid green' }}><span className='mr-2 text-secondary' style={{ fontSize: '20px' }}>-</span>{elem.qty}<span className='ml-2 text-success' style={{ fontSize: '20px' }}>+</span></button>
                                            }
                                        </div>
                                    </div>
                                </div>)}
                                </div>
                                </div>
                                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    product : state.product
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo)
