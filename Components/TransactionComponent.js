import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListComponent from './TransactionListComponent';
import TransactionDetailsComponent from './TransactionDetailsComponent';

const Stack = createStackNavigator();

const TransactionComponent = () => {
  return (
    <Stack.Navigator
      initialRouteName="TransactionsList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007bff', 
          borderBottomWidth: 0, 
          elevation: 0, 
        },
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}
    >
      <Stack.Screen
        name="TransactionsList"
        component={TransactionListComponent}
        options={{ title: 'Transactions' }} 
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetailsComponent}
        options={{ title: 'Transaction Details' }} 
      />
    </Stack.Navigator>
  );
};

export default TransactionComponent;
