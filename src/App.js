import React, { Component } from "react";
import Box from "3box";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

import HeroSection from "./components/landing/2HeroSection";
import HeroCommentSection from "./components/landing/3HeroCommentSection";
import BenefitsSection from "./components/landing/7BenefitsSection";
import ProductSection from "./components/landing/8ProductSection";
import FooterSection from "./components/10FooterSection";

//import PublicFeed from "./pages/PublicFeed";
import PublicFeedComments from "./pages/PublicFeedComments";
//import AddApp from "./pages/AddApp";
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
    this.setState({ needsAWeb3Browser: true });
    const currentURL = window.location.href;
    const cleanCurrentURL = currentURL.replace(/\//g, "_");
    const cleanerCurrentURL = cleanCurrentURL.replace(/\./g, "_");
    console.log(cleanerCurrentURL);
    //const chris = "did:3:bafyreiefwktffgtt75edstz3kwcijfqsviv33okgciioreuzpari3lnqyu";
    const threadCommentsThisURL = await Box.getThread(cleanerCurrentURL, 'xanadu_now_sh_comments', "did:3:bafyreiefwktffgtt75edstz3kwcijfqsviv33okgciioreuzpari3lnqyu", false );
    //const threadProductsThisURL = await Box.getThread(cleanerCurrentURL, 'productIdeas', "did:3:bafyreiefwktffgtt75edstz3kwcijfqsviv33okgciioreuzpari3lnqyu", false );
    this.setState({ threadCommentsThisURL });
    //this.setState({ threadProductsThisURL });
    console.log(threadCommentsThisURL);
    //console.log(this.state.threadProductsThisURL);
    /*if (typeof window.ethereum == "object") {
      this.setState({ needsAWeb3Browser: false });
    } else {
      this.setState({ needsAWeb3Browser: true });
    }*/
    console.log(this.state.needsAWeb3Browser);
    }

  async askMetamask() {
    if (typeof window.ethereum == "object") {
    // if Metamask detected, then set accounts

    this.setState({ needsAWeb3Browser: false });
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
    const cleanerCurrentURL = cleanCurrentURL.replace(/\./g, "_");
    console.log(cleanerCurrentURL);
    const space = await this.state.box.openSpace(cleanerCurrentURL);
    this.setState({ space });
    console.log(space);

    const threadProducts = await space.joinThread("productIdeas", {
      firstModerator: chris,
      members: false
    });
    this.setState({ threadProducts }, ()=>(this.getProductsThread()));

    // add another thread
    const threadComments = await space.joinThread("xanadu_now_sh_comments", {
      firstModerator: chris,
      members: false
    });
    this.setState({ threadComments }, ()=>(this.getCommentsThread()));
    //console.log(threadComments);
    }
  }

  async getProductsThread() {
    if (!this.state.threadProducts) {
      console.error("products thread not in react state");
      return;
    }
    const products = await this.state.threadProducts.getPosts();
    this.setState({products});
    await this.state.threadProducts.onUpdate(async()=> {
      const products = await this.state.threadProducts.getPosts();
      this.setState({products});
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



  render() {

    let threadWithOrWithoutMetamask = 0;
    let postsWithOrWithoutMetamask = 0;
    let productThreadWithOrWithoutMetamask = 0;
    let productPostsWithOrWithoutMetamask = 0;

    if (this.state.needsAWeb3Browser) {
      threadWithOrWithoutMetamask = this.state.threadCommentsThisURL;
      postsWithOrWithoutMetamask = this.state.threadCommentsThisURL;
      productThreadWithOrWithoutMetamask = this.state.threadProductsThisURL;
      productPostsWithOrWithoutMetamask = this.state.threadProductsThisURL;
    } else {
      threadWithOrWithoutMetamask = this.state.threadComments;
      postsWithOrWithoutMetamask = this.state.comments;
      productThreadWithOrWithoutMetamask = this.state.threadProducts;
      productPostsWithOrWithoutMetamask = this.state.products;
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
                  askMetamask={this.askMetamask.bind(this)}
                  usersAddress={
                    this.state.accounts ? this.state.accounts[0] : null
                  }
                  needsAWeb3Browser={this.state.needsAWeb3Browser}
                />
                <BenefitsSection />
                <ProductSection
                  accounts={this.state.accounts}
                  thread={productThreadWithOrWithoutMetamask}
                  box={this.state.box}
                  space={this.state.space}
                  threadMembers={this.state.threadMembers}
                  posts={productPostsWithOrWithoutMetamask}
                  threeBoxProfile={this.state.threeBoxProfile}
                  //getAppsThread={this.getAppsThread.bind(this)}
                  getProductsThread={this.getProductsThread.bind(this)}
                  askMetamask={this.askMetamask.bind(this)}
                  usersAddress={
                    this.state.accounts ? this.state.accounts[0] : null
                  }
                  needsAWeb3Browser={this.state.needsAWeb3Browser}
                />
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
                  <ScaleLoader color={"#667eea"} />
                </div>
              )}
            </Route>

            {/*<Route path="/add-application">
              {this.state.accounts && (
                <div className="container mx-auto px-4">
                  <AddApp
                    accounts={this.state.accounts}
                    thread={this.state.threadProducts}
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
