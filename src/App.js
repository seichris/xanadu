import React, { Component } from "react";
import bladerunner from './images/bladerunner.png';
import identity from './images/identity.png';
import twitter from './images/twitter.png';
import airbnb from './images/airbnb.png';
import logo from './images/logo.svg';
import twitterlogo from './images/icons/twitter.svg';
import discordlogo from './images/icons/discord.svg';

export default class App extends Component {
  render() {
    return (
      <>
        <nav className="flex flex-row items-center justify-between sticky top-0 pt-4">
          <div className="">
            {/*<img src={logo} alt="twitter" className="h-8"/>*/}
            <img src={logo} alt="twitter" className="h-8"/>
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
        <div className="px-40">
          <div className="first">
            <h1 className="px-40 pt-20 pb-40 text-5xl font-mono">divulge your identity to the ai</h1>
            <img src={bladerunner} alt="bladerunner" className="fullScreenImage"/>
            <a className="bottom-0 right-0 text-white" href="https://www.deviantart.com/elclon/art/Blade-Runner-2049-Joi-Vector-2-Wallpaper-701437880" target="_blank">background by elclon</a>
          </div>
          <div className="second">
            <h1 className="pl-40 pr-40 pt-40  text-5xl font-mono">secure your likes, ratings, comments</h1>
            <h1 className="pl-40 pr-40 pb-40  text-5xl font-mono">& discover people with similar tastes</h1>
            <img src={identity} alt="identity" className="fullScreenImage"/>
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
            <h1 className="pl-40 pr-40 pt-40  text-5xl font-mono">authenticate with Filecoin or Ethereum</h1>
            <h1 className="pl-40 pr-40 pb-40  text-5xl font-mono">for instant personalization</h1>
            <img src={twitter} alt="better twitter" className="fullScreenImage" />
          </div>
          <div className="fourth">
            <h1 className="pl-40 pr-40 pt-40  text-5xl font-mono">and social context</h1>
            <h1 className="pl-40 pr-40 pb-40  text-5xl font-mono">anywhere</h1>
            <img src={airbnb} alt="better airbnb" className="fullScreenImage" />
          </div>
        </div>
      </>
    );
  }
}
