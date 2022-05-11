import React from "react";
import LeftSidebar from "../left_sidebar/left_sidebar";

class LessonShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() { 
    this.props.fetchLesson(this.props.lessonId).then((res) => {
      console.log(res);
    }); 
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
              <div>{this.props.lesson.content}</div> 
            </div> 
          )
          : null
        }
      </div>
    )

  }
}

export default LessonShow; 