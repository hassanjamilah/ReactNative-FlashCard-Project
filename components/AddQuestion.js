import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { addQuestion } from '../actions/question_actions'
import * as API from '../api/api'

class AddQuestion extends React.Component {
    state = {
        qText: '',
        aText: '',
        submitEnaled:false
    }

    //Handle Text Changes
    handleChangeQuestion = (text) => {
        console.log('🍼 ' + text)
        this.setState((state) => ({
            ...state,
            qText: text
        }))
    }

    handleChangeAnswer = (text) => {
        console.log('🍼 ' + text)
        this.setState((state) => ({
            ...state,
            aText: text
        }))
    }

    enableButton = () => {
        const {qText, aText} = this.state
        this.setState((state)=>({
            ...state,
            submitEnaled:(qText === '' && aText === '')
        }))
        
    }

    handleSubmit = () => {
        
        const key = this.props.route.params.key
        const {qText, aText} = this.state
        console.log('🍊 ' , key)
        this.props.dispatch(addQuestion(qText ,aText, key))
        API.saveQuestion(qText, aText, key)
       this.props.navigation.goBack()
    }

    render() {

        
        const { qText, aText } = this.state
        const disabled = (qText === '' || aText === '')
        console.log('🍎 enabled: ' , disabled)
        return (
            <View>
                <Text style={styles.titleHeader}>Add Question </Text>
                <TextInput style={styles.TextEdit} value={this.state.qText}
                    onChangeText={(text) => this.handleChangeQuestion(text)}
                ></TextInput>
                <TextInput style={styles.TextEdit} value={this.state.aText}
                    onChangeText={(text) => this.handleChangeAnswer(text)}
                ></TextInput>
                <TouchableOpacity 
                    onPress={this.handleSubmit} 
                    disabled={disabled} 
                    style={disabled ? styles.buttonDisabled : styles.button}>
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



export default connect()(AddQuestion)
