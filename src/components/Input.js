import React from 'react';
import { Text, View } from 'react-native';

const Input = ({ type, id, value, label }) => 
  <View>
    <label>{label}</label>
    <input type={type} name={id} id={id} value={value} /> 
  </View>  

export default Input;