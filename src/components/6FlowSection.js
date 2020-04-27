import React from 'react';
import flow1 from '.././images/flow/create.png';
import flow2 from '.././images/flow/share.png';
import flow3 from '.././images/flow/reward.png';

function FlowSection(props) {
  return (
    <section className="py-12 px-4">
      <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed text-center">HOW IT WORKS</p>
      {/*<h2 className="text-4xl mb-2 leading-tight font-heading text-center">Use the internet just like a google doc</h2>
      <p className="text-gray-500">click the div to auth with ethereum and open your first note</p>*/}
      <div className="flex flex-wrap items-center -mx-8 mt-12 mb-2">
        <div className="lg:w-1/3 px-8 mb-8">
          <img className="w-1/2 mx-auto mb-8" src={flow1} alt="create"/>
          <h3 className="text-2xl mb-2 font-heading text-center">
            <span className="inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full">1 </span>
            <span>Post anywhere</span>
          </h3>
          <a className="inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" href="/">
          Test now
          </a>
          <p className="text-gray-500 mb-2">
          Edit the web:
          </p>
          <ul className="list-disc">
            <li>Comment (gdoc)</li>
            <li>Highlight text (medium)</li>
            <li>Link to similar content</li>
            <li>Rate the site (google schema)</li>
            <li>Edit css (dark mode)</li>
          </ul>
        </div>
        <div className="lg:w-1/3 px-8 mb-8">
          <img className="w-1/2 mx-auto mb-8" src={flow2} alt="share"/>
          <h3 className="text-2xl mb-2 font-heading text-center">
            <span className="inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full">2 </span>
            <span>Share it</span>
          </h3>
          <a className="opacity-50 cursor-not-allowed inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" href="/">
          Share now
          </a>
          <p className="text-gray-500 mb-2">
          via twitter, or anonymously with eth auth, in private
          </p>
          <ul className="list-disc">
            <li>simple mode with twitter auth</li>
            <li>advanced privacy with ETH auth</li>
            <li>whitelist followers per post</li>
            <li>set different privacy levels for different followers</li>
          </ul>
        </div>
        <div className="lg:w-1/3 px-8 mb-8">
          <img className="w-1/2 mx-auto mb-8" src={flow3} alt="reward"/>
          <h3 className="text-2xl mb-2 font-heading text-center">
            <span className="inline-flex items-center justify-center h-12 w-12 mr-2 border rounded-full">3 </span>
            <span>Get rewarded</span>
          </h3>
          <a className="opacity-50 cursor-not-allowed inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" href="/">
          Login
          </a>
          <p className="text-gray-500 mb-2">
          If people like your content:
          </p>
          <ul className="list-disc">
            <li>You gain followers</li>
            <li>You gain money</li>
            <li>Your posts show up on top</li>
            <li>Onchain reputation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default FlowSection;
