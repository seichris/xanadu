import React, {Component} from 'react';
import InputFromURL from './../components/InputFromURL';
import { ClimbingBoxLoader } from 'react-spinners';

export default class ContextChromeAddon extends Component {
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
      <div className="container relative">
        <div className="items-center text-center my-24 -mx-2">
          <p className="mb-4 text-gray-700 ">
            What do you think about this proposition?
          </p>
          <button onClick={this.switchShowHide} className="inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">
            {this.state.show ? "cancel" : "Add your shitty opinion"}
          </button>
          <div className={`text-center absolute w-full ${this.state.show ? "block" : "hidden"}`}>
            <div className="landingpage-comments-modal w-1/3 mx-auto">

            {!this.props.thread && (
              <div style={{ width: "100px", margin: "auto" }}>
                <ClimbingBoxLoader color={"blue"} />
              </div>
            )}
            {this.props.thread && <InputFromURL savePost={this.savePost} />}

          </div>
        </div>
      </div>
    </div>
    );
  }
}
