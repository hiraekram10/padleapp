import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";

const Profile = () => {
  // Function to handle logout action
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", onPress: () => console.log("Logged out") }, // Replace with actual logout logic
      ],
      { cancelable: true }
    );
  };

  // Function to handle account deletion
  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "This action will permanently delete your account. Are you sure you want to proceed?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => console.log("Account deleted"), // Replace with actual delete logic
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://via.placeholder.com/150", // Replace with the user's profile picture URL
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>User</Text>
        <Text style={styles.profileEmail}>user@gmail.com</Text>
      </View>

      {/* Profile Details Section */}
      <ScrollView>
        <View style={styles.details}>
          <Text style={styles.sectionTitle}>Your Bookings</Text>
          <View style={styles.bookingItem}>
            <Text style={styles.bookingText}>Court: Padel</Text>
            <Text style={styles.bookingText}>Date: Sat 30 - 09:00 AM to 10:00 AM</Text>
            <Text style={styles.bookingText}>Price: 4500.00 Rs</Text>
          </View>

          <View style={styles.bookingItem}>
            <Text style={styles.bookingText}>Court: Tennis</Text>
            <Text style={styles.bookingText}>Date: Sun 1 - 11:00 AM to 12:00 PM</Text>
            <Text style={styles.bookingText}>Price: 7500 Rs</Text>
          </View>

          {/* Add more bookings here */}
        </View>

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>

        {/* Delete Account Button */}
        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
          <Text style={styles.deleteButtonText}>Delete My Account</Text>
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
    alignItems: "center",
    backgroundColor: "#000",
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 16,
    color: "#ccc",
  },
  details: {
    padding: 16,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  bookingItem: {
    backgroundColor: "#f1f1f1",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  bookingText: {
    fontSize: 14,
    color: "#555",
  },
  editButton: {
    backgroundColor: "#000",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
    borderRadius: 8,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#d9534f", // Red color for logout
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#ff5c5c", // Bright red for delete
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    borderRadius: 8,
    marginVertical:12
  },
  deleteButtonText: {
    
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
