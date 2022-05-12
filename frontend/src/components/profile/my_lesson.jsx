import React from "react";

export default class MyLessons extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.lessons;
    }

    componentDidMount(){
        this.props.fetchMyLessons(this.props.match.params.userId);
    }

    componentWillReceiveProps(nextProps){
        
    }
}