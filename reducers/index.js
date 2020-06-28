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
                
                    title:title,
                    questions:[]
                
            }
            
            return {
                ...state,
                [title]:deck,
            }


        case ADD_QUESTION:
            const question = action.question
            console.log('the question is : ' , question )

            return {
                // ...state,
                // [action.deckName]:{
                //     ...[action.deckName],
                //     questions:{
                //         ...[action.deckName].questions,
                //        question
                //     }
                // }
                ...state,
               
                // [action.deckName]:{
                //     ...[action.deckName],
                //     title:'hassan15'
                // }
                
            }            
        default:
            return state
    }
    // switch(action.type){



    //     // case TOGGLE_ANSWER:

    //     default:
    //         return state
    // }
}

export default decks