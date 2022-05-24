import React from "react";
import LeftSidebar from "../left_sidebar/left_sidebar_container";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";
import CommentForm from "../comment/comment_form";
import UpdateCommentContainer from "../comment/update_comment_container";
import CreateCommentContainer from "../comment/create_comment_container";

class LessonShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questions,
      quizzes: this.props.quizzes,
      users: this.props.users,
      comments: this.props.comments
    }
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentDidMount() {
    const { fetchCommentsByLesson, fetchLesson, fetchQuizByLessonId, fetchQuestions, lessonId, fetchUsers } = this.props;
    fetchLesson(lessonId)
      .then(lesson => fetchQuizByLessonId(lesson.lesson._id))
      .then(quiz => fetchQuestions(quiz.quiz._id))
      .then(() => fetchUsers())
      fetchCommentsByLesson(lessonId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ quizzes: nextProps.quizzes, questions: nextProps.questions, users: nextProps.users, comments: nextProps.comments})
    // console.log(nextProps.questions)
    // console.log(nextProps.quizzes)
  }

  deleteComment(commentId){
    return e => {
      e.preventDefault();
      this.props.deleteComment(commentId);
    }
  }

  renderLessonContent() {

  }
  //{this.props.users[this.props.lesson.authorId].email}


  deleteHandler() {
    this.props.deleteLesson(this.props.lessonId).then(this.props.history.push('/categories'))
  }

  render() {
  
  
    const author = this.state.users[this.props.lesson?.authorId]?.email;
    const commentsForThisLesson = Object.values(this.state.comments).length > 0 ? (
      <div className="comment-section-wrap">
        <h1>Comments:</h1>
        {Object.values(this.state.comments).map(comment =>(
        <div >
          <div className="comment-wrap">
            {comment.message}
          </div>
          <p className="comment-author">by Author Name</p>
          {/* SOME NOTES: */}
          {/* the toggle comment form button should toggle visibility for the UpdateCommentContainer for that comment */}
          {/* deletecomment button deletes comment */}
          <div className="toggle-comment-btn-wrap">
            <button className="toggle-comment-btn">Toggle Comment Form</button>
          </div>
          <UpdateCommentContainer comment={comment} updateComment={this.props.updateComment}/>
          <div className="delete-comment-btn-wrap">
            <button className="delete-comment-btn" onClick={this.deleteComment(comment._id)}>Delete Comment</button>
          </div>
        </div>))}
      </div>
    ) : null;

    let currentUserEmail;
    if (this.state.users) Object.values(this.state.users).forEach(user => { if (user._id === this.props.lesson.authorId) currentUserEmail = user.email });
    console.log(currentUserEmail);
    if (!this.props.lesson) {
      return null
    }
    else {
      //FIX QUIZ ID
      let quizId, questionsLength;
      if (this.state.quizzes) quizId = Object.keys(this.state.quizzes)[0];
      if (this.state.questions) questionsLength = Object.keys(this.state.questions).length;
      const { currentUserId } = this.props;
      const authorId = this.props.lesson.authorId;
      const takeQuiz = this.state.questions.length > 0 ? <Link className="lesson-quiz-redirect-button" to={`/quiz/${quizId}`}>Take Quiz</Link> : <></>;


      return (
        <div className="lesson-show-wrap">
          <LeftSidebar />

          {this.props.lesson ?

            (
              <div className="lesson-show-container">

                <p className="lesson-show-title">{this.props.lesson.title} by {author}</p>

                <div id="lesson-html-content">{parse(this.props.lesson.content)}</div>

                {currentUserId === authorId ? (
                  <>
                    
                    <div className="lesson-quiz-redirect-wrap">
                      <Link className="lesson-quiz-redirect-button" to={`/lesson/${this.props.match.params.lessonId}/edit`}>Edit Lesson</Link>
                      <Link className="lesson-quiz-redirect-button" to={`/quiz/${quizId}/edit`}>Edit Quiz</Link>
                      <div className="delete-lesson-btn-wrap">
                        <button className="delete-lesson-btn" onClick={this.deleteHandler}>Delete Lesson</button>
                      </div>
                    </div>
                  </>)
                  :
                  // {takeQuiz}
                  <Link className="lesson-quiz-redirect-button" to={{pathname:`/quiz/${quizId}`, state: this.props.lessonId }}>Take Quiz</Link>
                }
                {commentsForThisLesson}
                <h1 className="make-a-comment">Make a comment: </h1>
                <CreateCommentContainer match={this.props.match} createComment={this.props.createComment} />
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