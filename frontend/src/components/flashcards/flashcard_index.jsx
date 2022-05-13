import React from "react";

export default class FlashcardIndex extends React.Component{
    constructor(props){
        super(props);
        this.state=this.props.flashcards;
    }

    componentDidMount(){
        this.props.fetchFlashcards(this.props.match.params.userId).then(res => console.log(res));
    }

    componentWillReceiveProps(nextProps){
        this.setState({flashcards: nextProps.flashcards})
    }

    render(){
        debugger;
        if (this.state.flashcards) {
            console.log(Object.values(this.state.flashcards));
        }
        return (
            <>
                inside flashcard index
            </>
        )
    }
}