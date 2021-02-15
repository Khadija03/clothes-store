import React from 'react'
import Slides from "./Slides"
import Clothes from "./Clothes"
function HomePage() {
    return (
        <div>
            <div style={{width:'50%',height:'50%',marginLeft: '25%' }}>
            <Slides/>
            </div>
            <Clothes/>
        </div>
    )
}

export default HomePage
