import React from 'react';

class FlashcardForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.flashcard
    this.update = this.update.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }


  componentDidMount() {
    if (this.props.formType  === 'Edit') {
      this.props.fetchFlashcard(this.props.flashcardId)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.flashcard)
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  submitHandler() {
    this.props.submitForm(this.state).then(res => {
      console.log(res)  
    })
  }
  deleteHandler() {
    this.props.deleteFlashcard(this.props.flashcard._id)
  }

  render() {
    const errors = Object.values(this.props.errors);
    if (!this.props.flashcard){
      return null
    } else {
      return (
        <div>
          <h1>{this.props.formType} Flashcard</h1>
          <form onSubmit={this.submitHandler}>
            <label htmlFor="flashcard-title">Title</label>
            <input onChange={this.update('title')} type="text" value={this.state.title}name='flashcard-title' />
            <label htmlFor="flashcard-body">Content</label>
            <input onChange={this.update('body')} type="text" value={this.state.body}name='flashcard-body' />
            <input type="submit" value={`${this.props.formType} your flashcard`} />
          </form>
          {(this.props.formType === 'Edit') ? 
            <button onClick={this.deleteHandler}>Delete</button>
            :
            <></>
          }
        {errors.length > 0 ? errors.map(err => <p>{err}</p>): null}
        </div>
      )
    }
  }
}

export default FlashcardForm;