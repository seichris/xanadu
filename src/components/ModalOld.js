//import { Modal, Button } from "react-bootstrap";
import React, { Component } from "react";
import CommentBox from "3box-comments-react";
//import { SPACE_NAME } from "../Constants";

export default class Example extends Component {
  state = {
    show: false,
    handleClose: () => this.setState({ show: false }),
    handleShow: () => this.setState({ show: true })
  };

  componentWillUnmount(){
    this.props.space.unsubscribeThread(this.props.app.name)
  }

  render() {
    return (
      <>
        <button variant="primary" onClick={this.state.handleShow} style={{width : '100%', margin: '10px'}}>
          Comments
        </button>

        <div className="modalModal" show={this.state.show} onHide={this.state.handleClose}>
          <div className="modalHeader" closeButton>
            <div className="modalTitle">{this.props.app.name}</div>
          </div>
          <img
            style={{
              width: "200px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "40px"
            }}
            src={
              this.props.app.appImage
                ? this.props.app.appImage
                : "https://via.placeholder.com/200"
            }
            onError={ev =>
              (ev.target.src =
                "http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png")
            }
          />
          <div className="modalBody">{this.props.app.description}</div>
          <CommentBox
            spaceName={"xanadu"}
            threadName={this.props.app.name}
            box={this.props.box}
            currentUserAddr={this.props.usersAddress}
            // currentUser3BoxProfile={this.props.threeBox}
            adminEthAddr={"0x242bC81B7Fcda78dfA5C4A9AFEa724895c968A45"}

          />
          <div className="footer">
            <button variant="secondary" onClick={this.state.handleClose} >
              Close
            </button>
          </div>
        </div>
      </>
    );
  }
}
