// In App.js in a new project

import React from "react";
import { View, Text, Button } from "react-native";
import { 
  createStackNavigator, 
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator } from "react-navigation";
  import Icon from 'react-native-vector-icons/Ionicons';
  /**
 * - AppSwitchNavigator
 *    - WelcomeScreen
 *      - Login Button
 *      - Sign Up Button
 *    - AppDrawerNavigator
 *          - Dashboard - DashboardStackNavigator(needed for header and to change the header based on the                     tab)
 *            - DashboardTabNavigator
 *              - Tab 1 - FeedStack
 *              - Tab 2 - ProfileStack
 *              - Tab 3 - SettingsStack
 *            - Any files you don't want to be a part of the Tab Navigator can go here.
 */
class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
       <Button title = 'Login' onPress = {() => this.props.navigation.navigate('Dashboard')}></Button>
       <Button title = 'Sign Up' onPress = {() => alert('button')}></Button>
      </View>
    );
  }
}
class DashboardScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>DashboardScreen</Text>
      </View>
    );
  }
}
class Feed extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title = 'Detail' onPress = {() => this.props.navigation.navigate('Detail')}></Button>
        <Button title = 'TestDetail' onPress = {() => this.props.navigation.navigate('TestDetail')}></Button>
      </View>
    );
  }
}
class Profile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile</Text>
      </View>
    );
  }
}
class Settings extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Settings</Text>
      </View>
    );
  }
}
class Detail extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Detail</Text>
      </View>
    );
  }
}
class TestDetail extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>TestDetail</Text>
      </View>
    );
  }
}
const FeedStackNavigator = createStackNavigator({
  Feed: {
    screen:Feed,
    navigationOptions:({navigation}) => {
      return {
        headerTitle:'Feed',
        headerLeft: <Icon style = {{paddingLeft:10}}
        onPress = {()=>navigation.openDrawer()}
        name = "md-menu" size = {30} />
      }
    }
  },
  Detail: {
    screen:Detail
  },
  TestDetail: {
    screen:TestDetail
  },
},{
  defaultNavigationOptions:{
    gesturesEnabled:false
  }
})
const ProfileStackNavigator = createStackNavigator({
  Profile: {
    screen:Profile,
    navigationOptions:({navigation}) => {
      return {
        headerTitle:'Profile',
        headerLeft: <Icon style = {{paddingLeft:10}}
        onPress = {()=>navigation.openDrawer()}
        name = "md-menu" size = {30} />
      }
    }
  },
})
const SettingsStackNavigator = createStackNavigator({
  Settings: {
    screen:Settings,
    navigationOptions:({navigation}) => {
      return {
        headerTitle:'Settings',
        headerLeft: <Icon style = {{paddingLeft:10}}
        onPress = {()=>navigation.openDrawer()}
        name = "md-menu" size = {30} />
      }
    }
  },
})
const DashboardTabNavigator = createBottomTabNavigator({
  FeedStackNavigator,
  ProfileStackNavigator,
  SettingsStackNavigator
},{
  navigationOptions:({navigation}) => {
    const { routeName } =navigation.state.routes[navigation.state.index];
    return {
      header:null,
      headerTitle:routeName
    }
  }
})
const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator:DashboardTabNavigator
},{
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft: <Icon style = {{paddingLeft:10}}
      onPress = {()=>navigation.openDrawer()}
      name = "md-menu" size = {30} />
    }
  }
})
const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen:DashboardStackNavigator
  },
  test: {
    screen:DashboardStackNavigator
  }
})
const AppSwitchNavigator = createSwitchNavigator({
  Welcome:{screen:WelcomeScreen},
  Dashboard: {screen:AppDrawerNavigator}
})



const AppContainer = createAppContainer(AppSwitchNavigator)


export default App;