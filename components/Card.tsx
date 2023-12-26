import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const placeholder = require('../assets/images/placeholderImage.png');

class Card extends React.PureComponent {
  render() {
    return (
      <View>
        <TouchableOpacity style={{marginRight: 15}}>
          <Image
            style={{width: 130, height: 180, borderRadius: 10}}
            resizeMode="cover"
            source={this.props.image ? {uri: this.props.image} : placeholder}
          />

          <Text style={styles.text}>Hallo Word</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: 'black',
  },
});

export default Card;
