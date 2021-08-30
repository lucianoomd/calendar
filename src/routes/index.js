import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import Home from '../screens/Home';
import Colors from '../utils/Colors';
import EventDetails from '../screens/EventDetails';
import IconButton from '../components/IconButton';

const Stack = createStackNavigator();

const Routes = () => (
	<Provider store={store}>
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: { backgroundColor: Colors.HEADER_DEFAULT },
					headerTintColor: Colors.WHITE,
				}}
			>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name='EventDetails'
					component={EventDetails}
					options={({route}) => ({
						title: route.params.title,
						headerRight: () => route.params?.disabled === false && <IconButton icon='delete' onPress={route.params?.onPressHeaderRight} color={Colors.RED} />,
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	</Provider>

);

export default Routes;
