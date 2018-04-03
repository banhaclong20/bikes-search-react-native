import React from 'react';
import { ScrollView, ActivityIndicator, Text, View } from 'react-native';

import Panel from './Panel';

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    return fetch(`https://randomuser.me/api?results=10`)
    .then(res => res.json())
    .then(dataJson => {
      this.setState({
        dataSource: dataJson.results,
        isLoading: false
      });
    })
  }

  renderList() {
    return this.state.dataSource.map(list => 
      <Panel key={list.id.name} list={list} /> 
    );
  }

  render() {

    console.log(this.state.dataSource)

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>  
      )
    }

    return (
      <ScrollView>
        {this.renderList()}
      </ScrollView>  
    );
  }
}

export default List;