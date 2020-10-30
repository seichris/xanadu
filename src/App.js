import React, { Component } from "react";
import Slider from './components/Slider'
import bladerunner from './images/products/bladerunner.jpg';
import identity from './images/products/identity.png';
import twitter from './images/products/twitter.png';
import problem from './images/products/problem.png';
import airbnb from './images/products/airbnb.png';
import googlemaps from './images/products/googlemaps.png';
import logo from './images/logo.svg';
import twitterlogo from './images/icons/twitter.svg';
import discordlogo from './images/icons/discord.svg';
import webSketch from './images/sketches/discover-content-aware-web.png';
import webappSketch from './images/sketches/discover-content-and-friends.png';
import socialSketch from './images/sketches/better-social-media.png';
import recommendsSketch from './images/sketches/better-movie-restaurant-recommendations.png';

const images = [
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
]

{/*
@function App

const App = () => {
*/}

export default class App extends Component {
  render() {
    return (
      <div className="">

{/*<Slider slides={images} />*/}

        <nav className="flex flex-row items-center justify-between sticky top-0 xl:pt-2 lg:pt-2 md:pt-12 sm:pt-0 bg-white">
          <div className="">
            {/*<img src={logo} alt="twitter" className="h-12 px-4 py-2"/>*/}
            <img src={logo} alt="twitter" className="h-12 px-4 py-2"/>
          </div>
          <div className="flex flex-row items-center">
            <a href="https://twitter.com/chriscyber2000" target="_blank" className="px-4 py-2 text-teal-500">
              <img src={twitterlogo} alt="twitter" className="hover:text-teal-500 text-teal-500 fill-current"/>
            </a>
            <a href="https://discord.gg/XSHJ4HM" target="_blank" className="px-4 py-2 hover:text-teal-500">
              <img src={discordlogo} alt="discord" className="hover:text-teal-500"/>
            </a>
          </div>
        </nav>
        <div className="xl:px-56 lg:px-56 md:px-8 sm:px-2">

          <div className="section-wrapper about-socialmedia">
            <div className="flex flex-row items-center justify-between">
              <div className="section-header-text w-1/2">
                <p className="upper-head text-lg ">What’s possible</p>
                <h2 className="headline xl:text-6xl lg:text-6xl md:text-4xl sm:text-2xl text-xl leading-tight">
                    Discover new content and meet new friends.
                </h2>
                <p className="sub-head text-lg ">
                    Kontext provides superior recommendations.
                </p>
              </div>
              <div className="section-header-image w-1/3">
                <img src={webappSketch} alt="discover-content-and-friends" className="w-11/12 mx-auto"/>
              </div>
            </div>

              <div className="carousel relative">
                <div className="slider-tabs-head flex flex-row justify-between mt-20 mb-8">
                    <div className="w-1/3 px-2" id="create-1" data-duration="6" data-next="create-2">
                        <h3 className="pb-2">Self-sovereign identity</h3>
                        <p className="item-content text-lg text-gray-500">
                            Import your history of likes, ratings, comments and save new bookmarks.
                        </p>
                        <div className="item-timeline">
                            <div className="item-timeline-progress w-0"></div>
                        </div>

                        <div className="carousel-item absolute opacity-0">
                            <img src="https://images.fibery.io/website/0.1.0-ci.0831.0069f78/img/case1-pic1.jpg" alt=""/>
                        </div>

                    </div>
                    <div className="w-1/3 px-2 current" id="create-2" data-next="create-3" data-duration="6">
                        <h3 className="pb-2">Content discovery</h3>
                        <p className="item-content text-lg text-gray-500">
                            Share your favorites safely, and discover new content.
                        </p>
                        <div className="item-timeline">
                            <div className="item-timeline-progress w-full"></div>
                        </div>

                        <div className="carousel-item absolute opacity-0">
                            <img src="https://images.fibery.io/website/0.1.0-ci.0831.0069f78/img/case1-pic2.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="w-1/3 px-2" id="create-3" data-next="create-1" data-duration="9" data-video="video-visualize-process">
                        <h3 className="pb-2">Social context</h3>
                        <p className="item-content text-lg text-gray-500">
                            See what your followers like, and find people with similar tastes.
                        </p>
                        <div className="item-timeline">
                            <div className="item-timeline-progress w-0"></div>
                        </div>

                        <div className="carousel-item absolute opacity-0">
                            <video loop="" muted="" playsinline="" autoplay="" poster="https://images.fibery.io/website/0.1.0-ci.0831.0069f78/img/case1-pic3.jpg" className="promo-video-wrap">
                                <source src="https://images.fibery.io/website/0.1.0-ci.0831.0069f78/img/case1-pic3.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
                <div className="slider-body">
                    <div className="carousel-item" id="carousel-img-1">
                        <img src="https://images.fibery.io/website/0.1.0-ci.0831.0069f78/img/case1-pic1.jpg" alt=""/>
                    </div>

                    <div className="carousel-item absolute opacity-0" id="carousel-img-2">
                        <img src="https://images.fibery.io/website/0.1.0-ci.0831.0069f78/img/case1-pic2.jpg" alt=""/>
                    </div>

                    <div className="carousel-item absolute opacity-0" id="carousel-img-3">
                        <video id="video-visualize-process" autoplay="" loop="" muted="" playsinline="" poster="https://images.fibery.io/website/0.1.0-ci.0831.0069f78/img/case1-pic3.jpg" className="promo-video-wrap">
                            <source src="https://images.fibery.io/website/0.1.0-ci.0831.0069f78/img/case1-pic3.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
              </div>

              {/*<Slider slides={images} />*/}

          </div>




        </div>
      </div>
    );
  }
}
