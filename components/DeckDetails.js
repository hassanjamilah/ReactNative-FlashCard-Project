import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
class DeckDetails extends React.Component{
    render(){
        console.log('The state in deck details', this.props.state)
        return (
            <View>
                
            </View>
        )
    }
}

function mapStateToPorps ({state},{deckName, navigation}){
    return {
        state,
        deckName:'hassan47'
    }
}

export default connect(mapStateToPorps)(DeckDetails)