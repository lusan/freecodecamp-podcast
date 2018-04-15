import React from 'react'

import {
  View,
  Text
} from 'react-native'


const Title = (props) => {
  console.log(props)
  return (
    <View>
      <Text style={[props.style[0], {"color": "#337ab7"}]}>
      Ep. 25 - I'm 56 and learning to code. Here's an epic beat-down of my critical inner self.
      </Text>
    </View>
  )
}


export default Title