import React from "react";
import { connect } from "react-redux";
import LessonShow from "./lesson_show";
import { fetchLesson } from "../../actions/lesson_actions";

const mSTP = (state, ownProps) => {
  
  return {
    lesson: state.entities.lessons[ownProps.match.params.lessonId],
    lessonId: ownProps.match.params.lessonId
  }
};

const mDTP = (dispatch) => ({
    fetchLesson: (lessonId) => dispatch(fetchLesson(lessonId))
})

export default connect(mSTP, mDTP)(LessonShow);

