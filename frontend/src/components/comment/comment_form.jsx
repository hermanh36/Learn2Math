import React from 'react';

export default class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateComment = this.updateComment.bind(this);
    }

    updateComment(e){
        this.setState({message: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.submitForm(this.state).then((res) => {
            if (this.props.formType === 'Create'){
                this.setState({message: ''});
            }else{
                this.props.toggleCommentForm(this.state._id); 
            }
        });
    }

    render(){
        let createErrors, editErrors;
        if (this.props.formType === 'Create'){
            createErrors = Object.values(this.props.createErrors).length > 0 ? 
            Object.values(this.props.createErrors).map((error, idx) => <p key={idx}>{error}</p>) : null;
        } else {
            editErrors = Object.values(this.props.editErrors).length > 0 ? 
            Object.values(this.props.editErrors).map((error, idx) => <p key={idx}>{error}</p>) : null;
        }
        return (
            <div className="edit-comment-wrap">
                <form onSubmit={this.handleSubmit}>
                    <div className="update-comment-textarea-wrap">
                        <textarea className="update-comment-textarea" value={this.state.message} onChange={this.updateComment}/>
                    </div>
                    <div className="update-comment-btn-wrap">
                        <button>{this.props.formType === 'Update' ? 'Update ' : ''}Comment</button>
                    </div>
                    {this.props.formType === 'Create' ? createErrors : editErrors}
                </form>
            </div>
        )
    }

}