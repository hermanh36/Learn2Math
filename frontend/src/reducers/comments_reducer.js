import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT } from "../actions/comment_actions";

const CommentReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_COMMENTS:
            action.comments.forEach(comment => {
                nextState[comment._id] = comment;
            })
            return nextState;
        case RECEIVE_COMMENT:
            nextState[action.comment._id]=action.comment;
            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;
        default:
            return state;
    }

}

export default CommentReducer;