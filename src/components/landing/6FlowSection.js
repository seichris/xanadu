import React from 'react';
import flow1 from './../../images/flow/create.png';
import flow2 from './../../images/flow/share.png';
import flow3 from './../../images/flow/reward.png';

function FlowSection(props) {
  return (
    <section className="py-12 px-4">
      <div className="flex flex-wrap items-center -mx-8 mt-12 mb-2">
        <div className="lg:w-1/3 px-8 mb-8">
          <img className="w-1/2 mx-auto mb-8" src={flow1} alt="create"/>
          <p className="text-gray-500 mb-2">
          creators get rewarded with tradable reputation.
          </p>
        </div>
        <div className="lg:w-1/3 px-8 mb-8">
          <img className="w-1/2 mx-auto mb-8" src={flow2} alt="share"/>
          <p className="text-gray-500 mb-2">
          While everyone else will find mentors and great content
          </p>
        </div>
      </div>
    </section>
  );
}

export default FlowSection;
