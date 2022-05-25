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
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentDidMount() {
    const { clearUsers, fetchUser, fetchCommentsByLesson, fetchLesson, fetchQuizByLessonId, fetchQuestions, lessonId, fetchUsers } = this.props;
    fetchLesson(lessonId, this.props.clearUsers())
      .then(lesson => {
          fetchUsers()
            .then(() =>fetchQuizByLessonId(lesson.lesson._id))
            .then(quiz => fetchQuestions(quiz.quiz._id))
            .then(() => fetchCommentsByLesson(lessonId) )
      })
      
      // .then(() => fetchUsers())
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

  toggleCommentForm(id) { 
      console.log(id); 
      let commentWrapId = "comment-form-" + id;
      let commentWrap = document.getElementById(commentWrapId); 
      commentWrap.classList.toggle('show'); 
  }


  render() {
    const {users, comments, lesson, lessonId, quizzes, questions, currentUserId} = this.props;
    const { clearUsers, fetchUser, fetchCommentsByLesson, fetchLesson, fetchQuizByLessonId, fetchQuestions, fetchUsers } = this.props;
    console.log(users[comments.userId])
    const commentsForThisLesson = (Object.values(comments).length > 0) && (Object.values(users).length > 1) ? (
      <div className="comment-section-wrap">
        <h1>Comments:</h1>
        {Object.values(comments).map(comment =>(
        <div >
          <p className="comment-author">{this.trimEmail(users[comment.userId].email)}</p>
          <div className="comment-wrap">
            {comment.message}
          </div>
          {/* SOME NOTES: */}
          {/* the toggle comment form button should toggle visibility for the UpdateCommentContainer for that comment */}
          {/* deletecomment button deletes comment */}
          {(this.props.currentUserId === comment.userId) ? (
          <div className="toggle-comment-btn-wrap">
            <button onClick={() => this.toggleCommentForm(comment._id)} className="toggle-comment-btn">Toggle Comment Form</button>
          </div>) : null}
          <div className="comment-form-wrap" id={"comment-form-" + comment._id}>
            <UpdateCommentContainer comment={comment} updateComment={this.props.updateComment}/>
            <div className="delete-comment-btn-wrap">
              <button className="delete-comment-btn" onClick={this.deleteComment(comment._id)}>Delete Comment</button>
            </div>
          </div>
        </div>))}
      </div>
    ) : null;
    console.log(this.props.users);
    if (!this.props.lesson) {
      return null
    }
    else {
      //FIX QUIZ ID
      let quizId, questionsLength;
      if (quizzes) quizId = Object.keys(quizzes)[0];
      const { currentUserId } = this.props;
      const authorId = this.props.lesson.authorId;
      if (this.props.users && Object.values(this.props.users).length > 0 && this.props.users[this.props.lesson.authorId]){
        return (
          <div className="lesson-show-wrap">
            <LeftSidebar />

            {this.props.lesson ?

              (
                <div className="lesson-show-container">

                  <p className="lesson-show-title">{this.props.lesson.title} by {this.trimEmail(this.props.users[this.props.lesson.authorId].email)}</p>

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
      } else {
        return null;
      }
    }
  }
}

export default LessonShow; 