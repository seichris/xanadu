import React, { Component } from "react";
const backgroundImage = require('./images/kontext.png');
const divStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '92vh'
};

export default class App extends Component {
  render() {
    return (
      <div className="cComponent" style={divStyle} >
        <h1 className="absolute bottom-0 left-0 p-40 text-5xl font-mono">true personalization</h1>
        <a href="https://www.deviantart.com/elclon/art/Blade-Runner-2049-Joi-Vector-2-Wallpaper-701437880" target="_blank" className="absolute bottom-0 right-0 text-white">background image source</a>
      </div>
    );
  }
}
