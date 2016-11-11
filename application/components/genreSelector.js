/*
takes array of random numbers from generateButton
reads genre array sizes and scales RN to fit
Selects genre from each array and displays as prop
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
 import{
 	genre1,
 	genre2,
 	genre3
} from './genres.js';
import styles from '../styles/styles';
import {observer, computed} from 'mobx-react/native';
import randomStore from './generateButton';

@observer 
class GenreSelector extends Component {

	render() {
		var genres = this.props.genres;
			
		return (
			<View style={styles.genreContainer}>
				<Text style={styles.genreText}>{genres[0]} </Text>
				<Text style={styles.genreText}>{genres[1]} </Text>
				<Text style={styles.genreText}>{genres[2]} </Text>
			</View>
		);
	}
}


module.exports = GenreSelector;


