import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_USERS = 'CLEAR_USERS'

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users: users.data
})

const receiveUser = user => ({
    type: RECEIVE_USER,
    user: user.data
})

const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors: errors.reponse.data
})

const clearUsers = () => ({
    type: CLEAR_USERS
})

export const fetchUsers = () => dispatch => {
    return UserAPIUtil.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
        .catch(err => dispatch(receiveUserErrors(err)))
};

export const fetchUser = userId => dispatch => {
    return UserAPIUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
        .catch(err => dispatch(receiveUserErrors))
};

export const removeUsers = () => dispatch => {
    return (
        dispatch(clearUsers())
    )
}