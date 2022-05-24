import React from 'react';
import MyLessonsContainer from './my_lessons_container'; 
import MyScoreContainer from './my_score_container';
import ProfileSidebarContainer from './profile_sidebar_container';


export default class Profile extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchUser(this.props.userId).then((res) => {
            console.log(res);
        })
    }

    render(){
        return (
            <>
                <ProfileSidebarContainer match={this.props.match}/>
                <MyLessonsContainer authorId={this.props.userId}/>
                <MyScoreContainer />
            </>
        )
    }
}