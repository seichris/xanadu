import React, { Component, useState } from "react";
import Slider from './Slider'

function UseCases(props) {

  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
    active: 0
  })

  const { translate, transition, active } = state

  var divStyle = {
    transform: 'translateX(-' + translate + 'px)',
    transition: 'transform ease-out' + transition + 's'
  };

  return (
    <>
      {props.items.map((item, index) => (
        <div className="section-wrapper about-socialmedia">
          <div className="flex flex-row items-center justify-between">
            <div className="section-header-text w-1/2">
              <p className="pre-head text-lg ">{item.preHead}</p>
              <h2 className="headline xl:text-6xl lg:text-6xl md:text-4xl sm:text-2xl text-xl leading-tight">
                  {item.headline}
              </h2>
              <p className="sub-head text-lg ">
                  {item.subHead}
              </p>
            </div>
            <div className="section-header-image w-1/3">
              <img src={item.headImage} alt="discover-content-and-friends" className="w-11/12 mx-auto"/>
            </div>
          </div>
          <div className="carousel relative">
            <div className="slider-tabs-head flex flex-row justify-between mt-20 mb-8">

            {/* setState doesnt work? */}

              {item.features.map((feature, i) => (
                <div onClick={() => setState(active == feature.id)} className="w-1/3 px-2 cursor-pointer">
                  <h3 className="pb-2">{feature.featureHead}</h3>
                  <p className="item-content text-lg text-gray-500">
                      {feature.featureSub}
                  </p>
                  <div className="item-timeline">
                      <div className="item-timeline-progress w-0"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative w-full h-full overflow-hidden m-auto">
              <div className="flex h-full" style={divStyle}>

                  <div className="h-full w-full">
                    { active == 0
                      ? <img src={item.features[0].featureImage} alt=""/>
                      : [
                          ( active == 1
                          ? <img src={item.features[1].featureImage} alt=""/>
                          : [
                              ( active == 2
                              ? <img src={item.features[2].featureImage} alt=""/>
                              : <img src={item.features[0].featureImage} alt=""/>
                              )
                            ]
                          )
                        ]
                    }

                  </div>
              </div>
            </div>



          </div>
        </div>
      ))}
    </>
  );
}

export default UseCases;
