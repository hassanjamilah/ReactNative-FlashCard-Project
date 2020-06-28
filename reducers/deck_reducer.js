import {ADD_DECK, RECEIVE_DECKS} from '../actions/deck_actions'
import {ADD_QUESTION, TOGGLE_ANSWER} from '../actions/question_actions'

export  function deck_reducer(state={}, action){
    switch(action.type){
        // case ADD_DECK:
        //     const title = action.deckTitle
        //     return {
        //         ...state,
        //         title
        //     }
        // case RECEIVE_DECKS:
        //     return {
        //         ...state,
        //         ...action.decks
        //     }

        // case ADD_QUESTION:
        //     const question = action.question
        //     return {
        //         ...state,
        //         [action.deckName]:{
        //             ...[action.deckName],
        //             questions:{
        //                 ...[action.deckName].questions,
        //                question
        //             }
        //         }
        //     }
        // case TOGGLE_ANSWER:

        default:
            return state
    }
}