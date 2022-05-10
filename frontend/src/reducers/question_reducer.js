import {
    RECEIVE_QUESTIONS,
    RECEIVE_QUESTION,
    REMOVE_QUESTION
    } from '../actions/question_actions';

const QuestionReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_QUESTIONS:
            Object.values(action.questions).forEach(question => {
                nextState[question._id] = question
            })
            return nextState;
        case RECEIVE_QUESTION:
            nextState[action.question._id]=action.question;
            return nextState;
        case REMOVE_QUESTION:
            delete nextState[action.questionId]
            return nextState;
        default:
            return nextState;
    }

}

export default QuestionReducer;