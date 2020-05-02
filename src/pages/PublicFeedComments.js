import React, { Component } from "react";
import ProfileHover from "profile-hover";
import { ClimbingBoxLoader } from "react-spinners";
import Draggable from 'react-draggable';

class AppCard extends Component {

  state = { show: false };
  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  render(){
    return (
    <>
      {/*<div className="lg:w-1/3 px-8 mb-8 flex flex-col mx-auto items-center">
        <div className="relative" style={{ padding: "20px" }}>
          <p>
            {this.props.post.message.comment ? this.props.post.message.comment : "unknown"}
          </p>
          <p>
            {`${this.props.post.message.rating} stars` ? `${this.props.post.message.rating} stars` : "unknown"}
          </p>
          <p>
            Position: x: {this.props.post.message.deltaPosition.x ? this.props.post.message.deltaPosition.x : "unknown"}, y: {this.props.post.message.deltaPosition.y ? this.props.post.message.deltaPosition.y : "unknown"}
          </p>
          {this.props.post.message.account && (
            <div style={{ marginBottom: "10px" }}>
              <p>Submitted by</p>
              <ProfileHover
                address={this.props.post.message.account}
                style={{ width: "100%" }}
                showName={true}
              />
            </div>
          )}
        </div>
      </div>
      {(this.props.i + 1) % 3 === 0 && <div className="w-100"></div>}
      */}
      <Draggable defaultPosition={this.props.post.message.deltaPosition}>
      <div className="lg:w-1/3 px-8 mb-8 flex flex-col mx-auto items-center">
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

export default class PublicFeed extends Component {
  render() {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <h1 className="brand-font" style={{ fontSize: "4rem" }}>
          Feed of all public comments
        </h1>
        <p>...</p>
        <div className="flex flex-wrap items-center p-4 mt-12">
          {(!this.props.posts || this.props.posts.length < 1) && (
            <div style={{ width: "60px", margin: "auto" }}>
              <ClimbingBoxLoader color={"blue"} />
            </div>
          )}
          {this.props.posts &&
            this.props.posts.map((post, i) => {
              return (
                  <AppCard
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
