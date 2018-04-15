import React from 'react'
import Article from './article'

import {View} from 'react-native'

const blog = [
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
]

const Articles = (props) => (
  <View>
    {blog.map((value, index) => (
      <Article key={index} />
    ))}
  </View>
)

export default Articles