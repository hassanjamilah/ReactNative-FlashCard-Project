import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { receiveDecks, addDeck } from '../actions/deck_actions'
import { addQuestion, toggleAnswer } from '../actions/question_actions'
import { Constants } from 'expo'
import * as API from '../api/api'
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
    render() {
        console.log('state in Deck:', this.props.state)
        const keys = Object.keys(this.props.state)
        console.log('state keys in Deck:', keys)

        return (
            <View style={styles.container}>
                {

                    keys.map((key) => (
                        <View style={styles.deckCard}>
                            <Text style={styles.DeckCardTitleText}>{this.props.state[key].title}</Text>
                            <Text style={styles.DeckCardSubTitleText}>{(Object.keys(this.props.state[key].questions)).length} Cards</Text>
                        </View>
                    ))
                }
            </View>
        )
    }
}

function mapStateToProps(state) {

    return {
        state
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 50,
        alignContent:'stretch',
        

    },
    deckCard: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
       width:400,
        backgroundColor: 'white',
        
        marginTop:10,
        marginBottom:10,
        shadowColor:'gray',
        shadowRadius:2,
        shadowOpacity:0.8,
        shadowOffset:{
            width:2,
            height:3
        },
        borderColor:'gray',
        borderWidth:1
    },
    DeckCardTitleText:{
        color:'black',
        fontSize:24,
        fontWeight:"900",
        paddingBottom:10,   
    },
    DeckCardSubTitleText:{
        color:'black',
        fontSize:18,
        fontWeight:"400",
        paddingBottom:10,  
    }

})

export default connect(mapStateToProps)(Deck)

