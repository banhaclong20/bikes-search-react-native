import React from 'react';
import { Text, View, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const Panel = props => {
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: props.list.picture.large }}
          />
        </View>
      </CardSection>
      <CardSection>
        <Text>{props.list.name.first.toUpperCase()}</Text>
      </CardSection>
      <CardSection>
        <Text>Phone: {props.list.cell}</Text>
      </CardSection>
    </Card> 
  ); 
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 200,
    width: 330
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  list: {
    flex: 1,
    flexDirection: "row"
  }
};

export default Panel;