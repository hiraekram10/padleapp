


import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';


const ProductList= () => {
  const products = [
    { id: '1', name: 'Pepsi', price: 3000, image: 'https://images.unsplash.com/photo-1612774837642-ceebff216859?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGp1aWNlc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: '2', name: 'Pepsi ', price: 1500, image: 'https://images.unsplash.com/photo-1612774837642-ceebff216859?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGp1aWNlc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: '3', name: 'Pepsi', price: 300, image: 'https://images.unsplash.com/photo-1612774837642-ceebff216859?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGp1aWNlc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: '4', name: 'Pepsi', price: 300, image: 'https://images.unsplash.com/photo-1612774837642-ceebff216859?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGp1aWNlc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: '5', name: 'Pepsi', price: 300, image: 'https://images.unsplash.com/photo-1612774837642-ceebff216859?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGp1aWNlc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: '5', name: 'Pepsi', price: 0, image: 'https://images.unsplash.com/photo-1612774837642-ceebff216859?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGp1aWNlc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: '5', name: 'Pepsi', price: 1500, image: 'https://images.unsplash.com/photo-1612774837642-ceebff216859?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGp1aWNlc3xlbnwwfHwwfHx8MA%3D%3D' },
];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price} Rs</Text>
      </View>
      <Text>cart</Text>
      {/* <TouchableOpacity>

        <Icon name="cart-outline" size={24} color="#000" />
      </TouchableOpacity> */}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Icon name="chevron-back" size={24} color="#000" />
        <Text style={styles.headerTitle}>SMASH X</Text>
        <Icon name="people-outline" size={24} color="#000" /> */}
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>CONTINUE</Text>
      </TouchableOpacity>
      {/* <View style={styles.footer}>
        <Icon name="home-outline" size={24} color="#000" />
        <Icon name="calendar-outline" size={24} color="#000" />
        <Icon name="person-outline" size={24} color="#000" />
        <Icon name="heart-outline" size={24} color="#000" />
        <Icon name="trophy-outline" size={24} color="#000" />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#aaaa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 9,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
  },
  continueButton: {
    backgroundColor: '#000',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});

export default ProductList;
