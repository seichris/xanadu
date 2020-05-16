import React, {Component} from 'react';
//import Box from "3box";
import InputComments from './../../components/InputComments';
import ProfileHover from "profile-hover";
import { ScaleLoader } from "react-spinners";
import Draggable from 'react-draggable';
import ReactStars from 'react-stars';

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

  switchShowHide= () => {
          this.setState(prevState => {
              return {
                  showCommentOpen: !prevState.showCommentOpen
              }
          })
          this.props.askMetamask();
        }

render() {
     return (
       <div className="container relative">
        <div className="items-center my-24 text-center">
          <div className="mx-auto">
            <p className="my-4">
             Get rewarded for sharing your notes.
            </p>
            <p className="my-4">
              How does that sound? &nbsp;
              <button onClick={this.switchShowHide} className="underline">
                {this.state.showCommentOpen ? "cancel" : "Add your shitty opinion!"}
              </button>

            </p>
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
                   i={i} />
             );
           })}
       </div>

     </div>
     );
   }
 }

 class CommentCard extends Component {
   render(){
     return (
     <div className="h-0">
       <Draggable defaultPosition={this.props.post.message.deltaPosition}>
       <div className="comments-box-landing w-1/5 flex flex-col mx-auto items-center">
         <div className="relative" style={{ padding: "20px" }}>
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
       </Draggable>
     </div>)
   }
 }
