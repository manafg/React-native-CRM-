import { StackNavigator, TabNavigator } from 'react-navigation';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

const Navigation = TabNavigator({
    PeopleList: { screen: PeopleList },
    AddPerson: { screen: AddPerson },
    CompanyList: { screen: CompanyList },
}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#80cbc4',
        swipeEnabled: true,
        showLabel: false,
        style: {
            backgroundColor: '#26a69a',
        },
    },
});

export default Navigation;