// src/components/profile/profile_container.js

import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  return {
    lessons: state.entities.lessons,
    lesson: state.entities.lessons[ownProps.match.params.lessonId],
    user: state.entities.user[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLessons: lessons => dispatch(fetchLessons(lessons)),
    fetchQuizScore: quizScore => dispatch(fetchQuizScore(quizScore)),
    fetchLesson: lesson => dispatch(fetchLesson(lesson))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);