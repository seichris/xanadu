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

const getThreeBox = async address => {
  const profile = await Box.getProfile(address);
  return profile;
};

export default class App extends Component {
  state = {
    needsAWeb3Browser: false
  };

  async componentDidMount() {
    if (typeof window.ethereum == "undefined") {
      // if there is no Metamask, show public thread.posts for this URL
      this.setState({ needsAWeb3Browser: true });
      const currentURL = window.location.href;
      const cleanCurrentURL = currentURL.replace("\\."g, "_");
      const cleanerCurrentURL = currentURL.replace(/\./g, "_");
      console.log(cleanerCurrentURL);
      //const chris = "did:3:bafyreiefwktffgtt75edstz3kwcijfqsviv33okgciioreuzpari3lnqyu";
      const threadCommentsThisURL = await Box.getThread(cleanerCurrentURL, 'xanadu_now_sh_comments', "did:3:bafyreiefwktffgtt75edstz3kwcijfqsviv33okgciioreuzpari3lnqyu", false );
      this.setState({ threadCommentsThisURL });
      console.log(threadCommentsThisURL);
    } else {
      // if Metamask detected, then set accounts
      window.ethereum.autoRefreshOnNetworkChange = false; //silences warning about no autofresh on network change
      const accounts = await window.ethereum.enable();
      this.setState({ accounts });

      const threeBoxProfile = await getThreeBox(this.state.accounts[0]);
      this.setState({ threeBoxProfile });

      //const chris = "0x336BF8be536c8C804dab7D6CA5E5076a7DE555EE";
      const chris = "did:3:bafyreiefwktffgtt75edstz3kwcijfqsviv33okgciioreuzpari3lnqyu";
      const box = await Box.openBox(this.state.accounts[0], window.ethereum);
      this.setState({ box });
      const currentURL = window.location.href;
      const cleanCurrentURL = currentURL.replace(/\//g, "_");
      console.log(cleanCurrentURL);
      const cleanerCurrentURL = currentURL.replace(/\./g, "_");
      console.log(cleanerCurrentURL);
      const space = await this.state.box.openSpace(cleanerCurrentURL);
      this.setState({ space });

      const threadApps = await space.joinThread("context", {
        firstModerator: chris,
        members: false
      });
      this.setState({ threadApps }, ()=>(this.getAppsThread()));

      // add another thread
      const threadComments = await space.joinThread("xanadu_now_sh_comments", {
        firstModerator: chris,
        members: false
      });
      this.setState({ threadComments }, ()=>(this.getCommentsThread()));
      //console.log(threadComments);
    }
  }

  async getAppsThread() {
    if (!this.state.threadApps) {
      console.error("apps thread not in react state");
      return;
    }
    const posts = await this.state.threadApps.getPosts();
    this.setState({posts});
    await this.state.threadApps.onUpdate(async()=> {
      const posts = await this.state.threadApps.getPosts();
      this.setState({posts});
    })
  }

  async getCommentsThread() {
    if (!this.state.threadComments) {
      console.error("comments thread not in react state");
      return;
    }
    const comments = await this.state.threadComments.getPosts();
    this.setState({comments});
    await this.state.threadComments.onUpdate(async()=> {
      const comments = await this.state.threadComments.getPosts();
      this.setState({comments});
    })
  }

    // open Box

    // open space

    // open thread

    // open posts

    // forward all these to the components as (box, space, account, threeBoxProfile, thread, posts)
    // trigger it in Save Post


  render() {

    let postsWithOrWithoutMetamask = 0;
    let threadWithOrWithoutMetamask = 0;

    if (this.state.needsAWeb3Browser) {
      threadWithOrWithoutMetamask = this.state.threadCommentsThisURL;
      postsWithOrWithoutMetamask = this.state.threadCommentsThisURL;
    } else {
      threadWithOrWithoutMetamask = this.state.threadComments;
      postsWithOrWithoutMetamask = this.state.comments;
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
                  thread={threadWithOrWithoutMetamask}
                  box={this.state.box}
                  space={this.state.space}
                  threadMembers={this.state.threadMembers}
                  posts={postsWithOrWithoutMetamask}
                  threeBoxProfile={this.state.threeBoxProfile}
                  //getAppsThread={this.getAppsThread.bind(this)}
                  getCommentsThread={this.getCommentsThread.bind(this)}
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
            <Route path="/profile">
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
            </Route>

            <Route path="/add-application">
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
            </Route>

            <Route exact path="/public-feed">
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
            </Route>

            <Route exact path="/public-feed-comments">
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
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
