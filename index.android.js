/**
First App testing linking files and changing props between siblings and parents
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainOriginal from './application/components/mainOriginal';

export default class genreGenerator extends Component {
  render() {
    return (
      <MainOriginal/>
    );
  }
}



AppRegistry.registerComponent('genreGenerator', () => genreGenerator);
