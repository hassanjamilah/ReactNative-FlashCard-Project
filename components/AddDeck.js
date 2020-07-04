import React from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import * as API from '../api/api'
import { addDeck } from '../actions/deck_actions'
class AddDeck extends React.Component{

    
    state = {
        deckText:'',
    }


    handleChange = (text) => { 
        
        this.setState(()=>({
            deckText:text
        }))
    }

    handleSubmit = () => {
        this.props.dispatch(addDeck(this.state.deckText))
        API.saveDeck(this.state.deckText)
        this.props.navigation.goBack()
    }

    render(){
        const disabled = this.state.deckText === ''
        console.log('disabled: ' , disabled)
        return(
            <View>
            
                <TextInput value={this.state.deckText} style={styles.TextEdit} onChangeText={(text)=>this.handleChange(text)}></TextInput>
                <TouchableOpacity 
                    style={disabled ? styles.buttonDisabled : styles.button} 
                    disabled={disabled}
                    onPress={this.handleSubmit}
                    >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {

        marginTop: 50,
        alignItems: 'center',
        alignContent: 'flex-start'

    },
    titleHeader: {
        fontSize: 32,
        fontWeight: "bold"
    },
    titleSubHeader: {
        fontSize: 24,
        fontWeight: "400",
        textAlign: "center"

    },
    button: {
        width: 150,
        height: 50,

        borderColor: 'blue',
        backgroundColor:'blue',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 10,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        margin:10,
    },
    buttonDisabled: {
        width: 150,
        height: 50,

        borderColor: 'gray',
        backgroundColor:'gray',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 10,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        margin:10,

    },
    buttonText: {
        fontSize:24,
        color:'white'
    },
   
    TextEdit: {
        width: Dimensions.get('window').width-20,
        height: 30,
        margin:10,
        borderColor: 'gray',
        borderWidth: 1,
       

    }
})

export default connect()(AddDeck)