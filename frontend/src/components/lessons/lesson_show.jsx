import React from "react";
import LeftSidebar from "../left_sidebar/left_sidebar";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";

class LessonShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      questions: this.props.questions,
      quizzes: this.props.quizzes
    }
  }

  componentDidMount() { 
    const {fetchLesson, fetchQuiz, fetchQuestions, lessonId} = this.props;
    fetchLesson(lessonId)
      .then(lesson => fetchQuiz(lesson.lesson._id))
      .then(quiz => fetchQuestions(quiz.quiz._id))
  }

  componentWillReceiveProps(nextProps){
    // debugger;
    this.setState({quizzes: nextProps.quizzes, questions: nextProps.questions})
    // console.log(nextProps.questions)
    // console.log(nextProps.quizzes)
  }

  renderLessonContent(){

  }

  render(){
    if (!this.props.lesson) {
      return null
    } 
    else {
      let quizId, questionsLength;
      if (this.state.quizzes) quizId = Object.keys(this.state.quizzes)[0];
      if (this.state.questions) questionsLength = Object.keys(this.state.questions).length;
      const {currentUserId} = this.props;
      const authorId = this.props.lesson.authorId;
    
    return (
      <div className="lesson-show-wrap">
        <LeftSidebar />
          
        {this.props.lesson ? 
        
          (
            <div className="lesson-show-container ql-editor">
              <div>
                <div className="lesson-show-category"> {this.props.lesson.category}</div>
              </div>

              <div className="lesson-show-title">{this.props.lesson.title} </div>
          
              <div id="lesson-html-content">{parse(this.props.lesson.content)}</div>

              {currentUserId === authorId ? <Link to={`/quiz/${quizId}/edit`}>Edit Quiz</Link> : <Link to={`/quiz/${quizId}`}>Take Quiz</Link>}
            </div> 
          )
          : null
        }
      </div>
  
    )



    }
  }
}

export default LessonShow; 