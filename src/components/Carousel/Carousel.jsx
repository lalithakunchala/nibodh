import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Carousel.module.css'

export class Carousel extends Component {
    render() {
        return (
            
                <div className={styles.hgt}>
                {/* <div id="carouselExampleControls"className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active"  >
                    <img src="https://raw.githubusercontent.com/Abhishek9608/Food-delivery-system/master/food-delivery-app/public/Image/hotel_banner.jpeg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRld165P7Ih_XOuxurQI9MtWMk2TV8s6TMDzg&usqp=CAU" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://raw.githubusercontent.com/Abhishek9608/Food-delivery-system/master/food-delivery-app/public/Image/hotel_banner.jpeg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
                </div>
                <div>
                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval={1000}>
            <img src="https://raw.githubusercontent.com/Abhishek9608/Food-delivery-system/master/food-delivery-app/public/Image/hotel_banner.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-interval={2000}>
            <img src="https://raw.githubusercontent.com/Abhishek9608/Food-delivery-system/master/food-delivery-app/public/Image/hotel_banner.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://raw.githubusercontent.com/Abhishek9608/Food-delivery-system/master/food-delivery-app/public/Image/hotel_banner.jpeg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div> */}

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
            <img class="rounded-circle img-fluid icon bg-light float-left" style={{width:"100px",height:"100px", marginBottom:"300px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-fhoMKzx5yVIT2Dwe1UHrcefHpMrt2MyABjybsORWvjqD-FFR&usqp=CAU"></img>
              <h1 style={{marginBottom:"250px", fontFamily:"Opensas"}}>Delicious & Yummy</h1>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRld165P7Ih_XOuxurQI9MtWMk2TV8s6TMDzg&usqp=CAU" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <img class="rounded-circle img-fluid icon bg-light float-left" style={{width:"100px",height:"100px", marginBottom:"300px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-fhoMKzx5yVIT2Dwe1UHrcefHpMrt2MyABjybsORWvjqD-FFR&usqp=CAU"></img>
              <h1 style={{marginBottom:"250px", fontFamily:"Opensas"}}>Delicious & Yummy</h1>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://raw.githubusercontent.com/Abhishek9608/Food-delivery-system/master/food-delivery-app/public/Image/hotel_banner.jpeg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
            <img class="rounded-circle img-fluid icon bg-light float-left" style={{width:"100px",height:"100px", marginBottom:"300px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-fhoMKzx5yVIT2Dwe1UHrcefHpMrt2MyABjybsORWvjqD-FFR&usqp=CAU"></img>
              <h1 style={{marginBottom:"250px", fontFamily:"Opensas"}}>Delicious & Yummy</h1>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
