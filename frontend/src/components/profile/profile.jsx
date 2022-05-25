import React from 'react';
import MyLessonsContainer from './my_lessons_container'; 
import MyScoreContainer from './my_score_container';
import ProfileSidebarContainer from './profile_sidebar_container';
import LeftSidebar from '../left_sidebar/left_sidebar';


export default class Profile extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.userId).then((res) => {
            console.log(res);
        })
    }

    componentDidUpdate() {
        debugger;
    }

    render(){
        debugger;
        return (
            <>
                <div className="profile-meta-wrap">
                    <LeftSidebar />
                    <div className="profile-wrap">
                        <ProfileSidebarContainer match={this.props.match}/>
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