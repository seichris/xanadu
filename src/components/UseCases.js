import React, { Component, useState } from "react";

function UseCases(props) {

  const [state, setState] = useState({
    active: 0
  })

  const { active } = state

  var divStyle = {
    width: '100%',
    transition: 'width 2s ease-out'
  };

  return (
    <>
      {props.items.map((item, index) => (
        <div className="section-wrapper feature-section">
          <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col items-center justify-between">
            <div className="section-header-text xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full xl:px-0 lg:px-0 md:px-0 sm:px-0 px-2">
              <p className="pre-head text-lg ">{item.preHead}</p>
              <h2 className="headline xl:text-6xl lg:text-6xl md:text-4xl sm:text-5xl text-5xl leading-tight">
                  {item.headline}
              </h2>
              <p className="sub-head text-lg ">
                  {item.subHead}
              </p>
            </div>
            <div className="section-header-image w-2/4 xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 pt-12">
              <img src={item.headImage} alt="discover-content-and-friends" className="w-11/12 mx-auto"/>
            </div>
          </div>
          <div className="carousel relative">
            <div className="slider-tabs-head flex flex-row justify-between mt-20 mb-8">
              {item.features.map((feature, id) => (
                <div onClick={() => { setState({active: feature.id}); console.log(feature.id)}} className="w-1/3 mx-2 cursor-pointer">
                  <h3 className="pb-2">{feature.featureHead}</h3>
                  <p className="item-content text-lg text-gray-500">
                      {feature.featureSub}
                  </p>
                  <div className="item-timeline mt-4">
                  { active == feature.id
                    ? <div className="item-timeline-progress w-full" style={divStyle} ></div>
                    : <div className="item-timeline-progress w-0"/>
                  }
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
