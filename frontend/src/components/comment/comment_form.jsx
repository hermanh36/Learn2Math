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
        this.props.submitForm(this.state);
        if (this.props.formType === 'Create'){
            this.setState({message: ''});
        }
      }

    render(){
        return (
            <div className="edit-comment-wrap">
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.message} onChange={this.updateComment}/>
                    {/* this button below either creates a new comment or updates an existing comment under the current lesson */}
                    <button>{this.props.formType === 'Update' ? 'Update ' : ''}Comment</button>
                </form>
            </div>
        )
    }

}