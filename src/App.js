import React, { Component } from "react";
import Box from "3box";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BounceLoader } from "react-spinners";

import HeroSection from "./components/2HeroSection";
import FlowSection from "./components/6FlowSection";
import BenefitsSection from "./components/3BenefitsSection";
import ProductSection from "./components/8ProductSection";
import FooterSection from "./components/10FooterSection";

import PublicFeed from "./pages/PublicFeed";
import AddApp from "./pages/AddApp";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";

const getThreeBox = async address => {
  const profile = await Box.getProfile(address);
  return profile;
};

export default class App extends Component {
  state = {
    needToAWeb3Browser: false
  };
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
      const threeBoxProfile = await getThreeBox(this.state.accounts[0]);
      this.setState({ threeBoxProfile });
    }
    const rach = "0x2f4cE4f714C68A3fC871d1f543FFC24b9b3c2386";
    const box = await Box.openBox(this.state.accounts[0], window.ethereum);
    this.setState({ box });
    const space = await this.state.box.openSpace("demo-app-store");
    this.setState({ space });

    const thread = await space.joinThread("application_list", {
      firstModerator: rach,
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
    })
  }

  render() {
    if (this.state.needToAWeb3Browser) {
      return <h1>Please install metamask</h1>;
    }

    return (
      <Router>
        <div>
          <Switch>
            <Route path="/profile">
              {this.state.space && (
                <Profile
                  box={this.state.box}
                  space={this.state.space}
                  accounts={this.state.accounts}
                  threeBoxProfile={this.state.threeBoxProfile}
                />
              )}
              {!this.state.space && (
                <div style={{ width: "60px", margin: "auto" }}>
                  <BounceLoader color={"blue"} />
                </div>
              )}
            </Route>
            <Route path="/add-application">
              {this.state.accounts && (
                <AddApp
                  accounts={this.state.accounts}
                  thread={this.state.thread}
                  box={this.state.box}
                  space={this.state.space}
                  threadMembers={this.state.threadMembers}
                  posts={this.state.posts}
                  threeBoxProfile={this.state.threeBoxProfile}
                  getAppsThread={this.getAppsThread.bind(this)}
                />
              )}
              {!this.state.accounts && <h1>Login with metamask</h1>}
            </Route>
            <Route path="/">
              <div className="container mx-auto px-4">
                <HeroSection />
                <FlowSection />
                <BenefitsSection />
                <ProductSection />
                <FooterSection />
                <Nav />
              </div>
            </Route>
            <Route path="/public-feed">
              <div className="container mx-auto px-4">
                <PublicFeed
                  posts={this.state.posts}
                  space={this.state.space}
                  box={this.state.box}
                  getAppsThread={this.getAppsThread}
                  usersAddress={
                    this.state.accounts ? this.state.accounts[0] : null
                  }
                />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
