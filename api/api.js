import {AsyncStorage} from 'react-native'


//The answer type that is passed to the function SaveQeustionAnswer
export const ANSWER_CORRECT='correct'
export const ANSWER_WRONG='wrong'

const STORAGE_KEY='FlashCardsMobile'


export function saveQuestion (questionText, questionAnswer, deckID){
   // removeAllDecks();saveDeck('hassan47')
     return AsyncStorage.getItem(STORAGE_KEY)
    .then((results)=>{
        const data = JSON.parse(results)
        // const newQ =  JSON.stringify( data[deckID].questions.concat([q]))
        // console.log('questions:', newQ)
      
        const questions = data[deckID].questions
        const keys = Object.keys(questions)

        console.log(questions)
        console.log(keys)
        var n = []
        keys.map((k)=>{
            n.push(questions[k])
        })
        console.log(n)
        const newQ = [...n,{question:questionText , answer:questionAnswer , answered:null}]
        console.log(newQ)

        data[deckID]={
            ...data[deckID],
            questions:{
                ...newQ
                
            }
        }
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
       
    })
    
    

}

export function saveQuestionAnswer(questionID, answer){

}

export function saveDeck(deckName){

    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [deckName]:{title: deckName,
        questions:[] }
    }))
}

export function getAllDecks(){
    return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => JSON.parse(results))
    
}

export function getDeck(deckID){
    return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => JSON.parse(results))
    .then((data) => data[deckID])
}

export function removeAllDecks(){
    AsyncStorage.removeItem(STORAGE_KEY)
}


//Helper functions 
function formatDeckResult (aresults){
    
}

//Used to genereat new id depending on the current timestamp
function getID (){
    return new Date().valueOf()
}