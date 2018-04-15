import React from 'react'
import {
  View, 
  Text,
  StyleSheet
} from 'react-native'

const Header = () => (
  <View style={styles.header}>
    <Text>Header</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    position: 'absolute',
    zIndex: 999,
    backgroundColor: '#ffad26',
    shadowColor: 'blue',
    shadowRadius: 10,
    shadowOpacity: 1,
    top: 0,
    left: 0,
    // boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
  }
});

export default Header