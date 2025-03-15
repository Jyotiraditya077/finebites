import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
import Carousel from './carousel'
import ScrollVelocity from './ScrollVelocity';

const AppDownload = () => {
    return (
        <div>
            <br />
            <br />
            {/* <div style={{
                height: '350px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Carousel
                    baseWidth={300}
                    autoplay={true}
                    autoplayDelay={3000}
                    pauseOnHover={true}
                    loop={true}
                    round={false}
                />
            </div> */}
            <ScrollVelocity
                texts={['Fine Bites', 'Order now !']} 
                velocity={50} 
                className="custom-scroll-text"
            />
            <br />
            <br />
        </div>
    )
}

export default AppDownload