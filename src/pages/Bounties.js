import React, { Component } from "react";
import { ScaleLoader } from "react-spinners";
import ProfileHover from "profile-hover";
import InputBounties from './../components/InputBounties';

export default class Bounties extends Component {

  state = {
    thread: null,
    showCommentOpen: false
  };

  savePost = async formData => {
      // add the loggedin account to the form data to be saved
      formData.account = this.props.accounts[0];
      await this.props.thread.post(formData);
      this.props.getBountiesThread();
    };

  switchShowHide= () => {
          this.setState(prevState => {
              return {
                  showCommentOpen: !prevState.showCommentOpen
              }
          })
          this.props.askMetamask();
      }

  render(){
    return (
      <>
        <div className="py-16">
          <div className="w-1/3 mx-auto text-center">
            <h1 className="text-2xl mb-4 text-gray-700 font-heading">
            Bounties
            </h1>
            <button onClick={this.switchShowHide} className="underline font-semibold">
              {this.state.showCommentOpen ? "cancel" : "Add another bounty!"}
            </button>
          </div>
        </div>

        <div>
          <div className={`text-center w-full ${this.state.showCommentOpen ? "block" : "hidden"}`}>

            {!this.props.thread && (

              <div className="mx-auto text-gray-700">
                <ScaleLoader color={"#667eea"} />
                <p>
                   Loading posts... You may have to sign MetaMask 3 times.
                 </p>
              </div>
            )}

          </div>
          <div className="grid gap-4 grid-cols-2">
          {this.props.thread &&
            <InputBounties needsAWeb3Browser={this.props.needsAWeb3Browser} savePost={this.savePost} showCommentOpen={this.state.showCommentOpen}/>}
          {this.props.posts &&
            this.props.posts.map((post, i) => {
              return (
                  <CommentCard
                    post={post}
                    key={i}
                    threeBox={this.props.threeBox}
                    space={this.props.space}
                    box={this.props.box}
                    usersAddress={this.props.usersAddress}
                    i={i} />
              );
            })}
          </div>
        </div>
      </>
    )
  }
}

class CommentCard extends Component {
  render(){
    return (
      <div className="flex flex-col">
        <div className="md:flex md:items-center text-center">
          <h2 className="text-lg font-heading py-4 mx-auto">
            {this.props.post.message.bountyTopic ? this.props.post.message.bountyTopic : "unknown"}
          </h2>
        </div>
        <div className="p-4 bg-gray-100 rounded shadow-md">
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Description
              </label>
            </div>
            <div className="md:w-2/3">
              <p className="font-semibold py-2">
                {this.props.post.message.bountyDescription ? this.props.post.message.bountyDescription : "unknown"}
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Funding
              </label>
            </div>
            <div className="md:w-2/3">
              <p className="font-semibold py-2">
                {this.props.post.message.bountyFunding ? this.props.post.message.bountyFunding : "unknown"}
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Deadline
              </label>
            </div>
            <div className="md:w-2/3">
              <p className="font-semibold py-2">
                {this.props.post.message.bountyDeadline ? this.props.post.message.bountyDeadline : "unknown"}
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Mode
              </label>
            </div>
            <div className="md:w-2/3">
              <p className="font-semibold py-2">
                {this.props.post.message.bountyMode ? this.props.post.message.bountyMode : "unknown"}
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Posted by
              </label>
            </div>
            <div className="md:w-2/3">
              {this.props.post.message.account && (
                <div className="pt-4">
                  {/*<p className="text-xs">Submitted by</p>*/}
                    <ProfileHover
                      address={this.props.post.message.account}
                      showName={true}
                    />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-center mt-8">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
              Join bounty
            </button>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Fund bounty
            </button>
          </div>
        </div>
      </div>
    )
  }
}
