import React, { Component } from "react";
import Slider from './Slider'

function UseCases(props) {
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

                {item.features.map((feature, i) => (
                  <div className="w-1/3 px-2">
                    <h3 className="pb-2">{feature.featureHead}</h3>
                    <p className="item-content text-lg text-gray-500">
                        {feature.featureSub}
                    </p>
                    <div className="item-timeline">
                        <div className="item-timeline-progress w-0"></div>
                    </div>

                    <div className="carousel-item absolute opacity-0">
                        <img src={feature.featureImage} alt=""/>
                    </div>
                  </div>
                ))}

                {/*<div className="w-1/3 px-2">
                    <h3 className="pb-2">{item.featureHead1}</h3>
                    <p className="item-content text-lg text-gray-500">
                        {item.featureSub1}
                    </p>
                    <div className="item-timeline">
                        <div className="item-timeline-progress w-0"></div>
                    </div>

                    <div className="carousel-item absolute opacity-0">
                        <img src={item.featureImage1} alt=""/>
                    </div>
                  </div>
                  <div className="w-1/3 px-2 current">
                    <h3 className="pb-2">{item.featureHead2}</h3>
                    <p className="item-content text-lg text-gray-500">
                        {item.featureSub2}
                    </p>
                    <div className="item-timeline">
                        <div className="item-timeline-progress w-full"></div>
                    </div>

                    <div className="carousel-item absolute opacity-0">
                        <img src={item.featureImage2} alt=""/>
                    </div>
                  </div>
                  <div className="w-1/3 px-2">
                      <h3 className="pb-2">{item.featureHead3}</h3>
                      <p className="item-content text-lg text-gray-500">
                          {item.featureSub3}
                      </p>
                      <div className="item-timeline">
                          <div className="item-timeline-progress w-0"></div>
                      </div>

                      <div className="carousel-item absolute opacity-0">
                          <img src={item.featureImage3} alt=""/>
                      </div>
                  </div>*/}




              </div>
              <div className="slider-body">
                  <div className="carousel-item" id="carousel-img-1">
                      <img src={item.featureImage1} alt=""/>
                  </div>

                  <div className="carousel-item absolute opacity-0" id="carousel-img-2">
                      <img src={item.featureImage2} alt=""/>
                  </div>

                  <div className="carousel-item absolute opacity-0">
                      <img src={item.featureImage3} alt=""/>
                  </div>
              </div>
            </div>

            {/*<Slider slides={sliderImages} />*/}
            <Slider img1={item.featureImage1} img2={item.featureImage1} img3={item.featureImage1} />

        </div>
      ))}
    </>
  );
}

export default UseCases;
