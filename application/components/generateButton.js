
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import styles from '../styles/styles';
import {observable} from 'mobx';
 import{
 	genre1,
 	genre2,
 	genre3
} from './genres.js';

var GenerateButton = React.createClass({
	generateRandoms: function() {
		let randomNumbers = [Math.random(), Math.random(), Math.random()];
		console.log(randomNumbers);

		const size = [genre1.length, genre2.length, genre3.length];
		console.log(size);

		let randomGenres =  [Math.floor(randomNumbers[0] * size[0]), Math.floor(randomNumbers[1] * size[1]), Math.floor(randomNumbers[2] * size[2])];
		console.log(randomGenres);

		let selectedGenres = [genre1[randomGenres[0]], genre2[randomGenres[1]], genre3[randomGenres[2]]];
		console.log(selectedGenres);

		this.props.onPress(selectedGenres);
	},
	
	render: function (){
		return (
			<TouchableHighlight 
			onPress={this.generateRandoms} 
			style={styles.generateButton}>
				<Text style={styles.generateButton}>Generate!</Text>
			</TouchableHighlight>
		);
	}
});

const randomStore = new GenerateButton ();
export default randomStore;
module.exports = GenerateButton; 

