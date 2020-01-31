import React, { Component, useState } from 'react'
import ImageData from './ImageData.json'  
import {CarouselContainer, ImageContainer} from './styles'     

export default function ImageSlider() {
    const [ imageIndex, setImage ] = useState(0)
    function handleLeftClick() {
        if(imageIndex !== ImageData.length - 1) {
        setImage(imageIndex + 1)
        }
        else {
            setImage(0)
        }
    }
    function handleRightClick() {
        if(imageIndex !== 0) {
            setImage(imageIndex - 1)
        }
    }
        return (
        <CarouselContainer>
                <ImageContainer>
                <button onClick={handleRightClick}>Left</button>
                    <img src={ImageData[imageIndex].src}/>
                <button onClick={handleLeftClick}>Right</button>
                </ImageContainer>
        </CarouselContainer>
        )
}
