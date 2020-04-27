import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div className="w-full lg:w-auto lg:mr-6 text-center">
        <div className="mx-auto my-4 lg:my-0 lg:ml-0">
          <ul className="nav nav-pills nav-justified mb-5">
            <li className="nav-item block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700">
              <Link className="nav-link" to="/public-feed">
                Feed
              </Link>
            </li>
            <li className="nav-item block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700">
              <Link className="nav-link" to="/add-application">
                Add an Application
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
