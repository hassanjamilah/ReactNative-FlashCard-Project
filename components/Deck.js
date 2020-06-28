import React from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {receiveDecks, addDeck} from '../actions/deck_actions'
import {addQuestion} from '../actions/question_actions'
import * as API from '../api/api'
 class Deck extends React.Component{
componentDidMount(){
    API.getAllDecks()
    .then((data)=>{
       
       
        this.props.dispatch(receiveDecks(data))

        this.props.dispatch(addDeck('New Deck1'))
         //this.props.dispatch(addQuestion('q10', 'a10', 'New Deck1'))
    })
}
    render(){
       console.log('Properties in Deck:', this.props.state)

        return (
            <View>
                <Text>Hello</Text>
            </View>
        )
    }
}

function mapStateToProps(state){
    
    return {
        state
    }
}

export default connect(mapStateToProps)(Deck)

