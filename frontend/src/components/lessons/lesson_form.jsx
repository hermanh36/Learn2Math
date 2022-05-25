import ReactQuill, { Quill } from 'react-quill';
import React, {useState} from "react";
import LeftSidebar from '../left_sidebar/left_sidebar_container';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';

class LessonForm extends React.Component {

  constructor(props){
    super(props)
    this.state = this.props.lesson;
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  

  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean'],['table']
    ],
  }

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]


  componentDidMount(){
    if (this.props.formType === 'Edit') {
      this.props.fetchLesson(this.props.lessonId)

    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.lesson)
  }



  submitHandler(e) {
    e.preventDefault();
    let selected = document.getElementById('category-selector')
    
    if (this.props.formType === 'Create') {
      this.setState({ category: selected.value},() => {
        this.props.submitForm(this.state).then((res) => {
          this.props.createQuiz({lessonId: res.lesson._id}).then(quiz => {
            this.props.history.push(`/lesson/${quiz.quiz.lessonId}`)
          })
          //this.props.history.push(`/lesson/${res.lesson._id}`)
        })
        .catch(err => null)
      })
    } else {
      this.setState({ category: selected.value},() => {
        this.props.submitForm(this.state).then( () => this.props.history.push(`/lesson/${this.props.lessonId}`))
        .catch(err => null)
      })
    }
  }

  updateTitle(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  updateBody(text) {
    this.setState({ content: text});
    // document.getElementById('hook').innerHTML = this.state.content;
  }

  

  render() {
    const errors = Object.values(this.props.errors);
    if (!this.props.lesson) {
      return null
    } else {
      
      if (this.props.formType === 'Update'){
        if(this.props.currentUserId !== this.props.lesson.authorId) {
          return (
            <div>
              <div>This is not your lesson!</div>
              <Link to={`/profile/${this.props.currentUserId}`}><button>Go Back</button></Link>
            </div>
          )
        }
      }
      return (
        <div className="lesson-form-wrap">
          <LeftSidebar />
          <div>
            <div>
            <form className="lesson-form" onSubmit={this.submitHandler}>
              <div className="lesson-form-header">
                <h1>{this.props.formType} a Lesson!</h1>
              </div>
              <div className="lesson-title-wrap">
                <label htmlFor="title">Title Your Lesson: </label>
                <input placeholder="title here" type="text" name='title' value={this.state.title} onChange={this.updateTitle('title')}/>
              </div>
              <div className="category-select-wrap">
                <label>Pick a category: </label>
                <select name="category" id='category-selector'>
                  <option value="algebra">Algebra</option>
                  <option value="geometry">Geometry</option>
                </select>
              </div>
              <div className="quill-editor-wrap">
                <ReactQuill className="quill-editor" modules={this.modules} formats={this.formats} value={this.state.content} onChange={this.updateBody}>
                </ReactQuill>
                {/* <MyEditor></MyEditor> */}
              </div>
              
              <input className="lesson-form-submit" type="submit" value={`${this.props.formType} Your Lesson`} />
              {errors.length > 0 ? errors.map(err => <p>{err}</p>) : null}
            </form>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default LessonForm;