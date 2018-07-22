import { createStackNavigator } from 'react-navigation';
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailsPage from './src/pages/PeopleDetailsPage';
import { captalizeFirstLatter} from './src/utils';

export default createStackNavigator({
  'Main': {
    screen: PeoplePage,
  },
  'PeopleDetail': {
    screen: PeopleDetailsPage,
    navigationOptions: ({navigation}) => {
      const peopleName = captalizeFirstLatter(navigation.state.params.people.name.first);
      return ({
        title: peopleName,
        headerTitleStyle: {
          color: '#fff',
        },
      });
    }
  }
}, {
  navigationOptions: {
    title: 'Pessoas',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5',

    },
    headerTitleStyle: {
      color: '#fff',
      textAlign: 'center',
      flexGrow: 1,
    },
  }
});
