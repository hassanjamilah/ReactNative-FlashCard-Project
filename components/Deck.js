import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks, addDeck } from '../actions/deck_actions'
import { addQuestion, toggleAnswer } from '../actions/question_actions'
import { Constants } from 'expo'
import * as API from '../api/api'
import { TouchableOpacity } from 'react-native-gesture-handler'
class Deck extends React.Component {
    componentDidMount() {
        API.getAllDecks()
            .then((data) => {


                this.props.dispatch(receiveDecks(data))

                // this.props.dispatch(addDeck('New Deck1'))
                //  //this.props.dispatch(addQuestion('q105', 'a106', 'hassan47'))
                //  this.props.dispatch(toggleAnswer('q1', 'correct', 'hassan47'))
            })
    }

    handlePress = (key) => {

        this.props.navigation.navigate('qDetails', { key: key })
    }

    handleAddPress = (a,key)=>{
        
        switch (a){
            case 'question':
                this.props.navigation.navigate('AddQeustion',{key:key})
            case 'deck':
                this.props.navigation.navigate('AddDeck')
            default:

        }
    }
    render() {
        console.log('state in Deck:', this.props.state)
        const keys = Object.keys(this.props.state)
        console.log('state keys in Deck:', keys)

        return (
            <View style={styles.container}>
                {

                    keys.map((key) => (
                       
                        <TouchableOpacity onPress={() => this.handlePress(key)}>

                            <View style={styles.deckCard}>
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                                <View>
                                    <Text style={styles.DeckCardTitleText}>{this.props.state[key].title}</Text>
                                    <Text style={styles.DeckCardSubTitleText}>{(Object.keys(this.props.state[key].questions)).length} Cards</Text>
                                </View>
                                <TouchableOpacity 
                                    onPress={()=>this.handleAddPress('question',key)} 
                                    style={{marginLeft:100}}>
                                    <Text 
                                        
                                        style={{fontSize:18,color:'blue'}}>
                                        Add Quesion
                                    </Text>
                                </TouchableOpacity>
                                </View>
                               
                            </View>
                        </TouchableOpacity>
                        
                     
                    ))
                }
                <TouchableOpacity 
                    onPress={()=>this.handleAddPress('deck')} 
                    style={{alignSelf:'center', marginTop:20}}>
                    <Text style={{fontSize:18,color:'blue'}}>Add Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state, { navigation }) {

    return {
        state,
        navigation
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 50,
        alignContent: 'stretch',


    },
    deckCard: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,

        backgroundColor: 'white',

        marginTop: 10,
        marginBottom: 10,
        marginStart: 10,
        marginEnd: 10,
        shadowColor: 'gray',
        shadowRadius: 2,
        shadowOpacity: 0.8,
        shadowOffset: {
            width: 2,
            height: 3
        },
        borderColor: 'gray',
        borderWidth: 1
    },
    DeckCardTitleText: {
        color: 'black',
        fontSize: 24,
        fontWeight: "900",
        paddingBottom: 10,
    },
    DeckCardSubTitleText: {
        color: 'black',
        fontSize: 18,
        fontWeight: "400",
        paddingBottom: 10,
    }

})

export default connect(mapStateToProps)(Deck)

