import React from "react";
import LeftSidebar from "../left_sidebar/left_sidebar";
import parse from 'html-react-parser';

class LessonShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() { 
    const {fetchLesson, fetchQuiz, fetchQuestions, lessonId} = this.props;
    debugger;
    fetchLesson(lessonId)
      .then(lesson => fetchQuiz(lesson.lesson._id))
      .then(quiz => fetchQuestions(quiz.quiz._id))
  }

  renderLessonContent(){

  }

  render(){


    
    return (
      <div className="lesson-show-wrap">
        <LeftSidebar />
        {this.props.lesson ? 
        
          (
            <div>
              <div>{this.props.lesson.title} </div>
              <div> {this.props.lesson.category}</div>
              
              <div id="lesson-html-content">{parse(this.props.lesson.content)}</div>
            </div> 
          )
          : null
        }
      </div>
    )

  }
}

export default LessonShow; 