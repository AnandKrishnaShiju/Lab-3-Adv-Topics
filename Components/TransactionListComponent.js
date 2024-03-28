import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TransactionsContext } from './TransactionContainer'; 

const TransactionListComponent = ({ navigation }) => {
  const { transactionsData } = useContext(TransactionsContext); 

  return (
    <View style={styles.container}>
      <FlatList
        data={transactionsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
            <View style={styles.transaction}>
              <Text style={styles.transactionName}>{item.name}</Text>
              <Text style={styles.transactionAmount}>{item.amount}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', 
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff', 
    marginHorizontal: 16, 
    marginBottom: 8, 
    borderRadius: 8, 
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25,
    shadowRadius: 3, 
  },
  transactionName: {
    fontSize: 16,
    color: '#333', 
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff', 
  },
});

export default TransactionListComponent;
