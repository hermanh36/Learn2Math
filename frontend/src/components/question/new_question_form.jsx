import React from "react";

export default class NewQuestionForm extends React.Component {
    constructor(props) {
        super(props);
        //  quiz/:quizId/question --> new
        //  question/:questionId --> edit
        this.state = {
            quizId: this.props.match.params.quizId,
            content: '',
            answerChoices: [],
            correctAnswer: '',
            choice1:'',
            choice2:'',
            choice3:'',
            choice4:'',
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
        this.setState({answerChoices:arr}, () => this.props.createQuestion(this.state).then(() => this.clearFields()));
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
        const { content, answerChoices, correctAnswer } = this.state;
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" placeholder="Question" value={content} onChange={this.update('content')} />
                    </label>
                    <label>
                        <input type="text" placeholder="Choice 1" value={this.state.choice1} onChange={this.updateChoice(1)} />
                    </label>
                    <label>
                        <input type="text" placeholder="Choice 2" value={this.state.choice2} onChange={this.updateChoice(2)} />
                    </label>
                    <label>
                        <input type="text" placeholder="Choice 3" value={this.state.choice3} onChange={this.updateChoice(3)} />
                    </label>
                    <label>
                        <input type="text" placeholder="Choice 4" value={this.state.choice4} onChange={this.updateChoice(4)} />
                    </label>
                    <label>
                        <input type="text" placeholder="Correct Answer" value={correctAnswer} onChange={this.update('correctAnswer')} />
                    </label>
                    <input type="submit" value="Create Question" />
                </form>
            </>
        )
    }
}