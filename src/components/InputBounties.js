import React, { Component } from "react";
//import Draggable from 'react-draggable';

const blankState = {
  bountyTopic: "",
  bountyDescription: "",
  bountyFunding: "",
  bountyDeadline: "",
  bountyMode: ""
};
export default class InputBountiestIdeas extends Component {
  state = blankState;

  handleChange = event => {
    this.setState(Object.assign({ [event.target.name]: event.target.value }));
  };

  async validateFormFields() {
    console.log("to do - validiate form");
  }

  handleSubmit = event => {
    event.preventDefault();
    this.validateFormFields();

    this.props.savePost({
      bountyTopic: this.state.bountyTopic,
      bountyDescription: this.state.bountyDescription,
      bountyFunding: this.state.bountyFunding,
      bountyDeadline: this.state.bountyDeadline,
      bountyMode: this.state.bountyMode,
    });

    this.setState(Object.assign({}, blankState, { submitted: true }));
  };

  render() {
    return (
      <>
      {/* { this.props.needsAWeb3Browser ?
        <>
        <p> Seems like you don't have a web3 browser.
        </p>
        <a href="https://metamask.io/download.html" rel="noopener noreferrer" target="_blank" className="underline">
          Install metamask to add your comment!
        </a>
        </>
      : */}
        <div className={`p-4 bg-gray-100 rounded shadow-md ${this.props.showCommentOpen ? "block" : "hidden"}`}>
          {!this.state.submitted && (
            <form className="w-full" onSubmit={this.handleSubmit}>
              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="bountyTopic">
                    Title
                  </label>
                </div>
                <div className="md:w-2/4">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="bountyTopic"
                    type="text"
                    value={this.state.bountyTopic}
                    onChange={this.handleChange}
                    name="bountyTopic"
                    aria-describedby="bountyTopic"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="bountyDescription">
                    Description
                  </label>
                </div>
                <div className="md:w-2/4">
                  <textarea
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="bountyDescription"
                    type="text"
                    value={this.state.bountyDescription}
                    onChange={this.handleChange}
                    name="bountyDescription"
                    aria-describedby="bountyDescription"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="bountyFunding">
                    Funding
                  </label>
                </div>
                <div className="md:w-2/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="bountyFunding"
                  type="text"
                  value={this.state.bountyFunding}
                  onChange={this.handleChange}
                  name="bountyFunding"
                  aria-describedby="bountyFunding"
                />
                </div>
              </div>
              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="bountyDeadline">
                    Deadline
                  </label>
                </div>
                <div className="md:w-2/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="bountyDeadline"
                  type="text"
                  value={this.state.bountyDeadline}
                  onChange={this.handleChange}
                  name="bountyDeadline"
                  aria-describedby="bountyDeadline"
                />
                </div>
              </div>
              <div className="md:flex md:items-center mb-2">
                <div className="md:w-1/4">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="bountyMode">
                    Mode
                  </label>
                </div>
                <div className="md:w-2/4">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="bountyMode"
                  type="text"
                  value={this.state.bountyMode}
                  onChange={this.handleChange}
                  name="bountyMode"
                  aria-describedby="bountyMode"
                />
                </div>
                <div className="md:w-1/4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" type="submit" value="Submit">
                    Post bounty
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
        {/* klammer zu */}
        </>
        );
      }
}
