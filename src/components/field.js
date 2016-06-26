'use strict'
 
import React from 'react'

import {
  View,
} from 'react-native' 

import Cell from './cell'  
 
const fieldStyles = {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: 244,
    height: 244,
    borderWidth: 2,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
}
 
const Field = ({model, onclick}) => (
      	    <View style={fieldStyles}>
                {model.map((item, index) => {
                    return (<Cell key={index} 
                        onclick={onclick} 
                        point={index} 
                        value={item} />)
                    })
                }
    	    </View>
        )
 
module.exports = Field