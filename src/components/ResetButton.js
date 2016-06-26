'use strict'
 
import React from 'react'

import {
  Text,
  TouchableHighlight,
} from 'react-native'   

 
const buttonStyle = {
    fontSize: 28,
    backgroundColor: 'grey',
    borderRadius: 5,
}
 
const ResetButton = ({onReset}) => (
  <TouchableHighlight onPress={onReset}>
    <Text style={buttonStyle} >
  	  Reset Game
    </Text>
 </TouchableHighlight>
)
 
module.exports = ResetButton