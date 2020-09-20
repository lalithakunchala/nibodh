import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import data from '../../data.json'
import {fetchItem} from '../../redux/action'

export class Products extends Component {
        constructor(props){
            super(props)
            this.state = {
                product:""
            }
        }

        handleItem = (e)=>{
            console.log(e.target.id)
            this.props.fetchItem(e.target.id)
        }

    render() {
        var obj = {};
        for(var i=0; i<data[0].items.length; i++){
            console.log(data[0].items[i])
            if(obj[data[0].items[i].category]>0){
                obj[data[0].items[i].category]++
            }
            else{
                obj[data[0].items[i].category]=1
            }
        }
        const cat = []
        for(var key in obj){
            cat.push(key)
        }
        console.log(cat);
        return (
            <div class=" p-5 m-5">
            <div class="container ">
                <h3 class="text-center p-5">ORDER</h3>
                <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                <ul class="list-group mt-5">
                <li class="list-group-item h4  p-4 bg-secondary text-light">FOOD ITEMS</li>
                    {
                        cat.map((item,index)=>(
                        <Link to="/productInfo"><li key={index} id = {item} onClick={this.handleItem} class="list-group-item h5 font-weight-bold list-group-item-info p-4">{item}</li></Link>
                        ))
                    }
                </ul>
                
                </div>
                <div class="col-9 col-sm-12 col-md-12 col-lg-9">
            <div class="row row-cols-1 row-cols-md-3 mt-5">
                {data&&data.map(item=>(
                        <div key={item.id} class="col  mb-4">
                        <div class="card shadow">
                        <img  src={item.image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5  class="card-title text-success">Price: {item.cost}</h5>
                        </div>
                        </div>
                    </div>
                ))}
        </div>
        </div>
        </div>
        </div>
        </div>
        )
    }
}



const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch=> {
    return{
        fetchItem : (n)=>dispatch(fetchItem(n))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
