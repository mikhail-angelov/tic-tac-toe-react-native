'use strict'
 
import React from 'react'

import {
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native'   

const cellStyle = {
  width: 80,
  height: 80,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: 'blue',
}

const signStyle = {
  fontSize: 38,
}


const Cell = ({onclick, point, value}) => (
          <TouchableWithoutFeedback onPress={()=>onclick(point)}>
          <View style={cellStyle} >
            <Text style={signStyle}>
              {value}
            </Text>
           </View>
         </TouchableWithoutFeedback>
        )
 
module.exports = Cell