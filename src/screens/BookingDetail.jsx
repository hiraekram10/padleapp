
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
// import Logo from '../assets/logo1.png';

const BookingDetail = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      {/* <Image
  source={{ uri: '../assets/logo1.png' }}
  style={{ width: 100, height: 40 }}
/> */}

      </View>

      <ScrollView>
        {/* Image Section */}
        <Image
          source={{ uri: "https://tse3.mm.bing.net/th?id=OIP.eDROArWYkpOv2d6EVBAW8gHaFj&pid=Api&P=0&h=220"}} // Replace with actual image URL
          style={styles.image}
        />

        {/* Details Section */}
        <View style={styles.details}>
          <Text style={styles.title}>Booking Details</Text>
          <Text style={styles.subtitle}>Padel Pulse</Text>

          {/* Details List */}
          <View style={styles.detailItem}>
            <Text style={styles.icon}>^^</Text>
            <Text style={styles.detailText}>Padel</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.icon}>--</Text>
            <Text style={styles.detailText}>Sat 30 - 09:00 AM to 10:00 AM</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.icon}>$</Text>
            <Text style={styles.detailText}>4500.00 Rs</Text>
          </View>
        </View>

      
        <View style={styles.summary}>
          <Text style={styles.summaryLabel}>Booking</Text>
          <Text style={styles.summaryPrice}>+4500.00 Rs</Text>
        </View>

        {/* Book Button */}
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>BOOK</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    backgroundColor: "#000",
    padding: 16,
  },
  logo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  details: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: -10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    marginVertical: 8,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  icon: {
    fontSize: 16,
    marginRight: 8,
  },
  detailText: {
    fontSize: 14,
    color: "#555",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  summaryLabel: {
    fontSize: 16,
    color: "#555",
  },
  summaryPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  bookButton: {
    backgroundColor: "#000",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
    borderRadius: 8,
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default BookingDetail;
