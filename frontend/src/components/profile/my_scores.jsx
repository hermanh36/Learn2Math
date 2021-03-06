import React from 'react'
import { Link } from 'react-router-dom';

class MyScores extends React.Component {
  constructor(props){
    super(props);
    this.lessonArr = [];
    this.state = {lessons: []}
  }

  componentDidMount() {
    this.props.fetchScores(this.props.userId)
    .then(scores => scores.scores.forEach(score => 
      this.props.fetchLesson(score.lessonId).then(lesson => this.lessonArr.push(lesson.lesson)).then(() => this.setState( {lessons:this.lessonArr}))))
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId){
      this.props.fetchScores(this.props.userId)
      .then(scores => scores.scores.forEach(score => 
        this.props.fetchLesson(score.lessonId).then(lesson => this.lessonArr.push(lesson.lesson)).then(() => this.setState( {lessons:this.lessonArr}))))
    }
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
      
      return (
        <>   
            <div className="pro-lessons-wrap">
              <div>
                  <h1>My Quiz Scores</h1>
                  <ul className="pro-lessons-list">
                      {this.props.scores.map(score => 
                        (
                          <li key={score._id} className="quiz-score-btn-wrap">
                            
                              <Link to={`/lesson/${score.lessonId}`}>{this.selectTitle(score.lessonId)}
                                <span>Score - {score.score}</span>
                              </Link>                              
                            
                          </li>
                        )
                      )}
                  </ul>
              </div>
            </div>
        </>
      )
    }
  }
}


export default MyScores;