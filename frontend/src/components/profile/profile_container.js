// // src/components/profile/profile_container.js

// import { connect } from 'react-redux';
// import Profile from './profile';
// import { fetchMyLessons } from '../../actions/lesson_actions';

// const mapStateToProps = (state, ownProps) => {
//   return {
//     lessons: state.entities.lessons,
//     lesson: state.entities.lessons[ownProps.match.params.lessonId],
//     user: state.entities.user[ownProps.match.params.userId]
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchMyLessons: authorId => dispatch(fetchMyLessons(authorId)),
//     fetchQuizScore: quizScore => dispatch(fetchQuizScore(quizScore)),
//     fetchLesson: lesson => dispatch(fetchLesson(lesson))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);