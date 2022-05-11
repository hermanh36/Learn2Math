import React from 'react';

class FlashcardFrom extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.flashcard
  }

  render() {
    return (
      <div>
        <h1>{this.props.formType} Your Flashcard</h1>
        
      </div>
    )
  }
}