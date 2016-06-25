/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
 */
import React from 'react'
import TickTackToe from './components/tickTackToe'

import {
	AppRegistry
} from 'react-native'

const Root = () => (
	<TickTackToe />
)

AppRegistry.registerComponent('App', () => Root)
