import React from 'react';
import { Link } from 'react-router-dom';
import icon1 from '.././images/icons/message.svg';
import icon2 from '.././images/icons/share.svg';

function ProductSection(props) {
  return (
    <footer className="flex flex-wrap flex-col lg:flex-row items-center p-4 border-t border-gray-500 mt-8">
      <div className="w-full lg:w-auto lg:mr-6 text-center">
      <Link className="nav-link" to="/">
        © 2020 Kontext
      </Link>
      </div>
      <div className="mx-auto my-4 lg:my-0 lg:ml-0">
        {/*<div className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="/">
          <Link className="nav-link" to="/public-feed">
            All Apps
          </Link>
        </div>*/}
        <div className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="/">
          <Link className="nav-link" to="/public-feed-comments">
            Comment Feed
          </Link>
        </div>
        <div className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="/">
          <Link className="nav-link" to="/bounties">
            Bounties
          </Link>
        </div>
        <div className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="/">
          <Link className="nav-link" to="/profile">
            My Profile
          </Link>
        </div>
        {/*<div className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700" href="/">
          <Link className="nav-link" to="/add-application">
            Add an Application
          </Link>
        </div>*/}
      </div>
      <div className="mx-auto lg:mx-0 lg:ml-auto">
        {/*<a className="inline-block mt-0 text-blue-900 hover:text-blue-700" href="/">FAQ</a>*/}
        <span>Built by <a className="inline-block underline mt-0 text-blue-900 hover:text-blue-700" rel="noopener noreferrer" target="_blank" href="https://twitter.com/chriscyber2000">Chris</a>, on <a rel="noopener noreferrer" target="_blank" className="inline-block underline mt-0 text-blue-900 hover:text-blue-700" href="https://github.com/seichris/xanadu">Github</a>.</span>
      </div>
      {/*<div className="flex justify-center mt-4 lg:mt-0 lg:ml-8">
        <img className="w-6 h-6 mr-6" src={icon1} alt=""/>
        <img className="w-6 h-6" src={icon2} alt=""/>
      </div>*/}
    </footer>
  );
}

export default ProductSection;
