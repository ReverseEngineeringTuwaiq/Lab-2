// Profile.js
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Make sure to install this package

const Profile = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./random.jpg')} // Replace with your image path
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Abdulrahim Alshammari</Text>
        <Text style={styles.userEmail}>xabd.sss@gmail.com</Text>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, { borderRightColor: '#dddddd', borderRightWidth: 1 }]}>
          <Text style={styles.infoTitle}>$99999999999</Text>
          <Text style={styles.infoSubTitle}>Wallet</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>309</Text>
          <Text style={styles.infoSubTitle}>Orders</Text>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="heart-outline" color="#000" size={25}/>
          <Text style={styles.menuItemText}>Your Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="credit-card" color="#000" size={25}/>
          <Text style={styles.menuItemText}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="share-outline" color="#000" size={25}/>
          <Text style={styles.menuItemText}>Tell Your Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="account-check-outline" color="#000" size={25}/>
          <Text style={styles.menuItemText}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="cog-outline" color="#000" size={25}/>
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
</View>
        <View style={styles.calculatorWrapper}>
        <TouchableOpacity
          style={styles.chip}
          onPress={() => navigation.navigate('DiscountCalculator')}
        >
          <Text style={styles.chipText}>Discount Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.chip}
          onPress={() => navigation.navigate('VatCalc')}
        >
          <Text style={styles.chipText}>VAT Calculator</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 20,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 2,
    color: '#FFD700',
  },
  userEmail: {
    color: '#666',
    marginBottom: 20,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  infoSubTitle: {
    fontSize: 14,
    color: '#666',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 16,
    lineHeight: 26,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', // Add an overlay to improve text visibility
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  calculatorWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  chip: {
    backgroundColor: '#000', // Choose a color that matches your theme
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    elevation: 3, // This adds a shadow on Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  chipText: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Profile;
