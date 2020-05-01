import React, {Component} from 'react';
import InputComments from './../../components/InputComments';
import ProfileHover from "profile-hover";
import { ClimbingBoxLoader } from "react-spinners";
import Draggable from 'react-draggable';

export default class AddApp extends Component {
    state = {
      thread: null
    };

    savePost = async formData => {
      // add the loggedin account to the form data to be saved
      formData.account = this.props.accounts[0];
      await this.props.thread.post(formData);
      this.props.getCommentsThread();
    };

    state = {
      show: false,
      showHideClassName: 'hidden',
      handleHide: () => this.setState({ show: false, showHideClassName: 'hidden' }),
      handleShow: () => this.setState({ show: true, showHideClassName: 'block' })
    };




    //switchShowHide () => this.setState({ show: !previousstae.show, showHideClassName: 'block'.... })

    // und unten die buttons sollen nur ein button sein
    //  <button onClick={switchShowHide}





    render() {
      return (
        <div className="container relative">
          <div className="items-center text-center my-24 -mx-2">
            <p className="mb-4 text-gray-700 ">
              What do you think about this proposition?
            </p>
            <button onClick={this.state.handleShow} className="inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">
              {this.state.show ? "cancel" : "Add your shitty opinion"}
            </button>
            <button onClick={this.state.handleHide} className={`inline-block py-4 px-8 leading-none text-white bg-transparent hover:text-indigo-600 rounded shadow ${this.state.showHideClassName}`}>
              cancel
            </button>














            <div className={`text-center absolute w-full ${this.state.showHideClassName}`}>
              <div className="landingpage-comments-modal w-1/3 mx-auto">

              {!this.props.thread && (
                <div style={{ width: "100px", margin: "auto" }}>
                  <ClimbingBoxLoader color={"blue"} />
                </div>
              )}
              {this.props.thread && <InputComments savePost={this.savePost} />}

            </div>
          </div>
        </div>



        {/* show me all comments. could also be on the press of a button */}
          <div className="">
            {(!this.props.posts || this.props.posts.length < 1) && (
              <div style={{ width: "60px", margin: "auto" }}>
                <ClimbingBoxLoader color={"blue"} />
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

      </div>
      );
    }
  }

  class CommentCard extends Component {
    render(){
      return (
      <>
        <Draggable defaultPosition={this.props.post.message.deltaPosition}>
        <div className="comments-box-landing w-1/4 flex flex-col mx-auto items-center">
          <div className="relative" style={{ padding: "20px" }}>
            <p>
              {this.props.post.message.comment ? this.props.post.message.comment : "unknown"}
            </p>
            <p>
              {`${this.props.post.message.rating} stars` ? `${this.props.post.message.rating} stars` : "unknown"}
            </p>
            <p className="text-xs text-gray-500">
              Position: x: {this.props.post.message.deltaPosition.x ? this.props.post.message.deltaPosition.x : "unknown"}, y: {this.props.post.message.deltaPosition.y ? this.props.post.message.deltaPosition.y : "unknown"}
            </p>
            {this.props.post.message.account && (
              <div style={{ marginBottom: "10px" }}>
                {/*<p className="text-xs">Submitted by</p>*/}
                <ProfileHover
                  address={this.props.post.message.account}
                  style={{ width: "100%" }}
                  showName={true}
                />
              </div>
            )}
          </div>
        </div>
        </Draggable>
      </>)
    }
  }