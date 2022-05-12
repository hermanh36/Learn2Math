import React from 'react';

export default class Profile extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
            <MyLessonsContainer authorId={this.props.user._id}/>
            </>
        )
    }
}