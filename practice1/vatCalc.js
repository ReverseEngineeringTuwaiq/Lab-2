// vatCalc.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

const VatCalc = () => {
  const [inputPrice, setInputPrice] = useState('');
  const [vatAmount, setVatAmount] = useState('0.00');
  const [totalPrice, setTotalPrice] = useState('0.00');

  const calculateVAT = () => {
    const price = parseFloat(inputPrice);
    if (!isNaN(price)) {
      const calculatedVAT = price * 0.15;
      setVatAmount(calculatedVAT.toFixed(2));
      setTotalPrice((price + calculatedVAT).toFixed(2));
    } else {
      setVatAmount('0.00');
      setTotalPrice('0.00');
    }
    Keyboard.dismiss();
  };

  function dismissKeyboard() {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>PRICE</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter price"
            placeholderTextColor="#999"
            value={inputPrice}
            onChangeText={setInputPrice}
            returnKeyType="done"
            onSubmitEditing={calculateVAT}
          />
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.label}>VAT AMOUNT (15%)</Text>
          <Text style={styles.result}>{vatAmount} SAR</Text>

          <Text style={styles.label}>TOTAL PRICE</Text>
          <Text style={styles.result}>{totalPrice} SAR</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 30,
  },
  resultContainer: {
    marginBottom: 30,
  },
  label: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    color: 'white',
    fontSize: 48,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  result: {
    color: '#FFD700', // Gold color for result
    fontSize: 48,
    textAlign: 'center',
  },
});

export default VatCalc;
