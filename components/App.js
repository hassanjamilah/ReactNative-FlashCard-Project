import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import { saveDeck, removeAllDecks, getAllDecks, getDeck, saveQuestion, saveQuestionAnswer, ANSWER_CORRECT, ANSWER_WRONG } from '../api/api'
import Deck from '../components/Deck'

export default class App extends React.Component {



  render() {
    //saveQuestionAnswer('q3',ANSWER_WRONG,'hassan47')

    //saveQuestion('q7','a7','hassan47')
    //saveQuestion('q1','a1','hassan47')
    //saveQuestion('q3','a3','hassan47')


    //saveQuestion('q7','a7','hassan47')


    //getDeck('hassan45').then((data)=>console.log(data))

    //saveDeck('hassan47')
    //removeAllDecks();saveDeck('hassan47')
    getAllDecks().then((data) => { console.log('all data: ', data) })
    
    return (
      <Provider store= {createStore(reducer)}>
        <View style={styles.container}>
          {/* {
          keys.map((key)=>(
            <Text></Text>
          ))
        } */}
          <StatusBar style="auto" />
         <Deck/>

        </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
