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
    render() {
      return (
        <div className="container">
          <h1 className="text-center mb-8">Submit your Opinion!</h1>
          {!this.props.thread && (
            <div style={{ width: "100px", margin: "auto" }}>
              <ClimbingBoxLoader color={"blue"} />
            </div>
          )}
          {this.props.thread && <AppForm savePost={this.savePost} />}
        </div>
      );
    }
  }
