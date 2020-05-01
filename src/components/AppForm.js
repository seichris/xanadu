import React, { Component } from "react";
const blankState = { name: "", url: "", appImage: "", description: "" };
export default class AppForm extends Component {
  state = blankState;

  handleChange = event => {
    this.setState(Object.assign({ [event.target.name]: event.target.value }));
  };

  async validateFormFields() {
    console.log("to do - validiate form");
  }

  handleSubmit = event => {
    event.preventDefault();
    this.validateFormFields();
    this.props.savePost({
      name: this.state.name,
      url: this.state.url,
      appImage: this.state.appImage,
      description: this.state.description
    });

    this.setState(Object.assign({}, blankState, { submitted: true }));
  };

  render() {
    return (
        <div className="w-full max-w-sm mx-auto">
        {!this.state.submitted && (
          <form onSubmit={this.handleSubmit}>
            <div className="mb-4">
              <input
                className="form-control appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                placeholder="Name"
                type="text"
                name="name"
                aria-describedby="appName"
                value={this.state.name}
                onChange={this.handleChange}
                />
            </div>
            <div className="mb-4">
              <input
                className="form-control appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                placeholder="URL"
                type="text"
                name="url"
                aria-describedby="url"
                value={this.state.url}
                onChange={this.handleChange}
                />
            </div>
            <div className="mb-4">
              <input
                className="form-control appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                placeholder="Image URL"
                type="text"
                name="appImage"
                aria-describedby="application image"
                value={this.state.appImage}
                onChange={this.handleChange}
                />
            </div>
            <div className="mb-4">
              <input
                className="form-control appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                placeholder="Description"
                type="text"
                name="description"
                aria-describedby="description"
                value={this.state.description}
                onChange={this.handleChange}
                />
            </div>
            <div className="mb-6">
              <input type="submit" value="Submit" className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" />
            </div>
            <p className="text-center"><a className="text-blue-700 hover:underline" href="google.com">or sign in with Twitter »</a></p>

          </form>
          )}
          {this.state.submitted && <div className="jumbotron">
            <h1>Thank you for submiting</h1>
            <button className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow"  onClick={()=>(this.setState({submitted : false}))}>Add another application</button>
             </div>}
        </div>

        );
      }
}
