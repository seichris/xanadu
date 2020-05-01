import React, { Component } from "react";
import ReactStars from 'react-stars'
const blankState = { comment: "", rating: "" };
export default class AppForm extends Component {
  state = blankState;

  handleChange = event => {
    this.setState(Object.assign({ [event.target.name]: event.target.value }));
  };

  ratingChanged = (newRating) => {
    console.log(`${newRating} stars`);
    this.setState(Object.assign({ rating: newRating }));
  };

  async validateFormFields() {
    console.log("to do - validiate form");
  }

  handleSubmit = event => {
    event.preventDefault();
    this.validateFormFields();

    this.props.savePost({
      comment: this.state.comment,
      rating: this.state.rating
    });

    this.setState(Object.assign({}, blankState, { submitted: true }));
  };

  render() {
    return (
        <div className="w-full max-w-sm mx-auto">
        {!this.state.submitted && (
          <form onSubmit={this.handleSubmit}>
            <div className="mb-4">
              <textarea
                className="w-full shadow-inner p-4 border-0"
                placeholder="Add your comment."
                rows="6"
                value={this.state.comment}
                onChange={this.handleChange}
                type="text"
                name="comment"
                aria-describedby="commentText"
              />
            </div>
            <div className="mb-4">

              <ReactStars
                count={5}
                onChange={this.ratingChanged}
                size={24}
                color2={'#ffd700'}
                edit={true}
                half={false}
                value={this.state.rating}
              />

            </div>
            <div className="mb-6">
              <input type="submit" value="Submit" className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" />
            </div>

          </form>
          )}
          {this.state.submitted && <div className="jumbotron">
            <h1>Thank you for submiting</h1>
            <button className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow"  onClick={()=>(this.setState({submitted : false}))}>Add another comment</button>
             </div>}
        </div>

        );
      }
}
