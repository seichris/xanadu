import React, { Component } from "react";
import Box from "3box";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

import HeroSection from "./components/landing/2HeroSection";
import HeroCommentSection from "./components/landing/3HeroCommentSection";
import FlowSection from "./components/landing/6FlowSection";
import BenefitsSection from "./components/landing/7BenefitsSection";
import ProductSection from "./components/landing/8ProductSection";
import FooterSection from "./components/10FooterSection";

import PublicFeed from "./pages/PublicFeed";
import PublicFeedComments from "./pages/PublicFeedComments";
import AddApp from "./pages/AddApp";
import Profile from "./pages/Profile";

/*const getThreeBox = async address => {
  const profile = await Box.getProfile(address);
  return profile;
};*/

export default class App extends Component {
  state = {
    needToAWeb3Browser: false
  };

  async componentDidMount() {

    const currentURL = window.location.href;
    const cleanCurrentURL = currentURL.replace(/\//g, "_");
    const chris = "did:3:bafyreiefwktffgtt75edstz3kwcijfqsviv33okgciioreuzpari3lnqyu";
    // check if there is a thread for this currentURL
    const threadCommentsThisURL = await Box.getThread(cleanCurrentURL, 'xanadu_now_sh_comments', "did:3:bafyreiefwktffgtt75edstz3kwcijfqsviv33okgciioreuzpari3lnqyu", false );
    this.setState({ threadCommentsThisURL });

    console.log(threadCommentsThisURL);

    }



  render() {
    if (this.state.needToAWeb3Browser) {
      return <h1>Please install metamask</h1>;
    }

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <div className="container mx-auto px-4">
                <HeroSection />
                <HeroCommentSection
                  accounts={this.state.accounts}
                  thread={this.state.threadCommentsThisURL}
                  //box={this.state.box}
                  //space={this.state.space}
                  threadMembers={this.state.threadMembers}
                  posts={this.state.comments}
                  //threeBoxProfile={this.state.threeBoxProfile}
                  //getAppsThread={this.getAppsThread.bind(this)}
                  //getCommentsThread={this.getCommentsThread.bind(this)}
                  usersAddress={
                    this.state.accounts ? this.state.accounts[0] : null
                  }
                />
                <FlowSection />
                <BenefitsSection />
                <ProductSection />
                <FooterSection />
              </div>
            </Route>
            {/*<Route path="/profile">
              {this.state.space && (
                <div className="container mx-auto px-4 flex flex-wrap justify-center">
                  <Profile
                    box={this.state.box}
                    space={this.state.space}
                    accounts={this.state.accounts}
                    threeBoxProfile={this.state.threeBoxProfile}
                  />
                  <FooterSection />
                </div>
              )}
              {!this.state.space && (
                <div style={{ width: "60px", margin: "auto" }}>
                  <ClimbingBoxLoader color={"blue"} />
                </div>
              )}
            </Route>*/}

            {/*<Route path="/add-application">
              {this.state.accounts && (
                <div className="container mx-auto px-4">
                  <AddApp
                    accounts={this.state.accounts}
                    thread={this.state.threadApps}
                    box={this.state.box}
                    space={this.state.space}
                    threadMembers={this.state.threadMembers}
                    posts={this.state.posts}
                    threeBoxProfile={this.state.threeBoxProfile}
                    getAppsThread={this.getAppsThread.bind(this)}
                  />
                  <FooterSection />
                </div>
              )}
              {!this.state.accounts && <h1>Login with metamask</h1>}
            </Route>*/}

            {/*<Route exact path="/public-feed">
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
                <FooterSection />
              </div>
            </Route>*/}

            {/*<Route exact path="/public-feed-comments">
              <div className="container mx-auto px-4">
                <PublicFeedComments
                  posts={this.state.comments}
                  space={this.state.space}
                  box={this.state.box}
                  getCommentsThread={this.getCommentsThread}
                  usersAddress={
                    this.state.accounts ? this.state.accounts[0] : null
                  }
                />
                <FooterSection />
              </div>
            </Route>*/}
          </Switch>
        </div>
      </Router>
    );
  }
}
