import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import { saveDeck, removeAllDecks, getAllDecks, getDeck, saveQuestion, saveQuestionAnswer, ANSWER_CORRECT, ANSWER_WRONG } from '../api/api'
import Deck from '../components/Deck'
import DeckDetails from '../components/DeckDetails'
import QuestionDetails from '../components/QuestionDetails'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AddDeck from '../components/AddDeck'
import AddQuestion from '../components/AddQuestion'
import {setLocalNotification} from '../utils/helper'



export default class App extends React.Component {

  componentDidMount(){
    setLocalNotification()
  }

  render() {
    const Stack = createStackNavigator()
    getAllDecks().then((data) => { console.log('all data: ', data) })

    return (
      <Provider store={createStore(reducer)}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='deck'>
            <Stack.Screen name='deck' component={Deck} options={{ title: 'Deck' }}/>
            <Stack.Screen name='qDetails' component={QuestionDetails} options={{title: 'Details'}}/>
            <Stack.Screen name='AddQeustion' component={AddQuestion} options={{title:'Add Question'}}/>
            <Stack.Screen name='AddDeck' component={AddDeck} options={{title:'Add Deck'}}/>
          </Stack.Navigator>
        </NavigationContainer>
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
