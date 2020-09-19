import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Carousel.module.css'

export class Carousel extends Component {
    render() {
        return (
            
        <div className={styles.hgt}>
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" >
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleCaptions" data-slide-to={1} />
          <li data-target="#carouselExampleCaptions" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://raw.githubusercontent.com/Abhishek9608/Food-delivery-system/master/food-delivery-app/public/Image/hotel_banner.jpeg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{marginBottom:"250px", fontFamily:"Opensas"}}>Delicious & Yummy</h1>
              <p>Specialist in Hyberabadi chicken Dum biryani.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="backgroundImage.jpg" style={{opacity:0.75}} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{marginBottom:"250px", fontFamily:"Opensas"}}>Delicious & Yummy</h1>
              <p>Specialist in Hyberabadi chicken Dum biryani.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://raw.githubusercontent.com/Abhishek9608/Food-delivery-system/master/food-delivery-app/public/Image/hotel_banner.jpeg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{marginBottom:"250px", fontFamily:"Opensas"}}>Delicious & Yummy</h1>
              <p>Specialist in Hyberabadi chicken Dum biryani.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>

                 </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)
