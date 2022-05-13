import React from 'react'
import { Link } from 'react-router-dom';



class MyScores extends React.Component {
  constructor(props){
    super(props);
    this.lessonArr = [];
    this.state = {lessons: []}
  }

  componentDidMount() {
    this.props.fetchScores(this.props.currentUserId)
    .then(scores => scores.scores.forEach(score => 
      this.props.fetchLesson(score.lessonId).then(lesson => this.lessonArr.push(lesson.lesson)).then(() => this.setState( {lessons:this.lessonArr}))))
  }

  selectTitle(lessonId)  {
    let title = null;
      this.lessonArr.forEach( lesson => {
        if (lesson._id === lessonId){
          title = lesson.title
        }
      })
    return title
  }


  render() {
    if(!(this.props.scores.length > 0)) {
      return null;
    } else {
      debugger;
      return (
        <div>
          <h1>My Quiz Scores</h1>
          {this.props.scores.map(score => 
            (
              <div>
                <button><Link to={`/lesson/${score.lessonId}`}>{this.selectTitle(score.lessonId)}</Link></button>
                <div>Score is {score.score}</div>
              </div>
            )
            )}
        </div>
      )
    }
  }
}


export default MyScores;