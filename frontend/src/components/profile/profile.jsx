import React from 'react';
import MyLessonsContainer from './my_lessons_container'; 
import MyScoreContainer from './my_score_container';
import ProfileSidebarContainer from './profile_sidebar_container';
import LeftSidebar from '../left_sidebar/left_sidebar_container';


export default class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {profileOwner: null};
    }

    componentDidMount(){
        this.props.fetchUser(this.props.userId).then(user => 
            this.setState({profileOwner: user.user}))
    }

    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            this.setState( {userId: this.props.userId})
        }
    }

    render(){
        return (
            <>
                <div className="profile-meta-wrap">
                    <LeftSidebar />
                    <div className="profile-wrap">
                        <ProfileSidebarContainer match={this.props.match} profileOwner={this.state.profileOwner}/>
                        <div className="pro-main-wrap">
                            <MyLessonsContainer authorId={this.props.userId}/>
                            <MyScoreContainer userId={this.props.userId}/>  
                        </div>
                    </div>
                </div>
            </>
        )
    }
}