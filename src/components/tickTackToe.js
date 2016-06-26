'use strict';
  
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import Field from './field'
import ResetButton from './ResetButton'

const appStyles =  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}

class TickTackToe extends Component {
 
    constructor(props) {
        super(props);
        this.game = this.props.game;

        this.state = this.game.getModel();
    }

    onClick(index){
        if(!this.state.status){
            this.game.makeTurn(index);
            this.setState(this.game.getModel());
        }
    }

    onReset(){
        this.game.reset();
        this.setState(this.game.getModel());
    }
 
    render() {
        let label = null;
         if(this.state.status){
            label = (<Text>{this.state.status}</Text>)
        }
        return (
            <View style={appStyles}>
                {label}
                <Field onclick={this.onClick.bind(this)} model={this.state.model}/>
                <ResetButton onReset={this.onReset.bind(this)} />
            </View>
        )
    }
}

module.exports = TickTackToe;
 