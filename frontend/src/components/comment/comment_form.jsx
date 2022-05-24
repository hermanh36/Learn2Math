import React from 'react';

export default class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state=this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateComment = this.updateComment.bind(this);
    }

    updateComment(e){
        this.setState({message: e.currentTarget.value})
        console.log(this.state);
        console.log(e.currentTarget.value);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateComment(this.state);
      }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.message} onChange={this.updateComment}/>
                    <button>Update Comment</button>
                </form>
            </div>
        )
    }

}