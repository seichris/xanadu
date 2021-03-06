import React, {Component} from 'react';
import InputProductIdeas from './../../components/InputProductIdeas';
import ProfileHover from "profile-hover";
import { ScaleLoader } from "react-spinners";
import Draggable from 'react-draggable';
import products from './products';

export default class ProductSection extends Component {
  state = {
    thread: null,
    showCommentOpen: false
  };

  savePost = async formData => {
      // add the loggedin account to the form data to be saved
      formData.account = this.props.accounts[0];
      await this.props.thread.post(formData);
      this.props.getProductsThread();
    };

  switchShowHide= () => {
          this.setState(prevState => {
              return {
                  showCommentOpen: !prevState.showCommentOpen
              }
          })
          this.props.askMetamask();
      }

  render() {
    return (
      <>
      <section className="py-12 px-4">
        {/*<p className="text-center max-w-2xl mx-auto text-gray-500 leading-relaxed">PRODUCTS</p>
        <h2 className="text-center text-4xl mb-4 font-heading">What can we do with this?</h2>*/}
        {/*<div className="pb-8">
          <p className="text-center mx-auto">
            Getting started with building Ethereum apps is hard, as knowledge is scattered throughout the social internet.
          </p>
          <p className="text-center mx-auto">
          This is Annie. She wants to build on Ethereum. And finding the right tooling or similar code is hard. It's all scattered throughout the social internet.
          </p>
          <p className="text-center mx-auto">
          She wants useful links.
          She wants social context.
          She wants to view the info without searching for it.
          She wants to find a mentor.
          She wants to guide the devs following her.
          She wants the links to always be accessible.
          </p>
          <p className="text-center mx-auto">
          This is how she gets all of this.
          </p>
        </div>*/}

        <div className="flex flex-col">

          <h2 className="py-8 mx-auto font-heading text-xl">Here is what we can build</h2>
          <div className="grid gap-4 grid-cols-2">
          {
            products.ethereumsection.map((eth, id) => {
              return (
                <div key={id} className="p-4 bg-gray-100 rounded shadow-md">
                  <img className="rounded pb-4" src={require(`./../../images/products/${eth.image1}`)} alt=""/>
                  <h3 className="font-semibold py-4">{eth.h3}</h3>
                  <p>{eth.p}</p>
                </div>
              );
            })
          }
          </div>

          <h2 className="py-8 mx-auto font-heading text-xl">Beyond Ethereum</h2>
          <div className="grid gap-4 grid-cols-2">
          {
            products.beyondsection.map((eth, id) => {
              return (
                <div key={id} className="p-4 bg-gray-100 rounded shadow-md">
                  <img className="rounded pb-4" src={require(`./../../images/products/${eth.image1}`)} alt=""/>
                  <h3 className="font-semibold py-4">{eth.h3}</h3>
                  <p>{eth.p}</p>
                </div>
              );
            })
          }
          </div>

        </div>


        <div className="py-16">
          <div className="w-1/3 mx-auto text-center">
            <p className="text-xl mb-4 text-gray-700 font-header">
            Which other use cases come to your mind?
            </p>
            <button onClick={this.switchShowHide} className="underline font-semibold">
              {this.state.showCommentOpen ? "cancel" : "Add them here!"}
            </button>
          </div>



        </div>

        <div className="relative">
          <div className={`text-center absolute w-full ${this.state.showCommentOpen ? "block" : "hidden"}`}>

            {!this.props.thread && (
              <div className="mx-auto text-gray-700">
                <ScaleLoader color={"#667eea"} />
                <p>
                   Loading posts... You may have to sign MetaMask 3 times.
                 </p>
              </div>
            )}


          </div>
          {/*{(!this.props.posts || this.props.posts.length < 1) && (
            <div className="mx-auto text-center text-gray-700 mb-12">
              <ScaleLoader color={"#667eea"} />
              <p>
                loading posts...
              </p>
            </div>
          )}*/}
          <div className="grid gap-4 grid-cols-2">
          {this.props.thread && <InputProductIdeas needsAWeb3Browser={this.props.needsAWeb3Browser} savePost={this.savePost} showCommentOpen={this.state.showCommentOpen}/>}
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

      </section>
      </>
    );
  }
}

class CommentCard extends Component {
  render(){
    return (
      <div className="p-4 bg-gray-100 rounded shadow-md">
        <p className="font-semibold py-4">
          {this.props.post.message.commentHeader ? this.props.post.message.commentHeader : "unknown"}
        </p>
        <p>
          {this.props.post.message.comment ? this.props.post.message.comment : "unknown"}
        </p>
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
    )
  }
}
