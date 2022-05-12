import React from 'react'
import { Link } from 'react-router-dom';


class MyScores extends React.Component {
  constructor(props){
    super(props);
    this.lessonArr = [];
    this.state = {lessons: []}
  }

  componentDidMount() {
    this.props.fetchScores(this.props.currentUserId)//.then(scores => console.log(scores.scores))
    .then(scores => scores.scores.forEach(score => 
      {
      console.log(score.quizId)
      this.props.fetchQuiz(score.quizId).then(quiz => console.log(quiz._id))
      }))
    //   .then(quiz => this.props.fetchLesson(quiz.lessonId))
    //     .then(lesson => this.lessonArr.push(lesson))
    // })).then(this.setState({ lessons: this.lessonArr}))
  }

  render() {
    if(!this.props.scores) {
      return null;
    } else {
      return (
        <div>
          <h1>My Quiz Scores</h1>
          {this.state.lessons.map( (lesson,idx) => {
            return (
            <div>
              <button><Link>{lesson.title}</Link></button>
              <div>{this.props.scores[idx].score}</div>
            </div>
            )
          })}
        </div>
      )
    }
  }
}


export default MyScores;