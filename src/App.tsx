import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ThemeProvider} from 'styled-components/native';
import theme from './styled/theme';

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{backgroundColor: theme.colors.main}}>
          <StatusBar barStyle={'light-content'} />
        </SafeAreaView>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_bottom',
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />

          {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}> */}
        </Stack.Navigator>
        {/* </ScrollView> */}
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
