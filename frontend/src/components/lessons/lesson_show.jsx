import React from "react";
import LeftSidebar from "../left_sidebar/left_sidebar_container";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";
import UpdateCommentContainer from "../comment/update_comment_container";
import CreateCommentContainer from "../comment/create_comment_container";

class LessonShow extends React.Component {
  constructor(props) {
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentDidMount() {
    const { clearUsers, fetchUser, fetchCommentsByLesson, fetchLesson, fetchQuizByLessonId, fetchQuestions, lessonId, fetchUsers } = this.props;
    fetchLesson(lessonId)
      .then(lesson => {
          fetchUsers()
            .then(() => fetchCommentsByLesson(lessonId))
            .then(() => fetchQuizByLessonId(lesson.lesson._id))
      })
  }


  deleteComment(commentId){
    return e => {
      e.preventDefault();
      this.props.deleteComment(commentId);
    }
  }

  deleteHandler() {
    const {deleteLesson, lessonId, history} = this.props;
    deleteLesson(lessonId).then(history.push('/categories'))
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
    if (!lesson) {
      return null
    }
    else {
      let quizId;
      if (quizzes) quizId = Object.keys(quizzes)[0];
      const authorId = lesson.authorId;

      if (Object.values(users).length > 1 && users[lesson.authorId]){
        return (
          <div className="lesson-show-wrap">
            <LeftSidebar />

            {lesson ?
              (
                <div className="lesson-show-container">
                  <p className="lesson-show-title">{lesson.title} by {this.trimEmail(users[lesson.authorId].email)}</p>

                  <div id="lesson-html-content">{parse(lesson.content)}</div>

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

                    <Link className="lesson-quiz-redirect-button" to={{pathname:`/quiz/${quizId}`, state: this.props.lessonId }}>Take Quiz</Link>
                  }
                  <div className="comment-section-wrap">
            <h1>Comments:</h1>
              {Object.values(comments).map(comment =>(
              <div >
                <p className="comment-author">{this.trimEmail(users[comment.userId].email)}</p>
                <div className="comment-wrap">
                  {comment.message}
                </div>

                {(currentUserId === comment.userId) ? (
                <div className="toggle-comment-btn-wrap">
                  <button onClick={() => this.toggleCommentForm(comment._id)} className="toggle-comment-btn">Edit Comment</button>
                  <div className="delete-comment-btn-wrap">
                    <button className="delete-comment-btn" onClick={this.deleteComment(comment._id)}>Delete Comment</button>
                  </div>
                </div>) : null}
                
                <div className="comment-form-wrap" id={"comment-form-" + comment._id}>
                  <UpdateCommentContainer comment={comment} updateComment={this.props.updateComment}/>
                </div>
              </div>))}
          </div>
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