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
        <div className="pb-8">
          <p className="text-center mx-auto">
            Its hard for newcomers to get started, as Ethereum knowledge is scattered throughout social, forums, etc.
          </p>
          <p className="text-center mx-auto">
            Searching reddit, twitter, google, etc only helps to a certain level. Can we build a better database?
          </p>
          <p className="text-center mx-auto">
          Can we incentivize community members to curate lists of useful content? And link these resources wherever new community members start their research.
          </p>
        </div>

        <div className="flex flex-col">

          <p className="py-4 mx-auto font-semibold uppercase">For The Ethereum Community</p>
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

          <p className="py-4 mt-8 mx-auto font-semibold uppercase">Beyond Ethereum</p>
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
          <div className="w-1/4 mx-auto text-center">
            <p className="mb-4 text-gray-700">
            Which other use cases come to your mind?
            </p>
            { this.props.needsAWeb3Browser ?
              <a href="https://metamask.io/download.html" rel="noopener noreferrer" target="_blank" className="inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">
                Install metamask to add your idea
              </a>
            :
              <button onClick={this.switchShowHide} className="inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">
                {this.state.show ? "cancel" : "Add them here!"}
              </button>
            }
          </div>



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
