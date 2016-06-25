'use strict';
 
import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  View,
} from 'react-native' 

import Cell from './cell'  
 
var styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: 244,
        height: 244,
        borderWidth: 2,
        borderColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
 
class Field extends Component {

    render() {
        return (
      	    <View style={styles.container}>

                {this.props.model.map((item, index)=>{
                    return (<Cell onclick={this.props.onclick} point={index} value={item} key={index}/>);
                })}

    	    </View>
        );
    }
}
 
module.exports = Field;