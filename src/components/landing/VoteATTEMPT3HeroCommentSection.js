import React, {Component} from 'react';
//import Box from "3box";
import InputComments from './../../components/InputComments';
import ProfileHover from "profile-hover";
import { ScaleLoader } from "react-spinners";
import Draggable from 'react-draggable';
import ReactStars from 'react-stars';
import user from './../../images/persons/ethcat.png';
import xanadu from './../../images/logos/eth.png';
import eth from './../../images/logos/eth_logo.png';
import threebox from './../../images/logos/3box.png';
import ipfs from './../../images/logos/ipfs.png';
import arrowUp from './../../images/icons/ArrowUp.svg';
import arrowDown from './../../images/icons/ArrowDown.svg';

const encodeMessage = (category, data, parentId, nestLevel, grandParentId) => {
  if (parentId) {
    return {
      category,
      data,
      nestLevel,
      parentId,
      grandParentId
    }
  } else {
    return {
      category,
      data,
      nestLevel,
      grandParentId
    }
  }
}

export const filterComments = (comments, category, deleted) => {
  if (comments && comments.length > 0 && category) {
    return comments.filter(c => (c.message.category === category || c.message.category === deleted));
  } else {
    return [];
  }
}

export default class AddApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thread: null,
      showCommentOpen: false,
    };
    this.upvote = () => { this.vote(1); console.log("upvoted") }
    this.downvote = () => { this.vote(-1); console.log("downvoted") }
  }

  vote = async (direction) => {
    const {
      updateComments,
      login,
      comment,
      hasAuthed
    } = this.props;
    const { disableVote } = this.state;

    if (this.props.needsAWeb3Browser || disableVote) return;

    this.setState({ loadingPost: true });
    //if (!hasAuthed) await login();

    try {
      const myVote = this.getMyVote();
      if (myVote) {
        if (myVote.message.data === direction) {
          // undo vote
          await this.props.thread.deletePost(myVote.postId);
        } else {
          // re-vote
          await this.props.thread.deletePost(myVote.postId);
          const message = encodeMessage("vote", direction, comment.postId);
          await this.props.thread.post(message);
        }
      } else {
        const message = encodeMessage("vote", direction, comment.postId);
        await this.props.thread.post(message);
      }

      await updateComments();
      this.setState({ loadingPost: false });
    } catch (error) {
      console.error('There was an error saving your vote', error);
    }
  }

  getMyVote = () => {
    const {
      currentUserAddr,
      profiles,
      post
    } = this.props;

    const votes = post ? filterComments(post, "vote") : [];

    const currentUserAddrNormalized = currentUserAddr && currentUserAddr.toLowerCase();
    const myVotes = votes.filter(v => {
      const profile = profiles[v.author];
      const voterAddr = profile && profile.ethAddr.toLowerCase();
      return voterAddr === currentUserAddrNormalized
    });
    return myVotes && myVotes.length > 0 ? myVotes[0] : null;
  }


  savePost = async formData => {
      // add the loggedin account to the form data to be saved
      formData.account = this.props.accounts[0];
      await this.props.thread.post(formData);
      this.props.getCommentsThread();
    };

  switchShowHide= () => {
          this.setState(prevState => {
              return {
                  showCommentOpen: !prevState.showCommentOpen
              }
          })
          this.props.askMetamask();
        }

