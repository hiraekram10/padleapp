// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { NavigationContainer } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const Tab = createBottomTabNavigator();

// // Mock data for the cards
// const cardData = [
//   { id: 1, title: "Book a court", subtitle: "If you already know who you are playing with", icon: "search" },
//   { id: 2, title: "Play an open match", subtitle: "If you are looking for players at your level", icon: "tennisball" },
//   { id: 3, title: "Classes", subtitle: "Learn from professionals", icon: "school" },
//   { id: 4, title: "Competitions", subtitle: "Compete and level up", icon: "shield" }
// ];

// // Home screen
// function home() {
//   return (
//     <View style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <Text style={styles.greeting}>Hi Ashhad 👋</Text>
//         <TouchableOpacity>
//           <Icon name="notifications-outline" size={24} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       {/* Promotion Section */}
//       <View style={styles.promotion}>
//         <Text style={styles.promotionTitle}>🔵 GET ONE STEP AHEAD</Text>
//         <Text style={styles.promotionSubtitle}>
//           Get notified for available courts, grant your matches more visibility and discover your advanced statistics
//         </Text>
//       </View>

//       {/* Cards Section */}
//       <Text style={styles.sectionTitle}>Play your perfect match</Text>
//       <FlatList
//         data={cardData}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={2}
//         contentContainerStyle={styles.cardContainer}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Icon name={item.icon} size={40} color="#000" />
//             <Text style={styles.cardTitle}>{item.title}</Text>
//             <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// // Profile Screen (Placeholder)
// function ProfileScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ color, size }) => {
//             let iconName;
//             if (route.name === 'Home') {
//               iconName = 'home';
//             } else if (route.name === 'Profile') {
//               iconName = 'person';
//             }
//             return <Icon name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: '#000',
//           tabBarInactiveTintColor: 'gray',
//           tabBarStyle: { backgroundColor: '#fff' }
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//     paddingHorizontal: 16
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 40,
//     paddingHorizontal: 8
//   },
//   greeting: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#000'
//   },
//   promotion: {
//     backgroundColor: '#dce9ff',
//     padding: 16,
//     borderRadius: 8,
//     marginTop: 20
//   },
//   promotionTitle: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginBottom: 4
//   },
//   promotionSubtitle: {
//     fontSize: 14,
//     color: '#555'
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 16
//   },
//   cardContainer: {
//     paddingBottom: 16
//   },
//   card: {
//     flex: 1,
//     margin: 8,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 16,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 8,
//     textAlign: 'center'
//   },
//   cardSubtitle: {
//     fontSize: 12,
//     color: '#555',
//     textAlign: 'center',
//     marginTop: 4
//   }
// });


import React from 'react'
import { View, Text,Button} from 'react-native'


const Home = ({navigation}) => {
  
  
  return (
  
  <View>
    <Text>Hi im hira</Text>
    <Button title="go to product list" onPress={()=> navigation.navigate('productlists')}></Button>
  </View>
  )
}

export default Home

