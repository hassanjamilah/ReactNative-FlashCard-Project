import React from 'react-native'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

class QuestionDetails extends React.Component{
    render(){
        return(
            <View>
                <Text>2/2</Text>
                <Text>The Question</Text>
                <TouchableOpacity>Answer</TouchableOpacity>
                <TouchableOpacity>Correct</TouchableOpacity>
                <TouchableOpacity>Wrong</TouchableOpacity>
            </View>
        )
    }

}

function mapStateToProps({state},{questionText}){
    return {
        state, 
        questionText
    }

}

export default connect(mapStateToProps)(QuestionDetails)