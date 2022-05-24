import React from "react";
import LeftSidebarContainer from './../left_sidebar/left_sidebar_container';
import { Link } from "react-router-dom";

export default class FlashcardIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchFlashcards(this.props.match.params.userId, () => {
            this.props.clearUsers();
        })
        .then(() => this.props.fetchUser(this.props.userId))
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ flashcards: nextProps.flashcards })
    }
    toggleCard(idx){
        console.log("toggled");
        let card = document.getElementById(`${idx}`);
        console.log(card);
        card.classList.toggle("show-card-content")
        console.log(card.classList);
    }
    hideAllAnswers(){
        Object.values(this.state.flashcards).map((flashcard, idx) => {
              let card = document.getElementById(`${idx}`);
              card.classList.remove("show-card-content");
        })
    }   
    showAllAnswers(){
        Object.values(this.state.flashcards).map((flashcard, idx) => {
              let card = document.getElementById(`${idx}`);
              card.classList.add("show-card-content");
        })
    }

    deleteFlashcard(flashcardId) {
        this.props.deleteFlashcard(flashcardId)
    }

    editFlashcard(flashcardId) {
        this.props.history.push(`/${flashcardId}/edit`)
    }

    trimEmail(email) {
        let username = '';
        for( let i = 0; i< email.length; i++){
            if (email[i] == '@'){
                return username;
            } else {
                username = username + email[i];
            }
        }
    }

    render() {
        let flashcards;
        if (this.state.flashcards) {
            console.log(Object.values(this.state.flashcards));
            flashcards = Object.values(this.state.flashcards).map((flashcard, idx) => {
                return (
                    <div className="index-one-card-wrap" onClick={() => this.toggleCard(idx)} key={flashcard._id} id={`flashcard-${idx}`}> {/*className= flashcard container */}
                        <div className="index-card-top">
                            <div className="index-card-title-wrap"> {/* word*/}
                                {flashcard.title}
                            </div>
                            <div id={`${idx}`} className="index-card-body-wrap" > {/* definition, give this a class of hidden initially */}
                                {flashcard.body}
                            </div>
                        </div>
                        <div>
                            {this.props.currentUserId === flashcard.authorId
                            ?
                            <div className="index-card-bottom">
                                <div className="index-card-edit-btn-wrap">
                                    <button onClick={() => this.editFlashcard(flashcard._id)}>Edit</button>
                                </div>
                                <div className="index-card-delete-btn-wrap">
                                    <button onClick={() => this.deleteFlashcard(flashcard._id)}>Delete</button>
                                </div>
                            </div>
                            :
                            <></>
                            }
                        </div>
                    </div>
                )
            })
        }
        if(Object.values(this.props.authors).length === 0){
            return null
        } else {

            return (
                <>
                    <div className="flashcard-index-wrap">
                        <LeftSidebarContainer />
                        <div>
                            <h1>{this.trimEmail(Object.values(this.props.authors)[0].email)}'s Flashcards</h1>
                            <div className="hide-all-answers-btn-wrap" >
                                <button onClick={() => this.hideAllAnswers()}>
                                    Hide all answers
                                </button>
                                <button onClick={() => this.showAllAnswers()}>
                                    Show all answers
                                </button>
                            </div>
                            <div className="flashcard-index-list-wrap">
                                {flashcards}
                            </div>
                            <div className="index-create-flashcard-btn-wrap">
                                <button ><Link to='/createflashcard'>Create Flashcard</Link></button> 
                            </div>
                        </div>
                    </div>

                </>
            )
        }
    }
}