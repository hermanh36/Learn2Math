import React from "react";

class ProfileSidebar extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="profile-sidebar-wrap">
                {this.props.user} Test
            </div>
        )
    }

}

export default ProfileSidebar; 

