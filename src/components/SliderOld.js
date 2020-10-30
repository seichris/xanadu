import React, { useState } from 'react'
import SliderContent from './SliderContent'
import Slide from './Slide'

/**
 * @function Slider
 */
const Slider = props => {
  const getWidth = () => window.innerWidth

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45
  })

  const { translate, transition } = state

  return (
    <div className="relative w-full h-full overflow-hidden m-auto">
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth()}
      >
        {props.slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>
    </div>
  )
}

export default Slider
