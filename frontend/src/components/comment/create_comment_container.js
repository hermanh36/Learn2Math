import CommentForm from "./comment_form";
import { connect } from "react-redux";

const mapState = (state, ownProps) => {
    debugger
    return {
        comment:{
            message:'',
            lessonId: ownProps.match.params.lessonId
        },
        formType: 'Create'
    }
};

const mapDispatch = (dispatch,ownProps) => {
    debugger
    return {
        submitForm: ownProps.createComment
    }
}

export default connect(mapState, mapDispatch)(CommentForm);