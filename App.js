import React, { Component } from 'react';
import { View } from 'react-native';

import { Header } from './src/components/common/index'

class App extends Component {
  render() {
    return (
      <View>
        <Header title="Product Category" />
      </View>
    );
  }
}

export default App;