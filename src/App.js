import React, { Component } from "react";
import UseCases from './components/UseCases'
import bladerunner from './images/products/bladerunner.jpg';
import identity from './images/products/identity.png';
import twitter from './images/products/twitter.png';
import problem from './images/products/problem.png';
import airbnb from './images/products/airbnb.png';
import googlemaps from './images/products/googlemaps.png';
import logo from './images/logo.png';
import webSketch from './images/sketches/discover-content-aware-web.png';
import webappSketch from './images/sketches/discover-content-and-friends.png';
import webapp1 from './images/products/discover-content-and-friends-1.jpg';
import socialSketch from './images/sketches/better-social-media.png';
import social2 from './images/products/better-social-media-2.jpg';
import recommendsSketch from './images/sketches/better-movie-restaurant-recommendations.png';
import recommends1 from './images/products/better-movie-restaurant-recommendations-1.jpg';
import ceramic from './images/logos/ceramic.svg';
import filecoin from './images/logos/filecoin.svg';
import ethereum from './images/logos/ethereum.svg';
import ipfs from './images/logos/ipfs.svg';

const items=[
  {
    id: 0,
    preHead: "What’s possible",
    headline: "Discover new content and meet new friends.",
    subHead: "Kontext provides superior recommendations.",
    headImage: webappSketch,
    features: [
      {
        id: 0,
        featureHead: "Self-sovereign identity",
        featureSub: "Import your history of likes, ratings, comments and save new bookmarks.",
        featureImage: webapp1
      },
      {
        id: 1,
        featureHead: "Content discovery",
        featureSub: "Share your favorites safely, and discover new content.",
        featureImage: webapp1
      },
      {
        id: 2,
        featureHead: "Social context",
        featureSub: "See what your followers like, and find people with similar tastes.",
        featureImage: webapp1
      }
    ]
  },
  {
    id: 1,
    preHead: "What’s possible",
    headline: "Social Media, but without the toxicity and addictiveness.",
    subHead: "Kontext provides relief from endless scrolling and painful discourse.",
    headImage: socialSketch,
    features: [
      {
        id: 0,
        featureHead: "Tweets of the Week",
        featureSub: "Top tweets of the week, similar to top posts on Reddit.",
        featureImage: social2
      },
      {
        id: 1,
        featureHead: "Similar Tweets",
        featureSub: "Dive deeper into the rabbit hole, by discovering similar content.",
        featureImage: social2
      },
      {
        id: 2,
        featureHead: "Moderation of your choice",
        featureSub: "Order comments yourself, instead of Twitter’s native algorithms.",
        featureImage: social2
      }
    ]
  },
  {
    id: 2,
    preHead: "What’s possible",
    headline: "Better movie and restaurant recommendations.",
    subHead: "Complete identity for superior recommendation.",
    headImage: recommendsSketch,
    features: [
      {
        id: 0,
        featureHead: "Google Maps",
        featureSub: "Discover friends’ favorites instead of fake reviews and anon ratings.",
        featureImage: googlemaps
      },
      {
        id: 1,
        featureHead: "Netflix",
        featureSub: "Get new movie recommendations, based on your history from anywhere.",
        featureImage: googlemaps
      },
      {
        id: 2,
        featureHead: "Anywhere",
        featureSub: "Our API allows developers to overlay web3 recommendations anywhere.",
        featureImage: googlemaps
      }
    ]
  }
]

const headerItems= {
    id: 0,
    headline: "Discover the context-aware web.",
    subHead: "Free your online identity from data silos and experience a fully personalized internet.",
    buttonInline: "your mail",
    button: "Sign up",
    headImage: webSketch
}

const pitchItems= {
    id: 0,
    preHead: "Google, Facebook, Amazon, Twitter & co store and sell your identity. But they don't let you use it to identify yourself at other services.",
    headline: "Kontext frees your identity from data silos.",
    subHead: "Using web3 technologies:",
    buttonInline: "your mail",
    button: "Sign up",
    headImage: webSketch
}

