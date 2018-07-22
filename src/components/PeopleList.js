import React from 'react';
import { FlatList, StyleSheet} from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = (props) => {
  // const elements = props.peoples.map(people => (
  //   <PeopleListItem
  //     key={people.name.first}
  //     people={people}
  //     navigate={props.onPressItem}
  //   />
  // ));

  return (
    <FlatList
      style={styles.container}
      data={props.peoples}
      keyExtractor={item => item.name.first}
      renderItem={({item}) => (
        <PeopleListItem
          people={item}
          navigate={props.onPressItem}
        />
      )}
    />
    //
    // <ScrollView style={styles.container}>
    //   {elements}
    // </ScrollView>
  );
};

export default PeopleList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff',
  },
});
