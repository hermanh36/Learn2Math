import React from "react";

export default class NewQuestionForm extends React.Component {
    constructor(props) {
        super(props);
        //  quiz/:quizId/question --> new
        //  question/:questionId --> edit
        this.state = this.props.question;
        if (this.props.formType === 'Create'){
            this.state.choice1='';
            this.state.choice2='';
            this.state.choice3='';
            this.state.choice4='';
        }
        else {
            this.state.choice1=this.props.question.answerChoices[0];
            this.state.choice2=this.props.question.answerChoices[1];
            this.state.choice3=this.props.question.answerChoices[2];
            this.state.choice4=this.props.question.answerChoices[3];
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearFields = this.clearFields.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {choice1, choice2, choice3, choice4} = this.state;
        console.log(this.state);
        const arr = [choice1, choice2, choice3, choice4];
        console.log(arr);
        this.setState({answerChoices:arr}, () => {
            this.props.submitForm(this.state)
                .then((res) => {
                    if(this.props.formType === 'Create'){
                        this.clearFields();
                    }else{      
                        this.props.toggleEditQuestion(this.props.idx);
                    }
                })
        });
    }

    update(field) {
        // console.log(this.state.answerChoices);
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    updateChoice(num) {
        return e => {
            const temp = `choice${num}`;
            this.setState({[temp]:e.target.value})
        }
    }

    clearFields(){
        this.setState({
            quizId: this.props.match.params.quizId,
            content: '',
            answerChoices: [],
            correctAnswer: '',
            choice1: '',
            choice2: '',
            choice3: '',
            choice4: '',
        })
    }

    render() {
        const stuff = (<div className="new-question-form-wrap">
            <form onSubmit={this.handleSubmit}>
                <label>
                    <span>Question:  </span>
                    <input type="text" placeholder="Question" value={this.state.content} onChange={this.update('content')} />
                </label>
                <label>
                    <span>a. </span>
                    <input type="text" placeholder="Choice 1" value={this.state.choice1} onChange={this.updateChoice(1)} />
                </label>
                <label>
                    <span>b. </span>
                    <input type="text" placeholder="Choice 2" value={this.state.choice2} onChange={this.updateChoice(2)} />
                </label>
                <label>
                    <span>c. </span>
                    <input type="text" placeholder="Choice 3" value={this.state.choice3} onChange={this.updateChoice(3)} />
                </label>
                <label>
                    <span>d. </span>
                    <input type="text" placeholder="Choice 4" value={this.state.choice4} onChange={this.updateChoice(4)} />
                </label>
                <label>
                    <span>e. </span>
                    <input type="text" placeholder="Correct Answer" value={this.state.correctAnswer} onChange={this.update('correctAnswer')} />
                </label>
                <div className="new-question-submit-btn-wrap">

                    <input type="submit" value={`${this.props.formType} Question`} />
                </div>
                {this.props.formType === 'Update' ?
                    <div className="question-delete-btn-wrap">
                        <button onClick={() => this.props.deleteQuestion(this.state._id).then(console.log(this.state))}>Delete</button>

                    </div>
                    :
                    <></>}
            </form>
            <div className="new-question-cancel-btn-wrap">
                <button onClick={() => this.props.toggleEditQuestion(this.props.idx)}>Cancel</button>

            </div>
        </div>)
        return (this.props.formType === 'Edit') ?
        {stuff}:
        <div className="new-question-container-wrap">{stuff}</div>
    }
}