function App() {
    return (
      <div>
        <nav className="flex flex-row items-center justify-between sticky top-0 xl:pt-2 lg:pt-2 md:pt-12 sm:pt-0 bg-white section-wrapper font-sans z-10">
          <div className="">
            <img src={logo} alt="twitter" className="h-12 px-4 py-2"/>
          </div>
          <div className="flex flex-row items-center color-">
            <a href="https://blog.kontext.app/" target="_blank" className="px-4 py-2 text-gray-900 hover:text-gray-700 inline-flex items-center">
              <svg className="fill-current w-5 h-5 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 20"><title>Blog</title><path d="M17.403 0L9.0709 9.72761L18.0597 22H13.75L6.52612 12.0672L3.81716 14.2836V22H0V0H3.81716V5.70522C3.81716 6.79975 3.7898 7.86691 3.73508 8.90672C3.68035 9.94652 3.62562 10.74 3.5709 11.2873H3.65299C3.89925 10.9316 4.1592 10.5759 4.43284 10.2201C4.73383 9.83706 5.00746 9.49502 5.25373 9.19403L13.0522 0H17.403Z" fill="#272C3A"/></svg>
              <span>Blog</span>
            </a>
            <a href="https://twitter.com/chriscyber2000" target="_blank" className="px-4 py-2 text-gray-900 hover:text-gray-700 inline-flex items-center">
              <svg className="fill-current w-5 h-5 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Twitter</title><path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path></svg>
              <span>Twitter</span>
            </a>
            <a href="https://discord.gg/XSHJ4HM" target="_blank" className="px-4 py-2 text-gray-900 hover:text-gray-700 inline-flex items-center">
              <svg className="fill-current w-5 h-5 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 146 146"><title>Discord</title><path d="M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z" fill-rule="nonzero"></path></svg>
              <span>Chat</span>
            </a>
            {/*<a className="block flex items-center hover:text-gray-700 mr-5" href="https://github.com" target="_blank" className="px-4 py-2 text-gray-900 hover:text-gray-700">
              <svg className="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>GitHub</title><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path></svg>
            </a>*/}
            {/*<button class="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 mx-8 rounded">
              Sign up
            </button>*/}
          </div>
        </nav>

        <div className="xl:px-56 lg:px-56 md:px-8 sm:px-2 header-section">
          <div className="section-wrapper ">
            <div className="flex flex-row items-center justify-between">
              <div className="section-header-text w-1/2">
                <h2 className="headline py-4 xl:text-6xl lg:text-6xl md:text-4xl sm:text-2xl text-xl leading-tight">
                    {headerItems.headline}
                </h2>
                <p className="sub-head text-lg ">
                    {headerItems.subHead}
                </p>
              </div>
              <div className="section-header-image w-1/3">
                <img src={headerItems.headImage} alt="discover-content-and-friends" className="w-11/12 mx-auto"/>
              </div>
            </div>
          </div>
        </div>


        <div className="xl:px-56 lg:px-56 md:px-8 sm:px-2 pitch-section text-center">
          <div className="section-wrapper ">
            <div className="w-3/5 mx-auto">
              <p className="pre-head text-lg ">{pitchItems.preHead}</p>
              <h2 className="headline py-4 xl:text-6xl lg:text-6xl md:text-4xl sm:text-2xl text-xl leading-tight">
                  {pitchItems.headline}
              </h2>
              {/**/}
              <p className="sub-head text-lg ">
                  {pitchItems.subHead}
              </p>

              <div className="flex flex-row items-center justify-between pt-8">
                <img src={filecoin}/>
                <img src={ethereum}/>
                <img src={ceramic}/>
                <img src={ipfs}/>
              </div>

            </div>
          </div>
        </div>



        <div className="xl:px-56 lg:px-56 md:px-8 sm:px-2">
          <UseCases items={items} />
        </div>


      </div>
    );
}

export default App
