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
    const { clearUsers, fetchUser, fetchCommentsByLesson, fetchLesson, fetchQuizByLessonId, fetchQuestions, lessonId, fetchUsers } = this.props;
    fetchLesson(lessonId, this.props.clearUsers())
      .then(lesson => {
          fetchUser(lesson.lesson.authorId)
            .then(() =>fetchQuizByLessonId(lesson.lesson._id))
            .then(quiz => fetchQuestions(quiz.quiz._id))
            .then(() => fetchCommentsByLesson(lessonId) )
      })
      
      // .then(() => fetchUsers())
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ quizzes: nextProps.quizzes, questions: nextProps.questions, comments: nextProps.comments})
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

  trimEmail(email) {
    let username = '';
    for( let i = 0; i< email.length; i++){
        if (email[i] == '@'){
            return username;
        } else {
            username = username + email[i];
        }
    }
  }


  render() {
    // console.log(this.state.questions.length);
    console.log(this.props.currentUserId);
    console.log(this.state);
    // console.log(this.state.users);
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
<<<<<<< HEAD

    let currentUserEmail;
    if (this.state.users) Object.values(this.state.users).forEach(user => { if (user._id === this.props.lesson.authorId) currentUserEmail = user.email });
    console.log(currentUserEmail);
=======
    // let currentUserEmail;
    // if (this.state.users) Object.values(this.state.users).forEach(user => { if (user._id === this.props.lesson.authorId) currentUserEmail = user.email });
    // console.log(currentUserEmail);
>>>>>>> af29c03d78535ae9ab9f7fc146dea91fd86c6750
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
<<<<<<< HEAD


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



=======
      if (this.props.users && Object.values(this.props.users).length > 0){
        console.log(this.props.users)
        debugger;
        return (
          <div className="lesson-show-wrap">
            <LeftSidebar />

            {this.props.lesson ?

              (
                <div className="lesson-show-container ql-editor">

                  <div className="lesson-show-title">{this.props.lesson.title} by {this.trimEmail(Object.values(this.props.users)[0].email)}</div>

                  <div id="lesson-html-content">{parse(this.props.lesson.content)}</div>

                  {currentUserId === authorId ? (
                    <>
                      <Link to={`/lesson/${this.props.match.params.lessonId}/edit`}><button>Edit Lesson</button></Link>
                      <button onClick={this.deleteHandler}>Delete Lesson</button>
                      <div className="lesson-quiz-redirect-wrap">
                        <Link className="lesson-quiz-redirect-button" to={`/quiz/${quizId}/edit`}>Edit Quiz</Link>
                      </div>
                    </>)
                    :
                    // {takeQuiz}
                    <Link className="lesson-quiz-redirect-button" to={{pathname:`/quiz/${quizId}`, state: this.props.lessonId }}>Take Quiz</Link>
                  }
                  {commentsForThisLesson}
                  <CreateCommentContainer match={this.props.match} createComment={this.props.createComment} />
                </div>
              )
              : null
            }
          </div>
        )}
        else {
          return null;
        }
>>>>>>> af29c03d78535ae9ab9f7fc146dea91fd86c6750
    }
  }
}

export default LessonShow; 