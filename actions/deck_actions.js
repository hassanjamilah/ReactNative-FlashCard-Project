import {AsyncStorage} from 'react-native'


//The answer type that is passed to the function SaveQeustionAnswer
export const ANSWER_CORRECT='correct'
export const ANSWER_WRONG='wrong'

const STORAGE_KEY='FlashCardsMobile'


export function saveQuestion (questionText, questionAnswer, deckID){

}

export function saveQuestionAnswer(questionID, answer){

}

export function saveDeck(deckName){
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [deckName]:deckName
    }))
}

export function getAllDecks(){
    return AsyncStorage.getItem(STORAGE_KEY)
    
}

export function getDeck(deckID){

}



//Helper functions 
function formatDeckResult (results){
    return {
       

    }

    }
}

//Used to genereat new id depending on the current timestamp
function getID (){
    return new Date().valueOf()
}