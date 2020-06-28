import { combineReducers } from 'redux'
import deck_reducer from '../reducers/deck_reducer'
import { ADD_DECK, RECEIVE_DECKS } from '../actions/deck_actions'
import { ADD_QUESTION, TOGGLE_ANSWER } from '../actions/question_actions'
function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            console.log('decks in reducer', action.decks)
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            const title = action.deckTitle
            const deck = {

                title: title,
                questions: []

            }

            return {
                ...state,
                [title]: deck,
            }


        case ADD_QUESTION:
            const question = action.question
            var deckName = action.deckName
            console.log('the question is : ', question)

            var qq = state[deckName].questions
            var keys = Object.keys(qq)
            var newa = []
            keys.map((key) => {
                newa.push(qq[key])
            })
            newa.push(question)
            console.log('the new questions ', newa)
            return {
                ...state,
                [deckName]: {
                    title: [deckName],
                    questions: {
                        ...newa
                    }
                }

            }

        case TOGGLE_ANSWER:
            const {questionText, answer} = action 
            deckName = action.deckName
            console.log('the question is : ', questionText)

             qq = state[deckName].questions
             keys = Object.keys(qq)
             console.log('the keys are : ' , keys)
             newa = []
            keys.map((key) => {
                if (qq[key].question === questionText){
                    qq[key].answered = answer
                }
                newa.push(qq[key])
            })
            newa.push(question)
            console.log('the new questions ', newa)
            return {
                ...state,
                [deckName]: {
                    title: [deckName],
                    questions: {
                        ...newa
                    }
                }

            }
        default:
            return state
    }
    



}

export default decks