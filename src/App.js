import React, { Component } from "react";
import UseCases from './components/UseCases'
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

const items=[
  {
    id: 1,
    preHead: "What’s possible",
    headline: "Discover new content and meet new friends.",
    subHead: "Kontext provides superior recommendations.",
    headImage: webappSketch,
    features: [
      {
        id: 1,
        featureHead: "Self-sovereign identity",
        featureSub: "Import your history of likes, ratings, comments and save new bookmarks.",
        featureImage: twitter
      },
      {
        id: 2,
        featureHead: "Content discovery",
        featureSub: "Share your favorites safely, and discover new content.",
        featureImage: twitter
      },
      {
        id: 3,
        featureHead: "Social context",
        featureSub: "See what your followers like, and find people with similar tastes.",
        featureImage: twitter
      }
    ]
  },
  {
    id: 2,
    preHead: "What’s possible",
    headline: "Social Media, but without the toxicity and addictiveness.",
    subHead: "Kontext provides relief from endless scrolling and painful discourse.",
    headImage: socialSketch,
    features: [
      {
        id: 1,
        featureHead: "Tweets of the Week",
        featureSub: "Top tweets of the week, similar to top posts on Reddit.",
        featureImage: twitter
      },
      {
        id: 2,
        featureHead: "Similar Tweets",
        featureSub: "Dive deeper into the rabbit hole, by discovering similar content.",
        featureImage: twitter
      },
      {
        id: 3,
        featureHead: "Moderation of your choice",
        featureSub: "Order comments yourself, instead of Twitter’s native algorithms.",
        featureImage: twitter
      }
    ]
  },
  {
    id: 3,
    preHead: "What’s possible",
    headline: "Better movie and restaurant recommendations.",
    subHead: "Complete identity for superior recommendation.",
    headImage: recommendsSketch,
    features: [
      {
        id: 1,
        featureHead: "Google Maps",
        featureSub: "Discover friends’ favorites instead of fake reviews and anon ratings.",
        featureImage: twitter
      },
      {
        id: 2,
        featureHead: "Netflix",
        featureSub: "Get new movie recommendations, based on your history from anywhere.",
        featureImage: twitter
      },
      {
        id: 3,
        featureHead: "Anywhere",
        featureSub: "Our API allows developers to overlay web3 recommendations anywhere.",
        featureImage: twitter
      }
    ]
  }
]

export default class App extends Component {
  render() {
    return (
      <div className="">
        <nav className="flex flex-row items-center justify-between sticky top-0 xl:pt-2 lg:pt-2 md:pt-12 sm:pt-0 bg-white">
          <div className="">
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

          <UseCases items={items} />




        </div>
      </div>
    );
  }
}