render() {

  const {
      comment,
      profile,
      thread,
      currentUserAddr,
      currentUser3BoxProfile,
      box,
      profiles,
      votes,
    } = this.props;

    let voted = 0;
    const myVote = this.getMyVote();
    if (myVote) voted = myVote.message.data;

    //const count = votes.reduce((sum, v) => (sum + v.message.data), 0);
    const count = votes;

     return (
       <div className="container relative">
        <div className="items-center my-12 text-center">
          <div className="mx-auto">
            <div className="my-4 w-1/3 mx-auto text-left">
              <img className="h-48 w-auto mx-auto my-8" src={user} alt="user"/>
              <p>
              <span className="font-semibold">This is Annie.</span> She wants to build on Ethereum. And it's tough. The knowledge is all scattered.
              </p>
              <ul className="py-4">
              <li>She wants <span className="font-semibold">useful links</span>.</li>
              <li>She wants <span className="font-semibold">social context</span>.</li>
              <li>She wants to <span className="font-semibold">find a mentor</span>.</li>
              <li>She wants to <span className="font-semibold">help future devs</span> herself.</li>
              <li>She wants the links to <span className="font-semibold">always be accessible</span>.</li>
              <li>She wants to view the info <span className="font-semibold">without searching</span> for it.</li>
              </ul>
              <p>
              Only web³ technology allows to build this sustainable ecosystem:
              </p>

            </div>
            <div>

              <div className="flex flex-wrap items-center -mx-8 mt-12 mb-2 py-12">
                <div className="flex flex-col lg:w-1/4 px-8 mb-8">
                  <img className="h-20 w-auto mx-auto  mb-4" src={eth} alt="ethereum"/>
                  <p className="font-semibold mb-2">
                  Rewards
                  </p>
                  <p className=" mb-2">
                  Like tradable reddit karma, plus negative karma.
                  </p>
                </div>
                <div className="lg:w-1/4 px-8 mb-8">
                  <img className="h-16 w-auto mx-auto  my-4" src={ipfs} alt="ipfs"/>
                  <p className="font-semibold mb-2">
                  Accessibility
                  </p>
                  <p className=" mb-2">
                  Safe data to ipfs, for it shall always be there.
                  </p>
                </div>
                <div className="lg:w-1/4 px-8 mb-8">
                  <img className="h-16 w-auto mx-auto  my-4" src={threebox} alt="3box"/>
                  <p className="font-semibold mb-2">
                  Social context
                  </p>
                  <p className=" mb-2">
                  Import contacts from Twitter, Github, Reddit.
                  </p>
                </div>
                <div className="lg:w-1/4 px-8 mb-8">
                  <img className="h-20 w-auto mx-auto  mb-4" src={xanadu} alt="ethereum"/>
                  <p className="font-semibold mb-2">
                  Anonymous reputation
                  </p>
                  <p className=" mb-2">
                  Get reputation for your ETH address.
                  </p>
                </div>
              </div>

              <p>
              How does that sound?
              </p>
              <button onClick={this.switchShowHide} className="underline font-semibold">
                {this.state.showCommentOpen ? "cancel" : "✍️ Add your opinion!"}
              </button>

            </div>
           </div>



           <div className={`text-center absolute w-full ${this.state.showCommentOpen ? "block" : "hidden"}`}>
             <div className="landingpage-comments-modal w-1/3 mx-auto">

             {!this.props.thread && (
               <div className="mx-auto text-gray-700">
                 <ScaleLoader color={"#667eea"} />
                 <p>
                   Loading posts... You may have to sign MetaMask 3 times.
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
               loading posts... MetaMask will ask you to sign access 3 times.
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
                   i={i}
                   currentUserAddr={this.props.currentUserAddr}
                   currentUser3BoxProfile={this.props.currentUser3BoxProfile}
                   thread={this.props.thread}
                   votes={votes}
                   voted={voted}
                   count={count}
                   getMyVote={this.getMyVote}
                   upvote={this.upvote}
                   downvote={this.downvote}
                   />
             );
           })}
       </div>

     </div>
     );
   }
 }

 class CommentCard extends Component {

   constructor(props) {
    super(props);
    this.state = {
      disableVote: true,
    }
  }

  async componentDidMount() {
    this.setState({ disableVote: false });
  }

  convertDate = (input) => {
    const date = new Date(input);
    const postdate = date.getFullYear() + '/' + ("0" + (date.getMonth() + 1)).slice(-2) + '/' + ("0" + date.getDate()).slice(-2);
    return postdate
  }

  render(){

    const {
      count,
      voted,
      upvote,
      downvote,
    } = this.props;

    const countClass = count > 0 ? "positive" : (count < 0 ? "negative" : "");


    return (
    <div className="h-0">
     <Draggable defaultPosition={this.props.post.message.deltaPosition}>
     <div className="comments-box-landing w-1/5 mx-auto items-center">
       <div className="relative flex flex-row" style={{ padding: "20px" }}>

        <div className="flex flex-col">
        <div className="comment_vote">
          <div className={`text-center ${countClass}`}>{count}</div>
          <button className="vote_btn vote_btn-middle" onClick={upvote}>
            <img src={arrowUp} alt="Upvote" width="50" className={`vote_icon upvote ${voted === 1 ? "voted" : ""}`}/>
          </button>
          <button className="vote_btn" onClick={downvote}>
            <img src={arrowDown} alt="Downvote" width="50" className={`vote_icon downvote ${voted === -1 ? "voted" : ""}`}/>
          </button>
        </div>
        </div>
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
             {/*<p className="text-xs text-gray-500 ml-8">
               {this.props.post.timestamp ? this.convertDate(this.props.post.timestamp) : "unknown timestamp"}
             </p>*/}
           </div>
         )}
         </div>

       </div>
     </div>
     </Draggable>
    </div>)
  }
 }
