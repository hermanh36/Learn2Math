import React from "react";
import { Link } from "react-router-dom";

class ProfileSidebar extends React.Component {
    constructor(props){
        super(props);
    }

    trimEmail(email) {
        let username = '';
        for( let i = 0; i< email.length; i++){
            if (email[i] === '@'){
                return username;
            } else {
                username = username + email[i];
            }
        }
    }

    render(){
        const {profileOwner} = this.props;
        return (
            <>
                <div className="pro-sidebar-wrap">                                    
                    <div className="profile-pic-wrap">
                        <div>Profile Pic</div>
                    </div>
                    <div className="pro-username">
                        <p>{profileOwner ? this.trimEmail(profileOwner.email) : 'Loading...'}</p>
                    </div>
                    <div className="card-index-link">
                        <Link to={`/profile/${profileOwner?._id}/flashcards`}>Go to Flashcards</Link>
                    </div>
                </div>
            </>
        )
    }
}

export default ProfileSidebar; 

