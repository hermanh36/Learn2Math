import { RECEIVE_USER, RECEIVE_USERS, CLEAR_USERS } from "../actions/user_actions";

const UserReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USERS:
            Object.assign(nextState, action.users)
            return nextState;
        case RECEIVE_USER:
            nextState[action.user._id]=action.user
            return nextState;
        case CLEAR_USERS:
            nextState = {};
            return nextState
        default:
            return state;
    }
}

export default UserReducer;