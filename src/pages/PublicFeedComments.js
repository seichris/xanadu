import React, { Component } from "react";
import ProfileHover from "profile-hover";
import { ClimbingBoxLoader } from "react-spinners";

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
      <div className="lg:w-1/3 px-8 mb-8 flex flex-col mx-auto items-center">
        <div className="relative" style={{ padding: "20px" }}>
          <h5>
            {this.props.post.message.comment ? this.props.post.message.comment : "unknown"}
          </h5>
          <h5>
            {this.props.post.message.rating ? this.props.post.message.rating : "unknown"}
          </h5>

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
