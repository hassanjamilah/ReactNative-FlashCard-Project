import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {toggleAnswer} from '../actions/question_actions'
import {ANSWER_CORRECT, answwer} from '../api/api'
import * as API from '../api/api'
import {receiveDecks} from '../actions/deck_actions'


class QuestionDetails extends React.Component{
   

    //todo delete this code
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
        showAnswer: false,
        currentQuestion : 0 , 
        
    }

    handleShowAnswer = () => {
       
        this.setState((state)=>{
            
           return {
               showAnswer: !state.showAnswer
           }
        })
    }

    handleSumbit = (answer) => {

    }

    render(){
       console.log('THE properties' , this.props.route.params.key)
        const {state} = this.props
         const questions = state['hassan47'].questions
        console.log('the state in details is: ' , questions[0].question)
        const q = questions[0].question
        if (this.state.showAnswer === true){
            return (
                <View>
                    <Text>Show Ansower</Text>
                </View>
            )
        }
        return(
            <View style={styles.conatiner}>
                <Text style={styles.topCornerTest}>2/2</Text>
                <Text>{q}</Text>
                <TouchableOpacity onPress={this.handleShowAnswer}><Text>Answer</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.handleSumbit}><Text>Correct</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.handleSumbit}><Text>Wrong</Text></TouchableOpacity>
            </View>
        )
    }

}

function mapStateToProps(state){
    return {
        state,
        
    }
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        marginTop:50,

    },
    topCornerTest:{
        alignSelf:'flex-start',
        fontSize:18,
        fontWeight:"500"

    }
})

export default connect(mapStateToProps)(QuestionDetails)