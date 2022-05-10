import ReactQuill, { Quill } from 'react-quill';
import React, {useState} from "react";
import 'react-quill/dist/quill.snow.css';


class LessonForm extends React.Component {

  constructor(props){
    super(props)
    this.state = { content: this.props.content }
    this.update = this.update.bind(this);
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

  submitHandler(e) {
    e.preventDefault();
    // console.log(this.state);

    this.props.createLesson(this.state);
  }

  update(text) {
    this.setState({ content: text })
    document.getElementById('hook').innerHTML = this.state.content;
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h1>{this.props.header}</h1>
        <ReactQuill modules={this.modules} formats={this.formats} value={this.state.content} onChange={this.update}>
        </ReactQuill>
        <div id='hook'></div>
        <input type="submit" value="Make Your Lesson" />
      </form>
    )
  }
}

export default LessonForm;