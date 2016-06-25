'use strict';
 
import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native'   

 
var styles = StyleSheet.create({
    description: {
        fontSize: 28,
        backgroundColor: 'grey',
        borderRadius: 5
    }
});
 
class ResetButton extends Component {
    render() {
        return (
          <TouchableHighlight onPress={this.props.onReset}>
  	        <Text style={styles.description} >
          	  Reset Game
  	        </Text>
         </TouchableHighlight>
        );
    }
}
 
module.exports = ResetButton;