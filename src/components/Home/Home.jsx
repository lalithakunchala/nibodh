import React, { Component } from 'react'
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';
import Carousel from '../Carousel/Carousel';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';
import GoogleMap from '../GoogleMap/GoogleMap'

export class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Carousel />
                <Products />
                <GoogleMap />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
