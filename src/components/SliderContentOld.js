import React from 'react'
import Slide from './Slide'

const SliderContent = <div
  className="flex h-full"
  style={
    `transform: translateX(-${props => props.translate}px)`,
    `transition: transform ease-out ${props => props.transition}s`,
    `width: ${props => props.width}px`
  }
/>;

export default SliderContent
