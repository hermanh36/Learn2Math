import React from 'react';
import LeftSidebar from '../left_sidebar/left_sidebar_container';
import { Link } from 'react-router-dom';

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

  submitHandler(e) {
    e.preventDefault();
    this.props.submitForm(this.state)
    if (Object.values(this.state).every(field => field.length > 0)){
      this.props.history.push(`/profile/${this.props.currentUserId}/flashcards`)
    } else if (this.props.formType === 'Edit' && (this.state.title.length > 2 && this.state.title.length < 140)
       && (this.state.body.length > 4 && this.state.body.length < 140)) {
      this.props.history.push(`/profile/${this.props.currentUserId}/flashcards`)
    }

    
  }
  
  deleteHandler() {
    this.props.deleteFlashcard(this.props.flashcard._id)
  }

  render() {
    if(!this.props.flashcard){
      return null;
    } 
    if (this.props.formType === 'Edit' && this.props.currentUserId !== this.props.flashcard.authorId) {
      return (
        <div className="not-yours-wrap">
          <div className="not-yours-message">This is not your flashcard!</div>
          <Link className="not-yours-link" to={`/profile/${this.props.currentUserId}`}>Go Back</Link>
        </div>
      )
    }
    const errors = Object.values(this.props.errors);
    if (!this.props.flashcard){
      return null
    } else {
      return (
        <div className="flashcard-form-wrap">
          <div>
            <LeftSidebar />
            <div>
              <h1>{this.props.formType} Flashcard</h1>
              <form onSubmit={this.submitHandler}>
                <div className="create-card-input-wrap">
                  <label htmlFor="flashcard-title">Word</label>
                  <input onChange={this.update('title')} type="text" value={this.state.title}name='flashcard-title' />
                </div>
                <div className="create-card-input-wrap">
                  <label htmlFor="flashcard-body">Definition</label>
                  <input onChange={this.update('body')} type="text" value={this.state.body}name='flashcard-body' />
                </div>
                <div className='card-btn-container'>
                  <div className="create-card-submit-wrap">
                    <input type="submit" value={`${this.props.formType} your flashcard`} />
                  </div>
                  {(this.props.formType === 'Edit') ? 
                  <div className='delete-card-submit-wrap'>
                    <button  onClick={this.deleteHandler}>Delete</button>
                  </div>
                  :
                  <></>
                }
              </div>
              </form>
              {errors.length > 0 ? errors.map((err,idx) => <p key={idx}>{err}</p>): null}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default FlashcardForm;