import React, { useState } from 'react'
//import SliderContent from './SliderContent'
//import Slide from './Slide'

function Slider(props) {

  const getWidth = () => window.innerWidth

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45
  })

  const { translate, transition } = state

  var divStyle = {
    transform: 'translateX(-' + translate + 'px)',
    transition: 'transform ease-out' + transition + 's',
    width: getWidth() + 'px'
  };

  var imgStyle = {
    backgroundImage: 'url(' + props.img1 + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };

  return (
    <div className="relative w-full h-full overflow-hidden m-auto">
      <div
        className="flex h-full"
        style={divStyle}
      >
        {props.items.map((item, i) => (
          <div
            className="h-full w-full"
            style={imgStyle}
          >
            hey
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
  {/*<Slide key={slide + i} content={slide} />*/}
