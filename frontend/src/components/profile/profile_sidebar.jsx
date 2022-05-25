import React from "react";
import { Link } from "react-router-dom";

class ProfileSidebar extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
                <div className="pro-sidebar-wrap">                                    
                    <div className="profile-pic-wrap">
                        <div>Profile Pic</div>
                    </div>
                    <div className="pro-username">
                        <p>{this.props.user}</p>
                    </div>
                    <div className="card-index-link">
                        <Link>Go to Flashcards</Link>
                    </div>
                </div>
            </>
        )
    }
}

export default ProfileSidebar; 

