import { createStackNavigator,createAppContainer } from 'react-navigation';
import Login from './Login';
import Dashboard from './Dashboard';
import CampaignForm from './CampaignForm';
import BankLogin from './BankLogin';
const AppNavigator = createStackNavigator({
    Login: { screen: Login },
    Dashboard: { screen: Dashboard },
    CampaignForm: { screen: CampaignForm },
    BankLogin : {screen:BankLogin}
}, 
    {
        initialRouteName: 'Login',
    });
  
  export default createAppContainer(AppNavigator) ;