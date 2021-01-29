import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import classes from './styles.module.scss'
import './styles.scss'
import image1 from '../../assets/img/img1.svg'
import image2 from '../../assets/img/img2.svg'
import image3 from '../../assets/img/img3.svg'

const Slideshow: React.FC = () => {
    interface Settings {
        dots: boolean
        arrows: boolean 
        infinite: boolean 
        speed: number
        slidesToShow: number
        slidesToScroll: number
        autoplay: boolean 
        autoplaySpeed: number
        pauseOnHover: boolean 
        initialSlide: number
    }
    const settings: Settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        initialSlide: 0
      };
    return (
      <>
        <Slider {...settings}>
            <div className={classes.slide_wrapper}>
                <img src={image1} alt='image1' className={classes.img}/>
                <div className={classes.shadow}></div>
                <h2 className={classes.title}>Tokenplace</h2>
                <p className={classes.text}>Multi-exchange Trading Terminal</p>
            </div>
            <div className={classes.slide_wrapper}>
                <img src={image2} alt='image2' className={classes.img}/>
                <div className={classes.shadow}></div>
                <h2 className={classes.title}>Fund Platform</h2>
                <p className={classes.text}>Hedge funds wealth management</p>
            </div>
            <div className={classes.slide_wrapper}>
                <img src={image3} alt='image3' className={classes.img}/>
                <div className={classes.shadow}></div>
                <h2 className={classes.title}>Noviscient</h2>
                <p className={classes.text}>Management Platform</p>
            </div>
        </Slider>
      </>
    )
}
export default Slideshow;