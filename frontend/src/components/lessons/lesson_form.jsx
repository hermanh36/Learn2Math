import ReactQuill, { Quill } from 'react-quill';
import React, {useState} from "react";
import 'react-quill/dist/quill.snow.css';


class LessonForm extends React.Component {

  constructor(props){
    super(props)
    this.state = { content: this.props.content }
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
    this.props.createLesson(this.state);
  }

  update(e) {
    this.setState({ content: e.target.value })
  }

  render() {
    return (
    <form onSubmit={this.submitHanlder}>
      <h1>{this.props.header}</h1>
      <ReactQuill modules={this.modules} formats={this.formats} onChange={this.update}>
      </ReactQuill>
      <input type="submit" value="Make Your Lesson" />
    </form>
    )
  }
}

export default LessonForm;