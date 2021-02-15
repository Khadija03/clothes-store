import React from 'react'
import Clothes from "../HomePage/Clothes"
import {Image} from "react-bootstrap"
import image from "./Photo/p.jpg"

function Men() {
    return (
        <div>
            <Image src ={image}  style={{marginLeft:'30%'}} />
            <Clothes/>
        </div>
    )
}

export default Men
