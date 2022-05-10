import React from "react";

export default class NewQuestionForm extends React.Component {
    constructor(props) {
        super(props);
        //  quiz/:quizId/question --> new
        //  question/:questionId --> edit
        this.state = {
            quizId: this.props.match.params.quizId,
            content: '',
            answerChoices: '',
            correctAnswer: ''
        }
        this.choices = [];
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        console.log(this.choices);
        this.setState({ answerChoices: this.choices });
        console.log(this.state);
        // this.props.createQuestion(this.state);
        // this.setState({})
    }

    update(field) {
        // console.log(this.state.answerChoices);
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    updateChoice(num) {
        return e => {
            this.choices[num] = e.target.value;
        }
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
                        <input type="text" placeholder="Choice 1" value={answerChoices[0]} onChange={this.updateChoice(0)} />
                    </label>
                    <label>
                        <input type="text" placeholder="Choice 2" value={answerChoices[1]} onChange={this.updateChoice(1)} />
                    </label>
                    <label>
                        <input type="text" placeholder="Choice 3" value={answerChoices[2]} onChange={this.updateChoice(2)} />
                    </label>
                    <label>
                        <input type="text" placeholder="Choice 4" value={answerChoices[3]} onChange={this.updateChoice(3)} />
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