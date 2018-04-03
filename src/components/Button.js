import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { btnStyle, txtStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <Text style={txtStyle}>
        {children}
      </Text>  
    </TouchableOpacity>  
  );
};

const styles = {
  btnStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  txtStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;