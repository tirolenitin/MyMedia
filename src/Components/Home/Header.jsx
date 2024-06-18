import {Box, Image, Text} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Header = () => {
  // render
  return (
    <Box borderRadius={10} borderWidth={1} h={100} bg={'black'}>
      <Box borderWidth={1} borderRadius={25} borderColor={'white'} w={20}>
        <Text color={'white'}>Profile</Text>
        <Image alt="profile" source={''} alignItems={'flex-end'} />
      </Box>
    </Box>
  );
};

export default Header;

const styles = StyleSheet.create({});
