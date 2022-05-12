// src/components/profile/profile.js

import React from 'react';
import TweetBox from '../tweets/tweet_box';
import LeftSidebar from '../left_sidebar/left_sidebar';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tweets: []
        }
    }
    
    componentWillMount() {
        console.log(this.props.currentUserId.id)
        this.props.fetchUserTweets(this.props.currentUserId.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ tweets: newState.tweets });
    }   
    
    render() {
          
          return (
            <div className="profile-wrap">
              <LeftSidebar />
              <div>
                <h1></h1>
                This user has no Tweets

              </div>
            </div>
          )
         
        // else {
        //   return (
        //     <div className="profile-wrap">
        //       <LeftSidebar />
        //       <div>
        //         <h2>All of This User's Tweets</h2>
        //         {this.state.tweets.map(tweet => (
        //           <TweetBox key={tweet._id} text={tweet.text} />
        //         ))}
        //       </div>
        //     </div>
        //   );
        // }
      }
}

export default Profile;