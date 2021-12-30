
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { connect } from 'react-redux';
import { ProfileIcon,HomeIcon } from '../assets';
import { Detail,Home,Login,Profile,Register } from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return <HomeIcon active={focused} />;
          } else if (route.name === 'Profile') {
            return <ProfileIcon active={focused} />;
          }
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const Router = ({auth}) => {
  return (
    <>
      {auth.authenticated ? (
        <Stack.Navigator initialRouteName="MainApp">
          <Stack.Screen
            name="MainApp"
            component={MainApp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{headerShown: false}}
          />
       
          
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(Router);

