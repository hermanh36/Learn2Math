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
    // console.log(this.state.questions.length);
    console.log(this.props.currentUserId);
    console.log(this.state);
    debugger
    const author = this.state.users[this.props.lesson?.authorId]?.email;
    // console.log(this.state.users);
    const commentsForThisLesson = Object.values(this.state.comments).length > 0 ? (
      <div>
        {Object.values(this.state.comments).map(comment =>(
        <div>
          {comment.message}
          {/* SOME NOTES: */}
          {/* the toggle comment form button should toggle visibility for the UpdateCommentContainer for that comment */}
          {/* deletecomment button deletes comment */}
          <button>*Toggle Comment Form*</button>
          <UpdateCommentContainer comment={comment} updateComment={this.props.updateComment}/>
          <button onClick={this.deleteComment(comment._id)}>Delete Comment</button>
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
              <div className="lesson-show-container ql-editor">

                <div className="lesson-show-title">{this.props.lesson.title} by {author}</div>

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

      )



    }
  }
}

export default LessonShow; 