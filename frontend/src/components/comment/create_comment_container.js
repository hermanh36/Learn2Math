import CommentForm from "./comment_form";
import { connect } from "react-redux";

const mapState = (state, ownProps) => {
    return {
        comment:{
            message:'',
            lessonId: ownProps.match.params.lessonId
        },
        formType: 'Create',
        createErrors: state.errors.commentCreate
    }
};

const mapDispatch = (dispatch,ownProps) => {
    return {
        submitForm: ownProps.createComment,
        clearCommentErrors: ownProps.clearCommentErrors
    }
}

export default connect(mapState, mapDispatch)(CommentForm);