import React from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import {connect} from 'react-redux'

class AddDeck extends React.Component{
    //TODO: REMOVE THIS CODE
    componentDidMount() {
        API.getAllDecks()
            .then((data) => {


                this.props.dispatch(receiveDecks(data))

                // this.props.dispatch(addDeck('New Deck1'))
                //  //this.props.dispatch(addQuestion('q105', 'a106', 'hassan47'))
                //  this.props.dispatch(toggleAnswer('q1', 'correct', 'hassan47'))
            })
    }
    
    state = {
        deckText:'',
    }


    handleChange = (e) => { 
        this.setState(()=>{
            deckText:e.target.value
        })
    }

    handleSubmit = () => {
        
    }

    render(){
        return(
            <View>
                <Text>
                    Add Deck
                </Text>
                <TextInput value={this.state.deckText} onChange={this.handleChange}></TextInput>
                <TouchableOpacity>Submit</TouchableOpacity>
            </View>
        )
    }
}

export default connect()(AddDeck)