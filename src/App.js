import React, { Component } from "react";
import bladerunner from './images/bladerunner.jpg';
import identity from './images/identity.png';
import twitter from './images/twitter.png';
import problem from './images/problem.png';
import airbnb from './images/airbnb.png';
import googlemaps from './images/googlemaps.png';
import logo from './images/logo.svg';
import twitterlogo from './images/icons/twitter.svg';
import discordlogo from './images/icons/discord.svg';

export default class App extends Component {
  render() {
    return (
      <div className="sm:px-2 md:px-4 lg:px-12 xl:px-12  pt-0 pb-12">
        <nav className="flex flex-row items-center justify-between sticky top-0 xl:pt-12 lg:pt-12 md:pt-12 sm:pt-0 xl:bg-transparent lg:bg-transparent md:bg-transparent bg-white sm:bg-white">
          <div className="">
            {/*<img src={logo} alt="twitter" className="h-12 px-4 py-2"/>*/}
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
        <div className="xl:px-40 lg:px-20 md:px-8 sm:px-2">
          <div className="first">
            <h1 className="xl:px-40 xl:pb-24 pt-20 pb-8 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-mono w-11/12 mx-auto">discover the context-aware web</h1>
            <img src={bladerunner} alt="bladerunner" className="w-11/12 mx-auto"/>
            <a className="bottom-0 right-0 text-white" href="https://www.deviantart.com/elclon/art/Blade-Runner-2049-Joi-Vector-2-Wallpaper-701437880" target="_blank">background by elclon</a>
          </div>
          <div className="second">
            <h1 className="xl:px-40 pt-40 xl:pb-24 pb-8 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-mono w-11/12 mx-auto">google, facebook & co store and sell your identity. but they don't let you use it to identify anywhere else</h1>
            <img src={problem} alt="the problem" className="w-11/12 mx-auto" />
          </div>
          <div className="second">
            <h1 className="xl:px-40 pt-40 xl:pb-24 pb-8 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-mono w-11/12 mx-auto">we free your history, likes, ratings and comments. and store them securely. using filecoin and ethereum.</h1>
            <img src={identity} alt="identity" className="w-11/12 mx-auto"/>
            {/*<div className="flex flex-row pl-40 pr-40 pb-40">
              <div className="w-2/6 flex flex-col items-center">
                <img src={identitydude} alt="identity" />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row pt-10 pb-10 items-center">
                  <div className="w-1/6 text-6xl text-gray-400">
                    1
                  </div>
                  <div className="w-3/6 text-xl font-mono">
                    backup history, likes, ratings from anywhere
                    to our secure, Filecoin bookmark manager
                  </div>
                </div>
                <div className="flex flex-row pt-10 pb-10 items-center">
                  <div className="w-1/6 text-6xl text-gray-400">
                    2
                  </div>
                  <div className="w-3/6 text-xl font-mono">
                    anonymously authenticate with
                    Ethereum and Filecoin DIDs anywhere
                  </div>
                </div>
                <div className="flex flex-row pt-10 pb-10 items-center">
                  <div className="w-1/6 text-6xl text-gray-400">
                    3
                  </div>
                  <div className="w-3/6 text-xl font-mono">
                    receive personalized recommendations
                    superior to Twitter, Amazon or Netflix
                  </div>
                </div>
              </div>
            </div>*/}
          </div>
          <div className="third">
            <h1 className="xl:px-40 pt-40 xl:pb-24 pb-8 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-mono w-11/12 mx-auto">log into our app to share your identity with friends. and spot who else shares your taste</h1>
            <img src={twitter} alt="better twitter" className="w-11/12 mx-auto" />
          </div>
          <div className="fourth">
            <h1 className="xl:px-40 pt-40 xl:pb-24 pb-8 xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-mono w-11/12 mx-auto">install the kontext chrome extension to present your identity anywhere. and discover personalized content</h1>
            <img src={googlemaps} alt="better googlemaps" className="w-11/12 mx-auto" />
          </div>
          {/*<div className="fifth">
            <h1 className="xl:px-40 pt-40  xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-mono w-11/12 mx-auto">Join our community</h1>
            <div className="flex flex-row items-center">
              <a href="https://twitter.com/chriscyber2000" target="_blank" className="px-4 py-2 text-teal-500">
                <img src={twitterlogo} alt="twitter" className="hover:text-teal-500 text-teal-500 fill-current"/>
              </a>
              <a href="https://discord.gg/XSHJ4HM" target="_blank" className="px-4 py-2 hover:text-teal-500">
                <img src={discordlogo} alt="discord" className="hover:text-teal-500"/>
              </a>
            </div>
          </div>*/}
        </div>
      </div>
    );
  }
}
