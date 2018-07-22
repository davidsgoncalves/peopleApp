import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { captalizeFirstLatter } from '../utils';

const PeopleListItem = (props) => {
  const { people, navigate } = props;
  const { first, last } = people.name;

  return (
    <TouchableOpacity onPress={() => {
      navigate({people});
    }}>
      <View style={styles.line}>
        <Image style={styles.avatar} source={{uri: people.picture.thumbnail}}></Image>
        <Text style={styles.lineText}>{`${captalizeFirstLatter(first)} ${captalizeFirstLatter(last)}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PeopleListItem;

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    flexDirection: 'row',
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 6,
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 15,
    borderRadius: 50,
  },
});
