// import React, { useState } from 'react';
// import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

// const Home = () => {
//   const [mediaData, setMediaData] = useState([
//     {
//       id: 1,
//       imageUrl: 'https://via.placeholder.com/300',
//     },
//     {
//       id: 2,
//       imageUrl: 'https://via.placeholder.com/300',
//     },
//     {
//       id: 3,
//       imageUrl: 'https://via.placeholder.com/300',
//     },
//     // Add more media items as needed
//   ]);

//   // Function to handle liking a media item
//   const handleLike = (itemId) => {
//     console.log('Like button pressed for item:', itemId);
//   };

//   // Function to handle sharing a media item
//   const handleShare = (itemId) => {
//     console.log('Share button pressed for item:', itemId);
//   };

//   // Function to handle commenting on a media item
//   const handleComment = (itemId) => {
//     console.log('Comment button pressed for item:', itemId);
//   };

//   // Function to handle searching for media content or users
//   const handleSearch = (query) => {
//     console.log('Search query:', query);
//   };

//   // Render media item component
//   const renderMediaItem = ({ item }) => {
//     return (
//       <View style={styles.mediaItem}>
//         <Image source={{ uri: item.imageUrl }} style={styles.mediaImage} />
//         <View style={styles.mediaActions}>
//           <TouchableOpacity onPress={() => handleLike(item.id)}>
//             <Text>Like</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => handleShare(item.id)}>
//             <Text>Share</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => handleComment(item.id)}>
//             <Text>Comment</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.searchInput}
//         placeholder="Search for media content or users"
//         onChangeText={handleSearch}
//       />
//       <FlatList
//         data={mediaData}
//         renderItem={renderMediaItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 10,
//     paddingTop: 20,
//   },
//   searchInput: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   mediaItem: {
//     marginBottom: 20,
//   },
//   mediaImage: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   mediaActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
// });

// export default Home;

// /*
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

// const HomeScreen = () => {
//   // Dummy data for media content
//   const [mediaData, setMediaData] = useState([]);

//   // Fetch media content from API or local storage
//   useEffect(() => {
//     // Mock API call to fetch media content
//     const fetchMediaData = async () => {
//       try {
//         // Replace this with actual API endpoint
//         const response = await fetch('https://api.example.com/media');
//         const data = await response.json();
//         setMediaData(data);
//       } catch (error) {
//         console.error('Error fetching media data:', error);
//       }
//     };

//     fetchMediaData();
//   }, []);

//   // Function to handle liking a media item
//   const handleLike = (itemId) => {
//     // Logic to toggle like status for the item with itemId
//     console.log('Like button pressed for item:', itemId);
//   };

//   // Function to handle sharing a media item
//   const handleShare = (itemId) => {
//     // Logic to share the item with itemId
//     console.log('Share button pressed for item:', itemId);
//   };

//   // Function to handle commenting on a media item
//   const handleComment = (itemId) => {
//     // Logic to navigate to comment screen for the item with itemId
//     console.log('Comment button pressed for item:', itemId);
//   };

//   // Function to handle searching for media content or users
//   const handleSearch = (query) => {
//     // Logic to search for media content or users based on the query
//     console.log('Search query:', query);
//   };

//   // Render media item component
//   const renderMediaItem = ({ item }) => {
//     return (
//       <View style={styles.mediaItem}>
//         <Image source={{ uri: item.imageUrl }} style={styles.mediaImage} />
//         <View style={styles.mediaActions}>
//           <TouchableOpacity onPress={() => handleLike(item.id)}>
//             <Text>Like</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => handleShare(item.id)}>
//             <Text>Share</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => handleComment(item.id)}>
//             <Text>Comment</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.searchInput}
//         placeholder="Search for media content or users"
//         onChangeText={handleSearch}
//       />
//       <FlatList
//         data={mediaData}
//         renderItem={renderMediaItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 10,
//     paddingTop: 20,
//   },
//   searchInput: {
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   mediaItem: {
//     marginBottom: 20,
//   },
//   mediaImage: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'cover',
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   mediaActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
// });

// export default HomeScreen;

// */
import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Photos from './Photos';
import Videos from './Videos';
import Profile from './Profile';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    
    <Tab.Navigator>
      <Tab.Screen name="Photos" component={Photos} />
      <Tab.Screen name="Videos" component={Videos} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    
  );
};

export default Home;

const styles = StyleSheet.create({});
