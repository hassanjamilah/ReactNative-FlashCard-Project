import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { toggleAnswer } from '../actions/question_actions'
import { ANSWER_CORRECT, ANSWER_WRONG, answwer } from '../api/api'
import * as API from '../api/api'



class QuestionDetails extends React.Component {

    state = {
        showAnswer: false,
        currentQuestion: 0,
        finishedAllQuestions:false,
    }
    questions = []
    keys = []
    deckName = ''

    /*
        Custom Components
    */
   //The Show answer button
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
    
    // The statistics page
    ShowStatistics = () => {
        this.refreshQeustion()
        var correctNum = 0 ; 
        var wrongNum = 0;
        this.keys.map((k)=>{
            const answer = this.questions[k].answered;
            answer === 'correct' ? correctNum++ : wrongNum++
        })
        console.log('🍗 ' + correctNum + ' ' + wrongNum)
        return (
            <View style={styles.statisticsContainer}>
                <Text style={styles.statisticsText}>
                    Total Qeustions: {this.keys.length}
                </Text>
                <Text style={[styles.statisticsText, {color: 'green'}]}>
                    Correct Answers: {correctNum}
                </Text>
                <Text style={[styles.statisticsText, {color: 'red'}]}>
                    Wrong Answers: {wrongNum}
                </Text>
            </View>
        )
    }



    //Handle buttons actions

    //Handle show answer button action 
    handleShowAnswer = () => {
        this.setState((state) => {
            return {
                showAnswer: !state.showAnswer
            }
        })
    }

    //Handle toggle answer buttons action
    handleSumbit = (answer) => {
        const {currentQuestion} = this.state

        const questionText = this.questions[this.keys[currentQuestion]].question
        this.props.dispatch(toggleAnswer(questionText, answer, this.deckName))
        API.saveQuestionAnswer(questionText, answer, this.deckName)
        
        if (currentQuestion >= this.keys.length-1){ 
            this.setState(()=>({
                finishedAllQuestions:true
            }))
            return 
        }
        this.setState(()=>({
            currentQuestion:currentQuestion+1
        }))

    }

    //Prepare the questions and answers array
    componentWillMount(){
        this.refreshQeustion()
    }

    refreshQeustion = () => {
        const {key} = this.props.route.params 
        console.log('THE properties', key)
        const questions = this.props.state[key].questions
        const questionsKeys = Object.keys(questions)
        console.log('THE state is: ' ,questions )
        console.log('THE keys is: ' ,questionsKeys )
        this.questions = questions
        this.keys = questionsKeys
        this.deckName = key
    }




    render() {
        var question , answer, index
        
        if (this.keys.length == 0 ){
            return (
                
                    <View>
                        <Text style={styles.questionText}>
                            No questions in this deck
                        </Text>
                    </View>
                
            )
        }

        if (this.state.currentQuestion < this.keys.length){
             index = this.state.currentQuestion
        }else {
            index = this.keys.length - 1
        }
        question = this.questions[this.keys[index]].question
        answer = this.questions[this.keys[index]].answer

        //Show the answer or the questions
        if (this.state.showAnswer === true) {
            return (
                <View>
                    <Text>{answer}</Text>
                    <this.ShowAnswerButton/>
                </View>
            )
        }

        //Show the statistics
        if (this.state.finishedAllQuestions === true){
            return (
                <View>
                    <this.ShowStatistics/>
                </View>
            )
        }

        return (
            <View style={styles.conatiner}>
                <Text style={styles.topCornerTest}>{this.state.currentQuestion+1} / {this.keys.length}</Text>
                <Text style={styles.questionText}>{question}</Text>
                <this.ShowAnswerButton/>
                <View style={styles.submitView}>
                    <TouchableOpacity 
                        onPress={()=>this.handleSumbit(`${ANSWER_CORRECT}`)} 
                        style={[styles.submitButton , {backgroundColor:'green'}]}>
                            <Text>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        value = {ANSWER_WRONG}
                        onPress={()=>this.handleSumbit(`${ANSWER_WRONG}`)} 
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

    },
    questionText:{
        color:'black',
        fontWeight:"400",
        fontSize:36,
        textAlign:'center',
        margin:10,
        marginBottom:50,

    },
    statisticsContainer:{
        marginTop: 50,
        alignItems:'center'

    },
    statisticsText:{
        fontSize: 32,
        fontWeight: '400',
        margin: 10
    }

})

export default connect(mapStateToProps)(QuestionDetails)