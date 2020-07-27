import React, {Component} from 'react';
//import Box from "3box";
import InputComments from './../../components/InputComments';
import ProfileHover from "profile-hover";
import { ScaleLoader } from "react-spinners";
import Draggable from 'react-draggable';
import ReactStars from 'react-stars';
//import user from './../../images/persons/ethcat.png';

import Portis from '@portis/web3';
import Web3 from 'web3';

const portis = new Portis('364fc158-816b-441b-af42-1dbfbc4b1786', 'mainnet');
const web3 = new Web3(portis.provider);

export default class AddApp extends Component {
  state = {
    thread: null,
    showCommentOpen: false
  };

  savePost = async formData => {
      // add the loggedin account to the form data to be saved
      formData.account = this.props.accounts[0];
      await this.props.thread.post(formData);
      this.props.getCommentsThread();
    };

  editPost = async voteData => {
      voteData.account = this.props.accounts[0];
      await this.props.thread.post(voteData);
      this.props.getCommentsThread();
    };

  switchShowHide= () => {
          this.setState(prevState => {
              return {
                  showCommentOpen: !prevState.showCommentOpen
              }
          })
          this.props.askPortis();
        }

render() {
     return (
       <div className="container relative">
        <div className="items-center my-12 text-center">
          <div className="mx-auto">
            <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full mx-auto text-left">
              <p>
              Using Kontext, you can rate, highlight and comment on any content online and share it with the public — just like a tweet.
              </p>
              <p className="mt-4">
              How does that sound?
              </p>
              <button onClick={this.switchShowHide} className="underline font-semibold my-4">
                {this.state.showCommentOpen ? "cancel" : "✍️ Click to add your opinion!"}
              </button>
              {/*<p>
              This is a demo. Find the raw chrome extension <a href="https://github.com/seichris/xanadu-chrome" className="underline" rel="noopener noreferrer" to target="_blank">on github</a>.
              </p>*/}

            </div>

           </div>



           <div className={`text-center absolute w-full ${this.state.showCommentOpen ? "block" : "hidden"}`}>
             <div className="landingpage-comments-modal w-1/3 mx-auto">

             {!this.props.thread && (
               <div className="mx-auto text-gray-700">
                 <ScaleLoader color={"#667eea"} />
                 <p>
                   Loading posts... Please wait for Portis signing 3 messages.
                 </p>
               </div>
             )}
             {this.props.thread && <InputComments needsAWeb3Browser={this.props.needsAWeb3Browser} savePost={this.savePost} />}

           </div>
         </div>
       </div>

       <div>
         {/*{(!this.props.posts || this.props.posts.length < 1) && (
           <div className="mx-auto text-center text-gray-700 mb-12">
             <ScaleLoader color={"#667eea"} />
             <p>
               loading posts... Portis will ask you to sign access 3 times.
             </p>
           </div>
         )}*/}
         {this.props.posts &&
           this.props.posts.map((post, i) => {
             return (
                 <CommentCard
                   post={post}
                   key={i}
                   threeBox={this.props.threeBox}
                   space={this.props.space}
                   box={this.props.box}
                   usersAddress={this.props.usersAddress}
                   needsAWeb3Browser={this.props.needsAWeb3Browser}
                   editPost={this.editPost}
                   accounts={this.props.accounts}
                   thread={this.props.thread}
                   getCommentsThread={this.props.getCommentsThread.bind(this)}
                   />
             );
           })}
       </div>

     </div>
     );
   }
 }

class CommentCard extends Component {

  state = {
    voteSum: 0,
  };

  editPost = async voteData => {
      voteData.account = this.props.accounts[0];
      voteData.comment = this.props.post.message.comment;
      voteData.deltaPosition = this.props.post.message.deltaPosition;
      voteData.rating = this.props.post.message.rating;
      const voteSumPrevious = this.props.post.message.voteSum ? this.props.post.message.voteSum : 0;
      voteData.voteSum = this.state.voteSum + voteSumPrevious;
      await this.props.thread.deletePost(this.props.post.postId);
      await this.props.thread.post(voteData);
      await this.props.getCommentsThread();
      console.log(this.props.post.message);
    };

  upvote = () => {
    //console.log(`${this.state.voteSum} voteSum in state before upvote`);
    this.state.voteSum = 1;
    //console.log(`${this.state.voteSum} voteSum in state after upvote`);
    this.editPost({
      voteSum: this.state.voteSum
    });
    web3.eth.sendTransaction({
          to: '0xE08aa75AAE695c4622Cd430FbeBF4B97689d4Ee3',
          from: this.props.accounts[0],
          value: web3.utils.toWei('1', 'ether'),
      })
  };

  downvote = () => {
    this.state.voteSum = -1;
    this.editPost({
      voteSum: this.state.voteSum
    });
  };

  render(){
    return (
    <div className="h-0">
     <Draggable defaultPosition={this.props.post.message.deltaPosition}>
     <div className="comments-box-landing w-1/5 mx-auto items-center">
       <div className="relative flex flex-row" style={{ padding: "10px" }}>
       { !this.props.needsAWeb3Browser &&
         <div className="flex flex-col">
           <div className="comment_vote">
             <button className="vote_btn vote_btn-middle" onClick={this.upvote}>
              <div className={`upvoteIcon h-4 w-4 ${this.state.voteSum > 0 ? "upVoted" : ""}`}></div>
               {/*<img src={arrowUp} alt="Upvote" width="50" className={`vote_icon upvote ${this.voted ? "voted" : ""}`}/>*/}
             </button>
               {/*<div className={`text-center ${countClass}`}>{count}</div>
               <p className="text-center text-xs text-gray-500">{this.state.voteSum}</p>*/}
               <p className="text-center text-xs text-gray-500">{this.props.post.message.voteSum}</p>
             <button className="vote_btn" onClick={this.downvote}>
               {/*<img src={arrowDown} alt="Downvote" width="50" className={`vote_icon downvote ${this.voted ? "voted" : ""}`}/>*/}
               <div className={`downvoteIcon h-4 w-4 ${this.state.voteSum < 0 ? "downVoted" : ""}`}></div>
             </button>
           </div>
         </div>
        }
         <div>
           <p>
             {this.props.post.message.comment ? this.props.post.message.comment : "unknown"}
           </p>
           {/*<p>
             {`${this.props.post.message.rating} stars` ? `${this.props.post.message.rating} stars` : "unknown"}
           </p>*/}
           {/*<p className="text-xs text-gray-500">
             Position: x: {this.props.post.message.deltaPosition.x ? this.props.post.message.deltaPosition.x : "unknown"}, y: {this.props.post.message.deltaPosition.y ? this.props.post.message.deltaPosition.y : "unknown"}
           </p>*/}
           {this.props.post.message.account && (
             <div className="pt-4">
               {/*<p className="text-xs">Submitted by</p>*/}
                 <ProfileHover
                   address={this.props.post.message.account}
                   showName={true}
                 />
               <ReactStars
                 count={5}
                 size={20}
                 color2={'#ffd700'}
                 edit={false}
                 half={false}
                 value={this.props.post.message.rating}
               />
             </div>
           )}
         </div>
       </div>
     </div>
     </Draggable>
    </div>)
  }
}
