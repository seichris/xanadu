import React, { Component } from "react";
import ReactStars from 'react-stars';
import Draggable from 'react-draggable';

const blankState = {
  comment: "",
  //rating: "",
  deltaPosition: {
        x: 0, y: 0
      }
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
      //rating: this.state.rating,
      deltaPosition: this.state.deltaPosition,
    });

    this.setState(Object.assign({}, blankState, { submitted: true }));
  };


  handleDrag = (e, ui, deltaPosition) => {
      const {x, y} = this.state.deltaPosition;
      this.setState(Object.assign({ deltaPosition: { x: x + ui.deltaX, y: y + ui.deltaY } }));
    };

  onControlledDragStop = (e, position) => {
      const {x, y} = position;
      this.setState(Object.assign({ deltaPosition: {x, y}}));
    };

  render() {
    return (
      <Draggable
        bounds="parent"
        //axis="x"
        //handle=".handle"
        defaultPosition={{x: 200, y: 50}}
        //positionOffset={{x: '50%', y: '1%'}}
        position={this.deltaPosition}
        //grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.onControlledDragStop}
      >
          <div className="max-w-sm">
            {/*<div className="handle">Drag here</div>*/}
            {/*<div>x: {this.state.deltaPosition.x.toFixed(0)}, y: {this.state.deltaPosition.y.toFixed(0)}</div>*/}
            {!this.state.submitted && (
              <form onSubmit={this.handleSubmit}>
                <div>
                  <textarea
                    className="w-full shadow-inner p-4 border-0"
                    placeholder="Add your idea, and drag the note"
                    rows="2"
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
            {/*{this.state.submitted && <div className="jumbotron">
                <h1>Thank you for submiting</h1>
                <button className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow"  onClick={()=>(this.setState({submitted : false}))}>
                  Add another idea
                </button>
              </div>
            }*/}
          </div>
        </Draggable>
        );
      }
}
