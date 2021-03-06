import * as lessonUtil from '../util/lesson_util'

export const RECEIVE_LESSONS = 'RECEIVE_LESSONS';
export const RECEIVE_LESSON = 'RECEIVE_LESSON';
export const REMOVE_LESSON = 'REMOVE_LESSON';
export const RECEIVE_LESSON_ERRORS = 'RECEIVE_LESSON_ERRORS'
export const RESET_LESSON = 'RESET_LESSON'


export const receiveLessons = lessons => {
  return {
    type: RECEIVE_LESSONS,
    lessons : lessons.data
  }
};

export const receiveLesson = lesson => {
  return {
    type: RECEIVE_LESSON,
    lesson : lesson.data
  }
}

export const receiveLessonError = errors => {
  return {
    type: RECEIVE_LESSON_ERRORS,
    errors: errors.response.data
  }
};

export const removeLesson = lessonId => {
  return {
    type: REMOVE_LESSON,
    lessonId
  }
};

export const resetLessons = () => {
  return {
    type: RESET_LESSON
  }
}

export const fetchLessons = () => dispatch => {
  return (
    lessonUtil.fetchLessons()
    .then(lessons => dispatch(receiveLessons(lessons)))
    .catch(err => dispatch(receiveLessonError(err)))
  )
};

export const clearLessons = () => dispatch => {
  return (
    dispatch(resetLessons())
  )
}

export const fetchMyLessons = authorId => dispatch => {
  return (
    lessonUtil.fetchMyLessons(authorId)
      .then(lessons => dispatch(receiveLessons(lessons)))
      .catch(err => dispatch(receiveLessonError(err)))
  )
}

export const fetchLesson = lessonId => dispatch => {
  return (
    lessonUtil.fetchLesson(lessonId)
    .then(lesson => dispatch(receiveLesson(lesson)))
    .catch(err => dispatch(receiveLessonError(err)))
  )
};

export const createLesson = lesson => dispatch => {
  return (
    lessonUtil.createLesson(lesson)
    .then(lesson => dispatch(receiveLesson(lesson)))
    .catch(err => dispatch(receiveLessonError(err)))
  )
};

export const updateLesson = lesson => dispatch => {
  return (
    lessonUtil.updateLesson(lesson)
    .then(lesson => dispatch(receiveLesson(lesson)))
    .catch(err => dispatch(receiveLessonError(err)))
  )
};

export const deleteLesson = lessonId => dispatch => {
  return (
    lessonUtil.deleteLesson(lessonId)
    .then(() => dispatch(removeLesson(lessonId)))
    .catch(err => receiveLessonError(err))
  )
};
