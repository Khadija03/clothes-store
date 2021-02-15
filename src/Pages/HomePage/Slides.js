import React from 'react'
import { Carousel } from "react-bootstrap"
import image1 from './Photos/im1.jpg'
import image2 from './Photos/im2.jpg'
import image3 from './Photos/im3.jpg'

function Slides() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome To Our Clothes Store</h3>
                        <p>We have the top clothing quality out there</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Here we Have clothes for women</h3>
                        <p>All women wear are available in our store and you can shippable them everywhere</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>As well for Men</h3>
                        <p>Find your unique style</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slides
