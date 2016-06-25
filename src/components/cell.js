'use strict';
 
import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native'   

 
var styles = StyleSheet.create({
    description: {
        fontSize: 28,
        backgroundColor: 'white',

    },
    container: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'blue'
    }
});
 
class Cell extends Component {
    render() {
        return (
          <TouchableWithoutFeedback onPress={()=>this.props.onclick(this.props.point)}>
    	    <View style={styles.container} >
  	        <Text style={styles.description} >
          	  {this.props.value}
  	        </Text>
  	       </View>
         </TouchableWithoutFeedback>
        );
    }
}
 
module.exports = Cell;