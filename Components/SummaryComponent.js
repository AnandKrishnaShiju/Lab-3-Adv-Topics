import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TransactionsContext } from './TransactionContainer';

const SummaryComponent = () => {
  const { transactionsData } = useContext(TransactionsContext);

  if (!transactionsData || !Array.isArray(transactionsData) || transactionsData.length === 0) {
    return <Text style={styles.errorText}>No transactions data available.</Text>;
  }

 
  const totalTransactions = transactionsData.length;
  const amounts = transactionsData.map(t => parseFloat(t.amount.replace('$', '')));
  const highestAmount = Math.max(...amounts);
  const lowestAmount = Math.min(...amounts);
  const totalAmount = amounts.reduce((acc, curr) => acc + curr, 0);

  const highestTransaction = transactionsData.find(t => parseFloat(t.amount.replace('$', '')) === highestAmount);
  const lowestTransaction = transactionsData.find(t => parseFloat(t.amount.replace('$', '')) === lowestAmount);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <View style={styles.line} />
      <View style={styles.item}>
        <Text style={styles.itemText}>Transactions</Text>
        <Text style={styles.amountText}>{totalTransactions}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Balance</Text>
        <Text style={styles.amountText}>${totalAmount.toFixed(2)}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Highest Spending</Text>
        <View style={styles.subItem}>
          <Text style={styles.subItemText}>{highestTransaction.name}</Text>
          <Text style={styles.amountText}>{highestTransaction.amount}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemText}>Lowest Spending</Text>
        <View style={styles.subItem}>
          <Text style={styles.subItemText}>{lowestTransaction.name}</Text>
          <Text style={styles.amountText}>{lowestTransaction.amount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0', 
    borderRadius: 12,
    margin: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  line: {
    borderBottomWidth: 2,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  item: {
    marginBottom: 12,
  },
  subItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginTop: 6,
  },
  itemText: {
    fontSize: 18,
    color: '#555',
    fontWeight: 'bold',
  },
  subItemText: {
    fontSize: 18,
    color: '#007bff',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  amountText: {
    fontSize: 18,
    color: '#28a745',
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#dc3545', 
    fontStyle: 'italic',
  },
});

export default SummaryComponent;
