import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import PeopleList from '../components/PeopleList';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    axios.get('https://randomuser.me/api/?nat=br&results=30')
      .then(resp => {
        this.setState({peoples: resp.data.results, loading: false});
      }).catch((error) => {
      this.setState({error: true, loading: false});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading
          ? <ActivityIndicator size="large" color="#6ca2f7"/>
          : this.state.error
            ? <Text style={styles.error}>Ops algo deu errado...</Text>
            : <PeopleList
              peoples={this.state.peoples}
              onPressItem={(pageParams) => {
                this.props.navigation.navigate('PeopleDetail', pageParams);
              }}/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    alignSelf: 'center',
  }
});
