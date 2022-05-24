import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";

const UserReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USERS:
            action.users.map(user => 
                nextState[user._id] = user)
            return nextState;
        case RECEIVE_USER:
            nextState[action.user._id]=action.user
            return nextState;
        default:
            return state;
    }
}

export default UserReducer;