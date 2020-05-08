import React, {Component} from 'react';
import InputProductIdeas from './../../components/InputProductIdeas';
import ProfileHover from "profile-hover";
import { ScaleLoader } from "react-spinners";
import Draggable from 'react-draggable';
import products from './products';

export default class ProductSection extends Component {
  state = {
    thread: null
  };

  savePost = async formData => {
      // add the loggedin account to the form data to be saved
      formData.account = this.props.accounts[0];
      await this.props.thread.post(formData);
      this.props.getProductsThread();
    };

    state = {
      show: false
    };

  switchShowHide= () => {
          this.setState(prevState => {
              return {
                  show: !prevState.show
              }
          })
      }

  render() {
    return (
      <>
      <section className="py-12 px-4">
        {/*<p className="text-center max-w-2xl mx-auto text-gray-500 leading-relaxed">PRODUCTS</p>
        <h2 className="text-center text-4xl mb-4 font-heading">What can we do with this?</h2>*/}
        <p className="text-center mx-auto">
          Ethereum knowledge being scattered throughout social, forums, etc makes it hard for newcomers to get started.
        </p>
        <p className="text-center mx-auto">
          Using xanadu, we incentivize community members to free common good information from silos to where people need it.
        </p>

        <div className="flex flex-col">

          <p className="py-4">For The Ethereum Community</p>
          <div className="grid gap-4 grid-cols-2">
          {
            products.ethereumsection.map((eth, id) => {
              return (
                <div key={id} className="grid  grid-cols-2 rounded shadow-md">
                  <div className="p-4 h-full bg-gray-100 rounded-l">
                    <h3 className="font-semibold pb-2">{eth.h3}</h3>
                    <p>{eth.p}</p>
                  </div>
                  <div className="rounded-r">
                    <img className="rounded-tr" src={require(`./../../images/products/${eth.image1}`)} alt=""/>
                    <img className="rounded-br" src={require(`./../../images/products/${eth.image2}`)} alt=""/>
                  </div>
                </div>
              );
            })
          }
          </div>

          <p className="py-4">For Content Creators</p>
          <div className="grid gap-4 grid-cols-2">
          {
            products.creatorsection.map((eth, id) => {
              return (
                <div key={id} className="grid  grid-cols-2 rounded shadow-md">
                  <div className="p-4 h-full bg-gray-100 rounded-l">
                    <h3 className="font-semibold pb-2">{eth.h3}</h3>
                    <p>{eth.p}</p>
                  </div>
                  <div className="rounded-r">
                    <img className="rounded-tr" src={require(`./../../images/products/${eth.image1}`)} alt=""/>
                    <img className="rounded-br" src={require(`./../../images/products/${eth.image2}`)} alt=""/>
                  </div>
                </div>
              );
            })
          }
          </div>

          <p className="py-4">For web2 users</p>
          <div className="grid gap-4 grid-cols-2">
          {
            products.usersection.map((eth, id) => {
              return (
                <div key={id} className="grid  grid-cols-2 rounded shadow-md">
                  <div className="p-4 h-full bg-gray-100 rounded-l">
                    <h3 className="font-semibold pb-2">{eth.h3}</h3>
                    <p>{eth.p}</p>
                  </div>
                  <div className="rounded-r">
                    <img className="rounded-tr" src={require(`./../../images/products/${eth.image1}`)} alt=""/>
                    <img className="rounded-br" src={require(`./../../images/products/${eth.image2}`)} alt=""/>
                  </div>
                </div>
              );
            })
          }
          </div>

        </div>


        <div className="py-16">
          <div className="w-1/4 mx-auto text-left">
            <p className="mb-4 text-gray-700">
            Which other use cases come to your mind?
            </p>
          </div>

          { this.props.needsAWeb3Browser ?
            <a href="https://metamask.io/download.html" rel="noopener noreferrer" target="_blank" className="inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">
              Install metamask to add your idea
            </a>
          :
            <button onClick={this.switchShowHide} className="inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">
              {this.state.show ? "cancel" : "Add them to the site!"}
            </button>
          }

        </div>

        <div className="h-64 relative bg-white">
          <div className={`text-center absolute h-64 w-full ${this.state.show ? "block" : "hidden"}`}>

            {!this.props.thread && (
              <div style={{ width: "100px", margin: "auto" }}>
                <ScaleLoader color={"#667eea"} />
              </div>
            )}
            {this.props.thread && <InputProductIdeas savePost={this.savePost} />}

          </div>
          {(!this.props.posts || this.props.posts.length < 1) && (
            <div className="mx-auto text-center text-gray-700 mb-12">
              <ScaleLoader color={"#667eea"} />
              <p>
                loading posts...
              </p>
            </div>
          )}
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

      </section>
      </>
    );
  }
}

class CommentCard extends Component {
  render(){
    return (
      <Draggable bounds="parent" defaultPosition={this.props.post.message.deltaPosition}>
      <div className="comments-box-landing w-1/5 flex flex-col items-center">
        <div className="relative" style={{ padding: "20px" }}>
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
      </div>
      </Draggable>
    )
  }
}
