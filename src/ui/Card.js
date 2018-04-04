import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Button } from 'react-native';

import data from '../../data.json';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  componentDidMount() {
    fetch(`${data}`)
    .then(res => res.json())
    .then(response => this.setState({
      data: response
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(bikes) => {
            const item = bikes.item;
            return (
              <View style={styles.card}>
               
               <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>

                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View>
                  {item.isRumbleOnBike && 
                  <Text style={styles.photoComingSoon}>Photo is coming soon</Text>
                }</View>
                <View style={styles.cardFooter}>
                  <View style={styles.dataContainer}>
                    <View style={styles.dataSection}>
                      <TouchableOpacity style={styles.dataButton}>
                        <Text style={styles.dataLabel}>{item.category}</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.dataSection}>
                      <TouchableOpacity style={styles.dataButton}>
                        <Text style={styles.dataLabel}>{`${item.mileage} miles`}</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.dataSection}>
                      <TouchableOpacity style={styles.dataButton}>
                        <Text style={styles.dataLabel}>{item.status}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:0,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white"
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  title:{
    fontSize:16,
    flex:1,
  },
  photoComingSoon: {
    color: '#FFF', 
    backgroundColor: '#555', 
    textAlign: 'center', 
    padding: 5
  },
  icon: {
    width:25,
    height:25,
  },
  dataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  dataSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  datalabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  dataButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
}); 

export default Card;