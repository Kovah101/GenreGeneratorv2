/* 
Styles for all components
*/

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
//import {observer} from 'mobx-react';
import {observer} from 'mobx-react/native';

var styles = StyleSheet.create({
	container: {
		backgroundColor: '#f5f5f5',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20
	},

	title: {
		backgroundColor: '#FF4635',
		//flex: 1,
		fontSize: 30,
		borderRadius: 30,
		borderColor:'rgb(209,70,53)',
		padding: 10,
		//justifyContent: 'center',
		//alignItems: 'center',

		fontWeight: 'bold',
		textAlign: 'center',
		margin: 20

	},


	h2: {
		backgroundColor: '#f5f5f5',
		flex: 2,
		color: 'teal',
		fontSize:25,
		padding: 10,
		borderColor: 'black'
	},


	genreContainer: {
		backgroundColor: '#76DFFD',
		flex:2,
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderColor: '#FF4635',
		borderRadius: 20

	},

	genreText: {
		fontSize: 25,
		padding: 30

	},

	generateButton: {
		backgroundColor: 'teal',
		//flex: 1,
		fontSize: 30,
		borderRadius: 30,
		borderColor:'rgb(209,70,53)',
		padding: 10,
		//justifyContent: 'center',
		//alignItems: 'center',

		fontWeight: 'bold',
		textAlign: 'center',
		margin: 20
	}

});

module.exports = styles;