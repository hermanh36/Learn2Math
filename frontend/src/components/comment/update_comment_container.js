import CommentForm from "./comment_form";
import { connect } from "react-redux";

const mapState = (state, ownProps) => {
    return {
        comment: ownProps.comment,
        formType: 'Update',
        errors: state.errors.comment
    }
};

const mapDispatch = (dispatch,ownProps) => {
    return {
        submitForm: ownProps.updateComment
    }
}

export default connect(mapState, mapDispatch)(CommentForm);