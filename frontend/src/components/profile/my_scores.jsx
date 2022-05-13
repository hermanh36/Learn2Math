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

  selectScore(lessonId)  {
    let answer = 0;
      Object.values(this.props.scores).forEach( score => {
        if (score.lessonId === lessonId){
          answer = score.score
        }
      })
    return answer
  }


  render() {
    if(!this.props.scores) {
      return null;
    } else {
      console.log(this.selectScore('627bc1e117d9a3a0e531ea60'))
      return (
        <div>
          <h1>My Quiz Scores</h1>
          {this.lessonArr.map(lesson => 
            (
              <div>
                <button><Link to={`/lesson/${lesson._id}`}>{lesson.title}</Link></button>
                <div>Score is {this.selectScore(lesson._id)}</div>
              </div>
            )
            )}
        </div>
      )
    }
  }
}


export default MyScores;