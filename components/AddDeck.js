import React from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
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