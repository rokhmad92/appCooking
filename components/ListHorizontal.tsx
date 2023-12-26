import React from 'react';
import {FlatList, Text, View} from 'react-native';
// get components
import Card from '../components/Card';

class ListHorizontal extends React.PureComponent {
  render() {
    return (
      <FlatList
        horizontal={true}
        data={this.props.dataImage}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Card image={item.urls.full} />}
      />
    );
  }
}

export default ListHorizontal;
