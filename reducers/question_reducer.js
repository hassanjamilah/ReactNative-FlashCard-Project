import {ADD_QUESTION, TOGGLE_ANSWER} from '../actions/question_actions'

export default function question_reducer(state={} , action){
    switch(action.type){
        case ADD_QUESTION:
            return {
                ...state,
                
            }
        case TOGGLE_ANSWER:
        default:
            return state
    }
}