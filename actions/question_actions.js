export const ADD_QUESTION = 'ADD_QUESTION'
export const TOGGLE_ANSWER = 'TOGGLE_ANSWER'

export function addQuestion(questionText, answerText, deckName){
    const question = {
        question: questionText, 
        answer: answerText, 
        answered: null
    }
    return {
        type:ADD_QUESTION,
        question,
        deckName
    }
}

export function toggleAnswer(questionText, answer, deckName){
    const question = {
        question: questionText,
        answer:answerText
    }
    return {
        type:TOGGLE_ANSWER,
       question,
        deckName
    }
}

