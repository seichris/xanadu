import React from 'react'

var backgroundImage = {
  backgroundImage: 'url(' + props.content + ')',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
};

const Slide = ({ content }) => (
  <div className="h-full w-full">
  hey yo waddup slide
  </div>
)
{/*
background-image: url('${content}');
background-size: cover;
background-repeat: no-repeat;
background-position: center;{/*
*/}

export default Slide
