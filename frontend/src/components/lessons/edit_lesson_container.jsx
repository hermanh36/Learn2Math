

const mapStateToProps = (state, ownProps) => {
  return {
    content: this.state.lessons[ownProps.match.params.lessonId].content,
    header: 'Create Your Lesson!'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createLesson: lesson => dispatch(createLesson(lesson))
  }
}

