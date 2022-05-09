

const mapStateToProps = state => {
  return {
    content: "",
    header: 'Create Your Lesson!'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createLesson: lesson => dispatch(createLesson(lesson))
  }
}

