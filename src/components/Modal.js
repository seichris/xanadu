import React, { Component } from "react";
import CommentBox from "3box-comments-react";
//import Example from "./../components/Comments";
//import { SPACE_NAME } from "../Constants";

//const showHideClassName = show ? 'block relative' : 'hidden';
//const Modal = ({ handleClose, show, children }) => {
export default class Modal extends Component {
  state = {
    show: false,
    showHideClassName: 'hidden',
    handleHide: () => this.setState({ show: false, showHideClassName: 'hidden' }),
    handleShow: () => this.setState({ show: true, showHideClassName: 'block' })
  };

  render() {
    return (
    <>
      <button onClick={this.state.handleShow}  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Comments
      </button>
      <div className={this.state.showHideClassName}>
        <div className="modal-main">
          <CommentBox
            spaceName={"demo-app-store"}
            threadName={this.props.app.name}
            box={this.props.box}
            currentUserAddr={this.props.usersAddress}
            //currentUser3BoxProfile={this.props.threeBox}
            adminEthAddr={"0x2f4cE4f714C68A3fC871d1f543FFC24b9b3c2386"}
          />
          <button onClick={this.state.handleHide}>
            close
          </button>
        </div>
      </div>
    </>
  );
  }
}

//export default Modal;
