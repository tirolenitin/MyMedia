import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // or 'expo-linear-gradient' if using Expo

const Splash = ({navigation}) => {
  const text = 'MEDIA STORAGE';
  const animatedValues = useRef(
    [...Array(text.length)].map(() => new Animated.Value(0)),
  ).current;

  useEffect(() => {
    const animations = animatedValues.map((animatedValue, index) => {
      return Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        delay: index * 100, // Stagger the animations
        useNativeDriver: true,
      });
    });

    Animated.stagger(100, animations).start(() => {
      // Navigate to Login screen after all animations are complete
      setTimeout(() => {
        navigation.replace('Login');
      }, 1000);
    });
  }, [animatedValues, navigation]);

  const renderAnimatedText = text => {
    return text.split('').map((char, index) => {
      const translateY = animatedValues[index].interpolate({
        inputRange: [0, 1],
        outputRange: [index % 2 === 0 ? -20 : 20, 0], // Alternate up and down
      });

      const color = animatedValues[index].interpolate({
        inputRange: [0, 1],
        outputRange: ['#ff0000', '#0000ff'], // Red to blue
      });

      const opacity = animatedValues[index].interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      });

      return (
        <Animated.Text
          key={`${char}-${index}`}
          style={[
            styles.animatedText,
            {transform: [{translateY}], color, opacity},
          ]}>
          {char}
        </Animated.Text>
      );
    });
  };

  return (
    <LinearGradient
      colors={['#FF5733', '#FFBD33', '#FF5733']}
      style={styles.container}>
      <View style={styles.textContainer}>{renderAnimatedText(text)}</View>
      <Text style={styles.subtitle}>
        The best place to store and capture your moments
      </Text>
    </LinearGradient>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
  },
  animatedText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
