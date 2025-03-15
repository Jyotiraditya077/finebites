import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Header.css';

const images = [
    '/header_img3.jpeg',
    '/header_img4.jpeg',
    '/header_img5.jpeg'
];

const Header = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true, // Smooth fade transition
        arrows: false,
        pauseOnHover: false // Add this property to disable pause on hover
    };

    return (
        <div className="header">
            <Slider {...settings} className="carousel">
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={image} alt={`Slide ${index}`} className="carousel-image" />
                        <div className="overlay"></div>
                    </div>
                ))}
            </Slider>
            <div className="header-contents">
                <h2>Treat yourself to tasty delights</h2>
                <p>
                Experience a world of flavors with expertly crafted dishes, prepared using only the highest-quality ingredients.
                </p>
                <a href='#explore-menu' onClick={() => {
                    setMenu("menu");
                    navigate("/explore-menu");
                    }} className="button">
                    View Menu
                </a>
            </div>
        </div>
    );
};

export default Header;