import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const TransactionsContext = createContext();

export const TransactionContainer = ({ children }) => {
  const [transactionsData, setTransactionsData] = useState([
    { id: 1, name: 'Ford Mustang', amount: '$700', date: '2024-03-25', address: '845 Oxford St' },
    { id: 2, name: 'Toyota Corolla', amount: '$450', date: '2024-03-24', address: '1176 straw St' },
    { id: 3, name: 'Honda Civic', amount: '$900', date: '2024-03-20', address: '369 Tesla St' },
    { id: 4, name: 'Chevrolet Camaro', amount: '$550', date: '2024-03-19', address: '333 halvil St' },
    { id: 5, name: 'BMW X5', amount: '$300', date: '2024-03-18', address: '888 Mario St' },
  ]);

  return (
    <TransactionsContext.Provider value={{ transactionsData, setTransactionsData }}>
      {children}
    </TransactionsContext.Provider>
  );
};

const TransactionListComponent = () => {
  const { transactionsData } = useContext(TransactionsContext);

  return (
    <View style={styles.container}>
      {transactionsData.map(transaction => (
        <View key={transaction.id} style={styles.transaction}>
          <View>
            <Text style={styles.transactionName}>{transaction.name}</Text>
            <Text style={styles.transactionAddress}>{transaction.address}</Text>
          </View>
          <Text style={styles.transactionAmount}>{transaction.amount}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#f0f0f0', 
    padding: 12,
    borderRadius: 8,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', 
  },
  transactionAddress: {
    fontSize: 14,
    color: '#666',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff', 
  },
});

export default TransactionListComponent;
