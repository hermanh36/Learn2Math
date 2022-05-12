import React from 'react'


class MyScores extends React.Component {
  constructor(props){
    super(props);
    this.lessonArr = [];
    this.state = {lessons: []}
  }

  componentDidMount() {
    this.props.fetchScores(this.props.currentUserId)
    .then(scores => scores.forEach(score =>{
      this.props.fetchQuiz(score.quizId)
      .then(quiz => this.props.fetchLesson(quiz.lessonId))
        .then(lesson => this.lessonArr.push(lesson))
    })).then(this.setState({ lessons: this.lessonArr}))
  }

  render() {
    if(!scores) {
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