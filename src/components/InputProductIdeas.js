import React, { Component } from "react";
import Draggable from 'react-draggable';

const blankState = {
  comment: "",
  commentHeader: ""
  //rating: ""
};
export default class InputProductIdeas extends Component {
  state = blankState;

  handleChange = event => {
    this.setState(Object.assign({ [event.target.name]: event.target.value }));
  };

  /*ratingChanged = (newRating) => {
    console.log(`${newRating} stars`);
    this.setState(Object.assign({ rating: newRating }));
  };*/

  async validateFormFields() {
    console.log("to do - validiate form");
  }

  handleSubmit = event => {
    event.preventDefault();
    this.validateFormFields();

    this.props.savePost({
      comment: this.state.comment,
      commentHeader: this.state.commentHeader
      //rating: this.state.rating
    });

    //this.setState(Object.assign({}, blankState, { submitted: true }));
    this.setState(Object.assign({}, blankState, { deltaPosition: { x: 0, y: 0 } }));
    let activeBox = document.querySelector(".activeBox");
    activeBox.style.transform = "translate(0, 0)";
  };

  render() {
    return (
      <>
        { this.props.needsAWeb3Browser ?
          <>
          <p> Seems like you don't have a web3 browser.
          </p>
          <a href="https://metamask.io/download.html" rel="noopener noreferrer" target="_blank" className="underline">
            Install metamask to add your comment!
          </a>
          </>
        :
        <div className={`p-4 bg-gray-100 rounded shadow-md ${this.props.showCommentOpen ? "block" : "hidden"}`}>
          {!this.state.submitted && (
            <form onSubmit={this.handleSubmit}>
              <div>
                <textarea
                  className="w-full shadow-inner p-2 border-0"
                  placeholder="Idea title"
                  rows="1"
                  value={this.state.commentHeader}
                  onChange={this.handleChange}
                  type="text"
                  name="commentHeader"
                  aria-describedby="commentHeader"
                />
                <textarea
                  className="w-full shadow-inner p-2 border-0"
                  placeholder="Details"
                  rows="1"
                  value={this.state.comment}
                  onChange={this.handleChange}
                  type="text"
                  name="comment"
                  aria-describedby="commentText"
                />
              </div>

              <div>
                <input type="submit" value="Submit" className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" />
              </div>

            </form>
          )}
        </div>
          }
        </>
        );
      }
}
