import React from 'react'

import {
  View,
  StyleSheet,
  Platform
} from 'react-native'

import Title from './Title'
import Description from './Description'

const Article = (props) => {
  const {style, ...rest} = props;
  
  return (
    <View style={styles.card}>
      <View style={styles.cardTitle}>
        <Title 
          style={[styles.title, style]}
        />
      </View>
      <View style={styles.cardBody}>
        <Description 
          style={[styles.body, style]}
        />
      </View>
    </View>
  )
}

if(Platform.OS === 'web') {
  var styles = StyleSheet.create({
    card: {
      "color": "rgba(0, 0, 0, 0.87)",
      "backgroundColor": "rgb(255, 255, 255)",
      "transition": "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
      "boxSizing": "border-box",
      "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)",
      "boxShadow": "rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px",
      "borderRadius": "2px",
      "marginBottom": 10,
      "padding": 5
    },
    cardTitle: {
      "color": "#337ab7",
      "padding": "10px"
    },
    cardBody: {
      "padding": "10px"
    },
    title: {
      "fontSize": "24px",
      "fontWeight": "500"
    },
    body: {
      "fontSize": "14px",
    }
  })
} else {
  var styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 3,
      shadowOpacity: 0.24,
      borderRadius: 3,
      padding: 5,
      marginBottom: 10
    },
    cardTitle: {
      "padding": 10
    },
    cardBody: {
      "padding": 10
    },
    title: {
      "fontSize": 24,
      "fontWeight": "500"
    },
  })
}

export default Article