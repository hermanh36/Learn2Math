import React from 'react';
import EditQuestionContainer from './edit_question_container';
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

    componentWillUnmount() {
        this.props.clearQuestion();
    }
    
    toggleEditQuestion(idx) { 
        
        let editContainer = document.getElementById(`edit-question-${idx}`);
        editContainer.classList.toggle('hidden-class'); 
        
        let question = document.getElementById(`question-${idx}-container`);
        question.classList.toggle('hidden-class'); 
        
        let questionBtn = document.getElementById(`edit-question-btn-wrap`);
        questionBtn.classList.toggle('hidden-class'); 
    }

    render(){
        
        const allQuestions = Object.values(this.props.questions);
        const questions = allQuestions.map((question,idx) => {
            // console.log(question._id);
            return (
                <div key={idx} className="question-index-wrap">
                    <div id={`question-${idx}-container`} className="question-index-question-wrap">
                        <p>{idx+1}) {question.content}</p>
                        <ul>
                            <li>{question.answerChoices[0]}</li>
                            <li>{question.answerChoices[1]}</li>
                            <li>{question.answerChoices[2]}</li>
                            <li>{question.answerChoices[3]}</li>
                        </ul>
                    </div>
                    <div className='hidden-class edit-question-form-wrap' id={`edit-question-${idx}`}>
                        <EditQuestionContainer question={question} idx={idx} toggleEditQuestion={this.toggleEditQuestion}/>
                    </div>
                    <div id="edit-question-btn-wrap" className="edit-question-btn-wrap">
                        <button onClick={() => this.toggleEditQuestion(idx)}>Edit Question</button>
                        <button onClick={() => this.props.deleteQuestion(question._id)}>Delete Question</button>
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