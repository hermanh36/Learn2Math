import React from "react";

export default class FlashcardIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.flashcards;
    }

    componentDidMount() {
        this.props.fetchFlashcards(this.props.match.params.userId).then(res => console.log(res));
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ flashcards: nextProps.flashcards })
    }

    render() {
        debugger;
        let flashcards;
        if (this.state.flashcards) {
            console.log(Object.values(this.state.flashcards));
            flashcards = Object.values(this.state.flashcards).map((flashcard, idx) => {
                return (
                    <div key={flashcard._id} id={`flashcard-${idx}`}> {/*className= flashcard container */}
                        <div> {/* word*/}
                            {flashcard.title}
                        </div>
                        <div> {/* definition, give this a class of hidden initially */}
                            {flashcard.body}
                        </div>
                        <br /> {/* can remove line break when starting to style */}
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                )
            })
        }
        return (
            <>
                {flashcards}
                {/* this create flashcard button will redirect to createflashcard form */}
                <button>Create Flashcard</button> 

            </>
        )
    }
}