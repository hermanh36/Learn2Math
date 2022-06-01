import {
    RECEIVE_QUIZZES,
    RECEIVE_QUIZ,
    REMOVE_QUIZ
} from '../actions/quiz_action';

const QuizReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type){
        case RECEIVE_QUIZZES:
            nextState = {};
            Object.values(action.quizzes).forEach(quiz => {
                nextState[quiz._id] = quiz
            })
            return nextState;
        case RECEIVE_QUIZ:
            nextState = {};
            nextState[action.quiz._id] = action.quiz;
            return nextState;
        case REMOVE_QUIZ:
            delete nextState[action.quizId];
            return nextState;
        default:
            return state;
            
    }
}

export default QuizReducer;