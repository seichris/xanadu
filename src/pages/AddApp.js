import React, {Component} from 'react';
import InputApps from './../components/InputApps';
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
        <div className="container xl:mb-48 lg:mb-48 md:mb-12 sm:mb-12 mb-12">
          <h1 className="text-center mb-8">Submit your App!</h1>
          {!this.props.thread && (
            <div style={{ width: "100px", margin: "auto" }}>
              <ClimbingBoxLoader color={"blue"} />
            </div>
          )}
          {this.props.thread && <InputApps savePost={this.savePost} />}
        </div>
      );
    }
  }
