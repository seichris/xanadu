import React, { Component } from "react";
import ProfileHover from "profile-hover";
import { ClimbingBoxLoader } from "react-spinners";
import Modal from "./../components/Modal";

class AppCard extends Component {
  render(){
    return (
    <>
      <div className="lg:w-1/3 px-8 mb-8">
        <div style={{ padding: "20px" }}>
          <h5>
            {this.props.post.message.name ? this.props.post.message.name : "unknown"}
          </h5>
          <img
            style={{ height: "10vw" }}
            src={
              this.props.post.message.appImage
                ? this.props.post.message.appImage
                : "https://via.placeholder.com/200"
            }
            onError={ev =>
              (ev.target.src =
                "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png")
            }
          />
          <p>{this.props.post.message.description}</p>
          {this.props.post.message.url && (
            <p>
              <a href={this.props.post.message.url} target="_blank">
                website
              </a>
            </p>
          )}
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
          {/*<Modal
            app={this.props.post.message}
            threeBox={this.props.threeBox}
            space={this.props.space}
            box={this.props.box}
            usersAddress={this.props.usersAddress}
          />*/}
        </div>
      </div>
      {(this.props.i + 1) % 3 == 0 && <div className="w-100"></div>}
    </>)
  }

}

export default class PublicFeed extends Component {
  render() {
    return (
      <div className="container" style={{ textAlign: "center" }}>
        <h1 className="brand-font" style={{ fontSize: "4rem" }}>
          Feed of all public threads
        </h1>
        <p>Each thread got one comment box.</p>
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
