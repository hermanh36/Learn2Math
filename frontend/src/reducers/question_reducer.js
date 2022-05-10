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
            return Object.assign(nextState, action.questions)
        case RECEIVE_QUESTION:
            nextState[action.question.id]=action.question;
            return nextState;
        case REMOVE_QUESTION:
            delete nextState[action.questionId]
            return nextState;
        default:
            return nextState;
    }

}

export default QuestionReducer;