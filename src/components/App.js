import React, { Component} from 'react'
import {StyleSheet,View,Text, Button, TouchableOpacity} from 'react-native'
import CounterApp from './counterApp'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const initialState = {
  counter:0,
}
const reducer = (state=initialState,action) => {
  switch(action.type){
    case 'INCREASE_COUNTER':
      return {counter:state.counter+1}
    case 'DECREASE_COUNTER':
      return {counter:state.counter-1}
  }
  return state;
}
const store = createStore(reducer);

export default class App extends Component {



  render() {
    return (
      <Provider store={store}> 
          <CounterApp/>
      </Provider>
     
    )
  }
}
const styles = StyleSheet.create({
 container : {
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center'
   
 },
});

