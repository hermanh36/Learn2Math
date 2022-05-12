import React from 'react';

class FlashcardForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.flashcard
    this.update = this.update.bind(this);
    this.submidHandler = this.submitHandler.bind(this);
  }


  componentDidMount() {
    if (this.props.formType  === edit) {
      this.props.fetchFlashcard(this.props.flashcardId)
    }
  }

  componentWillReceiveProps() {
    this.setState(nextProps.flashcard)
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  submitHandler() {
    this.props.submitForm(this.state).then(res => {
      this.props.history.push(`/lesson/${res.lesson._id}`)  
    })
  }

  render() {
    const errors = Object.values(this.props.errors);
    return (
      <div>
        <h1>{this.props.formType} Flashcard</h1>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="flashcard-title">Title</label>
          <input onChange={this.update('title')} type="text" name='flashcard-title' />
          <label htmlFor="flashcard-body">Content</label>
          <input onChange={this.update('body')} type="text" name='flashcard-body' />
          <input type="submit" value={`${this.props.forType} your flashcard`} />
        </form>
      {errors.length > 0 ? errors.map(err => <p>{err}</p>): null}
      </div>
    )
  }
}

export default FlashcardForm;