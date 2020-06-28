export const ADD_DECK='ADD_DECK'
export const RECEIVE_DECKS='RECEIVE_DECKS'

export function addDeck(deckTitle){
    return {
        type:ADD_DECK,
        deckTitle
    }
}

export function receiveDecks(decks){
    console.log('Dock received')
    return {
        type:RECEIVE_DECKS,
        decks
    }
}