import React from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {addQuestion} from '../actions/question_actions'
import {saveQuestion} from '../api/api'
class AddQuestion extends React.Component{
    state = {
        qText:'' , 
        aText:'',
    }

    handleChange = (e) => {
        this.setState((state)=>{
           state.qText = e.target.value

        })
    }

    handleSubmit = ()=>{
        const {qText, aText} = this.state
        this.props.state.dispatch(addQuestion(qText, aText, deckName))
        saveQuestion(qText,aText,deckName)
    }

    render(){
        const submitState =  (aText === '' || qText === '')
           
        
        return(
            <View>
                <Text style={styles.titleHeader}>Add Question </Text>
                <TextInput style={styles.TextEdit} value={this.state.qText}></TextInput>
                <TextInput style={styles.TextEdit} value={this.state.aText}></TextInput>
                <TouchableOpacity onPress={this.handleSubmit} disabled = {submitState}>Submit</TouchableOpacity>
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
        textAlign:"center"

    },
    Button: {
        width: 150,
        height: 50,
        
        borderColor: 'black',
        borderWidth: 2,
        borderRadius:5,
        marginBottom:10,
        alignSelf:'flex-end',
        justifyContent:'center',
        alignItems:'center'
    },
    TextEdit:{
        width:150,
        borderColor:'black',
        borderWidth:2,

    }
})



export default connect()(AddQuestion)
