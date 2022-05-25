import CommentForm from "./comment_form";
import { connect } from "react-redux";

const mapState = (state, ownProps) => {
    return {
        comment: ownProps.comment,
        formType: 'Update',
        editErrors: state.errors.commentUpdate
    }
};

const mapDispatch = (dispatch,ownProps) => {
    return {
        submitForm: ownProps.updateComment
    }
}

export default connect(mapState, mapDispatch)(CommentForm);