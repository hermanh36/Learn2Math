import * as QuestionAPIUtil from '../util/question_api_util';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const RECEIVE_QUESTION_ERRORS = 'RECEIVE_QUESTION_ERRORS';

const receiveQuestions = questions => {
    return {
        type: RECEIVE_QUESTIONS,
        questions : questions.data
    }
};

const receiveQuestion = question => {
    return {
        type: RECEIVE_QUESTION,
        question: question.data
    }
};

const removeQuestion = questionId => {
    return {
        type: REMOVE_QUESTION,
        questionId
    }
};

const receiveQuestionErrors = errors => {
    return {
        type: RECEIVE_QUESTION_ERRORS,
        errors:errors.response.data
    }
};

export const fetchQuestions = (quizId) => dispatch => {
    return QuestionAPIUtil.fetchQuestions(quizId)
        .then(questions => dispatch(receiveQuestions(questions)))
        .catch(err => dispatch(receiveQuestionErrors(err)))
};

export const fetchQuestion = questionId => dispatch => {
    return QuestionAPIUtil.fetchQuestion(questionId)
        .then(question => dispatch(receiveQuestion(question)))
        .catch(err => dispatch(receiveQuestionErrors(err)))
};

export const createQuestion = question => dispatch => {
    return QuestionAPIUtil.createQuestion(question)
        .then(question => dispatch(receiveQuestion(question)))
        .catch(err => dispatch(receiveQuestionErrors(err)))
};

export const updateQuestion = question => dispatch => {
    return QuestionAPIUtil.updateQuestion(question)
        .then(question => dispatch(receiveQuestion(question)))
        .catch(err => dispatch(receiveQuestionErrors(err)))
};

export const deleteQuestion = questionId => dispatch => {
    return QuestionAPIUtil.deleteQuestion(questionId)
        .then(() => dispatch(removeQuestion(questionId)))
        .catch(err => dispatch(receiveQuestionErrors(err)))
};