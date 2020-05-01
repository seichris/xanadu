import React, {Component} from 'react';
import AppForm from './../components/AppForm';
import { ClimbingBoxLoader } from 'react-spinners';

export default class AddApp extends Component {
    state = {
      thread: null
    };

    savePost = async formData => {
      // add the loggedin account to the form data to be saved
      formData.account = this.props.accounts[0];
      await this.props.thread.post(formData);
      this.props.getAppsThread();
    };

    state = {
      show: false,
      showHideClassName: 'hidden',
      handleHide: () => this.setState({ show: false, showHideClassName: 'hidden' }),
      handleShow: () => this.setState({ show: true, showHideClassName: 'block' })
    };


    render() {
      return (
        <div className="container">
          <div className="items-center text-center my-24 -mx-2">
            <p className="mb-4 text-gray-700 ">
              What do you think about this proposition?
            </p>
            <button onClick={this.state.handleShow} className="inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">
            Add your shitty opinion
            </button>
          </div>
          <div className={this.state.showHideClassName}>
            <div className="modal-main">
          {!this.props.thread && (
            <div style={{ width: "100px", margin: "auto" }}>
              <ClimbingBoxLoader color={"blue"} />
            </div>
            )}
            {this.props.thread && <AppForm savePost={this.savePost} />}
            <button onClick={this.state.handleHide} className="inline-block py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">
              close
            </button>
          </div>
        </div>
      </div>
      );
    }
  }
