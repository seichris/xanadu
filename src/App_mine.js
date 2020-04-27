import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import "./App.css";
import Box from "3box";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
//import { BounceLoader } from "react-spinners";
import Home from "./pages/Home";
import AddApp from "./pages/AddApp";
import Profile from "./pages/Profile";

export default class App extends Component {

  state = {
    needToAWeb3Browser : false,
  }
  async getAddressFromMetaMask() {
    if (typeof window.ethereum == "undefined") {
      this.setState({ needToAWeb3Browser: true });
    } else {
      window.ethereum.autoRefreshOnNetworkChange = false; //silences warning about no autofresh on network change
      const accounts = await window.ethereum.enable();
      this.setState({ accounts });
    }
  }
  async componentDidMount() {
    await this.getAddressFromMetaMask();
    if (this.state.accounts) {
      // Now we have enabled the provider and have the users
      // ethereum address we can start working with 3Box
      const box = await Box.openBox(this.state.accounts[0], window.ethereum);
      const space = box.openSpace('xanadu');
      this.setState({ space, box });
    }
    const thread = await space.joinThread("https://xanadu.now.sh/", {
      firstModerator: "0x242bC81B7Fcda78dfA5C4A9AFEa724895c968A45",
      members: false
    });
    this.setState({ thread }, ()=>(this.getAppsThread()));
}
    async getAppsThread() {
     if (!this.state.thread) {
      console.error("apps thread not in react state");
      return;
    }
    const posts = await this.state.thread.getPosts();
    this.setState({posts});

    await this.state.thread.onUpdate(async()=> {
      const posts = await this.state.thread.getPosts();
      this.setState({posts});
    });
  }


  render() {

    if(this.state.needToAWeb3Browser){
      return <h1>Please install metamask</h1>
    }

    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

// function Home() {
//   return <h2>Home</h2>;
// }

// class Profile extends Component {
//   render() {
//     return <h2>Profile </h2>;
//   }
// }
