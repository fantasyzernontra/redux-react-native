import React from 'react';
import {View, Button, Text} from 'react-native';

import {connect} from 'react-redux';
import {incrementAction, decrementAction} from './store/actions/count';

const App = ({counter, text, increment, decrement}) => {
  return (
    <View>
      <Text style={{color: 'red', marginTop: 200, textAlign: 'center'}}>
        {counter}
      </Text>
      <Text
        style={{
          color: 'green',
          marginVertical: 20,
          textAlign: 'center',
          fontSize: 36,
        }}>
        {text}
      </Text>
      <Button onPress={() => increment('Has Incremented!')} title="Increase!" />
      <Button onPress={() => decrement('Has Decremented!')} title="Decrease!" />
    </View>
  );
};

// To create a connection between Redux State and UI component
const mapStateProps = state => ({
  counter: state.count.counter,
  text: state.count.text,
});

// To define an avaliable dispatcher on UI component
const mapDispatchToProps = dispatch => ({
  increment: val => dispatch(incrementAction(val)),
  decrement: val => dispatch(decrementAction(val)),
});
const connectComponent = connect(mapStateProps, mapDispatchToProps);
export default connectComponent(App);
