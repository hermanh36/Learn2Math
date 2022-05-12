import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";

const UserReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USERS:
            Object.assign(nextState, action.users)
            return nextState;
        case RECEIVE_USER:
            nextState[action.user._id]=action.user
            return nextState;
        default:
            return state;
    }
}

export default UserReducer;