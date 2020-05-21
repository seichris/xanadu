import React, {Component} from 'react';
//import AppForm from './AppForm';
//import AddApp from '.././pages/AddApp';
//import { ClimbingBoxLoader } from 'react-spinners';
//import logo from './../../images/logos/eth.png';

export default class HeroSection extends Component {



  render() {
    return (
      <section className="py-12 px-4">
        <div className="flex flex-wrap items-center text-center lg:text-left -mx-2">

          <div className="lg:w-3/6 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none items-center text-center mx-auto">
            <div className="flex flex-row items-center -mx-8 mt-12 mb-2">
              {/*<img src={logo} alt="Xanadu" width="50"/>*/}
              <div>
                <h1 className="text-5xl mb-6 leading-tight font-heading">share notes on Ethereum {"\n"} and get rewarded</h1>
                {/*<h2 className="text-5xl mb-6 leading-tight font-heading">share your personal  version of the web</h2>
                <h3 className="mb-6 leading-tight font-heading">share web³ notes and get rewarded</h3>*/}
                <h3 className="text-xl mb-6 leading-tight font-heading">with valuable reputation tokens</h3>
              </div>
            </div>
          </div>
        </div>
        {/*<div className="items-center text-center my-24 -mx-2">
          <p className="mb-4 text-gray-700 ">
            What do you think about this proposition?
          </p>
          <a className="inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" href="/">
          Add your shitty opinion
          </a>
        </div>*/}


      </section>
    );
  }
}
