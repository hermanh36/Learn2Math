import React from 'react';

export default class QuestionIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchQuestions(this.props.quizId);
    }

    componentWillReceiveProps(nextProps){
        this.setState(nextProps.questions)
    }

    render(){
        const allQuestions = Object.values(this.props.questions);
        const questions = allQuestions.map((question,idx) => {
            return (
                <div key={idx}>
                    <div id={`question-${idx}-container`}>
                        <p>{idx+1}) {question.content}</p>
                        <ul>
                            <li>a) {question.answerChoices[0]}</li>
                            <li>b) {question.answerChoices[1]}</li>
                            <li>c) {question.answerChoices[2]}</li>
                            <li>d) {question.answerChoices[3]}</li>
                        </ul>
                    </div>
                    <div className='hidden-class' id={`edit-question-${idx}`}>
                        
                    </div>
                </div>
            )
        })
            
        if (!questions){
            return null
        }
        else {
            return (
                <div>
                    {questions}
                </div>
            )
        }
    }

}