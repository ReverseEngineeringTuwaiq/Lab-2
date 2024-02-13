import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

const DiscountCalculator = () => {
  const [startingPrice, setStartingPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [finalPrice, setFinalPrice] = useState('0.00');

  function calculateFinalPrice(price, discount) {
    const numericPrice = parseFloat(price);
    const numericDiscount = parseFloat(discount);
    if (!isNaN(numericPrice) && !isNaN(numericDiscount)) {
      return (numericPrice - (numericPrice * numericDiscount) / 100).toFixed(2);
    }
    return '0.00';
  }

  function handleStartingPriceChange(priceValue) {
    setStartingPrice(priceValue);
    const finalPriceValue = calculateFinalPrice(priceValue, discount);
    setFinalPrice(finalPriceValue);
  }

  function handleDiscountChange(discountValue) {
    setDiscount(discountValue);
    const finalPriceValue = calculateFinalPrice(startingPrice, discountValue);
    setFinalPrice(finalPriceValue);
  }

  function dismissKeyboard() {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>STARTING PRICE</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder=""
            placeholderTextColor="#999"
            value={startingPrice}
            onChangeText={handleStartingPriceChange}
            returnKeyType="done"
            onSubmitEditing={dismissKeyboard}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>DISCOUNT</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder=""
            placeholderTextColor="#999"
            value={discount}
            onChangeText={handleDiscountChange}
            returnKeyType="done"
            onSubmitEditing={dismissKeyboard}
          />
          <Text style={styles.percent}>%</Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.label}>FINAL PRICE</Text>
          <Text style={styles.finalPrice}>{`${finalPrice} SAR`}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    width: 100,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    textAlign: 'center',
    marginRight: 10,
  },
  percent: {
    color: 'white',
    fontSize: 48,
  },
  finalPrice: {
    color: '#FFD700', // Gold color for final price
    fontSize: 48,
    textAlign: 'center',
  },
});

export default DiscountCalculator;
