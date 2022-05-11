import ReactQuill, { Quill } from 'react-quill';
import React, {useState} from "react";
import 'react-quill/dist/quill.snow.css';


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
      ['clean']
    ],

  }
  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  componentDidMount(){
    this.props.formType === 'Edit' ? this.props.fetchLesson(this.props.lessonId)
    .then(() => this.setState(this.props.lesson)) : this.render();
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  updateTitle(field) {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  updateBody(text) {
    this.setState({ content: text})
    document.getElementById('hook').innerHTML = this.state.content;
  }

  render() {
    console.log(this.state);
    return this.props.lesson ? (
      <form onSubmit={this.submitHandler}>
        <h1>{this.props.header}</h1>
        <label htmlFor="title">Title Your Lesson</label>
        <input type="text" name='title' value={this.state.title} onChange={this.updateTitle('title')}/>
        <ReactQuill modules={this.modules} formats={this.formats} value={this.state.content} onChange={this.updateBody}>
        </ReactQuill>
        <div id='hook'></div>
        <input type="submit" value="Make Your Lesson" />
      </form>
    ) : <h1>Loading...</h1>
  }
}

export default LessonForm;