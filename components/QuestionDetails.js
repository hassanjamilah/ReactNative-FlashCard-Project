import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { toggleAnswer } from '../actions/question_actions'
import { ANSWER_CORRECT, answwer } from '../api/api'
import * as API from '../api/api'
import { receiveDecks } from '../actions/deck_actions'


class QuestionDetails extends React.Component {

    state = {
        showAnswer: false,
        currentQuestion: 1,
    }

    //Custom Components
    ShowAnswerButton = () => {
        return (
            <TouchableOpacity 
            style={styles.showAnswerButton}
            onPress={this.handleShowAnswer}>
                <Text style={styles.showAnswerButtonText}>
                    {this.state.showAnswer ? 'Show Questions' : 'Show Answer'}
                </Text>
            </TouchableOpacity>
        )
    }



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

  

    handleShowAnswer = () => {
        this.setState((state) => {
            return {
                showAnswer: !state.showAnswer
            }
        })
    }



    handleSumbit = (answer) => {

    }

    render() {
        const {key} = this.props.route.params 
        const {currentQuestion} = this.state
        console.log('THE properties', key)
        const questions = this.props.state[key].questions
        const questionsKeys = Object.keys(questions)
        console.log('THE state is: ' ,questions )
        console.log('THE keys is: ' ,questionsKeys )
        const question = questions[questionsKeys[0]].question
        const answer = questions[questionsKeys[0]].answer

        if (this.state.showAnswer === true) {
            return (
                <View>
                    <Text>{answer}</Text>
                    <this.ShowAnswerButton/>
                </View>
            )
        }
        return (
            <View style={styles.conatiner}>
                <Text style={styles.topCornerTest}>{currentQuestion} / 2</Text>
                <Text>{question}</Text>
                <this.ShowAnswerButton/>
                <View style={styles.submitView}>
                    <TouchableOpacity onPress={this.handleSumbit} 
                        style={[styles.submitButton , {backgroundColor:'green'}]}>
                        <Text>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={this.handleSumbit}
                        style={[styles.submitButton , {backgroundColor:'red'}]}>
                        <Text>Wrong</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

function mapStateToProps(state) {
    return {
        state,

    }
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        marginTop: 50,

    },
    topCornerTest: {
        alignSelf: 'flex-start',
        fontSize: 18,
        fontWeight: "500"

    },
    submitButton:{
        alignSelf:'flex-end',
        margin:10,
        padding:10,
        borderRadius:5,
        borderColor:'black',
        borderWidth:1,
        
    },

    submitView:{
        flexDirection:'row',
        justifyContent:'center',
    },

    showAnswerButton:{
        
    },
    showAnswerButtonText:{
        color: 'blue',
        alignSelf:'center',
        fontSize:24,
        fontWeight:"600",

    }
})

export default connect(mapStateToProps)(QuestionDetails)