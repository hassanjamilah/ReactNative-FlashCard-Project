import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
class DeckDetails extends React.Component {
    render() {
        console.log('The state in deck details', this.props.state)
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.titleHeader}>Deck 10 33</Text>
                    <Text style={styles.titleSubHeader}>10 Questions</Text>
                   
                </View>
                <TouchableOpacity style={[styles.Button, { backgroundColor: 'blue' ,marginTop:90}]}><Text>Add Card</Text></TouchableOpacity>
                    <TouchableOpacity style={[styles.Button, { backgroundColor: 'green' }]}><Text>Start Quiz</Text></TouchableOpacity>
            </View>
        )
    }
}

function mapStateToPorps({ state }, { deckName, navigation }) {
    return {
        state,
        deckName: 'hassan47'
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
    }
})


export default connect(mapStateToPorps)(DeckDetails)