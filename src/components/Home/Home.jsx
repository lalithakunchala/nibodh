import React, { Component } from 'react'
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';
import Carousel from '../Carousel/Carousel';

export class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
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
