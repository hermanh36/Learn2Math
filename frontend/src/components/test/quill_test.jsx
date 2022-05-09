import ReactQuill, { Quill } from 'react-quill';
import React, {useState} from "react";
import 'react-quill/dist/quill.snow.css';


class QuillTest extends React.Component {

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



  render() {
    return (
    <form action="">
      <h1>Test</h1>
      <ReactQuill modules={this.modules} formats={this.formats}>
      </ReactQuill>
    </form>
    )
  }
}

export default QuillTest;