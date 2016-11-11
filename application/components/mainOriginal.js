/* 
Main file, renders screen and other components
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import 
	GenreSelector
from './genreSelector';
import GenerateButton from './generateButton';
import styles from '../styles/styles';
 import{
 	genre1,
 	genre2,
 	genre3
} from './genres.js';


var MainOriginal = React.createClass ({
	getInitialState() {
		return {
		 chosenGenres: [" "," "," "],
		};
	},

	//used to check Generate button is working
	changeRandoms(newGenres) { 
		this.setState({
			chosenGenres : newGenres 
		});
		console.log('mainOriginal has the genres!');
		console.log(this.state.chosenGenres);
	},

	render(){
		return (
	<View style={styles.container}>
		<Text style= {styles.title}>Genre Generator</Text>
		<Text style={styles.h2}>I am listening to</Text>
		<View style={styles.genreContainer}>
 			<GenreSelector genres={this.state.chosenGenres}/>
 					
 		</View>
		<Text style={styles.h2}>You filthy casual</Text>
		<GenerateButton onPress={this.changeRandoms}/>
	</View>
		);
	}
});

module.exports = MainOriginal;
