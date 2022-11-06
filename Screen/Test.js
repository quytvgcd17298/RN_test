import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'
import TreeView from 'react-native-final-tree-view'
import dataTree from '../Components/Data'

export default function Test() {
  function getIndicator(isExpanded, hasChildrenNodes) {
    if (!hasChildrenNodes) {
      return '-'
    } else if (isExpanded) {
      return '\\/'
    } else {
      return '>'
    }
  }

  return(
  <View>
  <TreeView
  data={dataTree}
  renderNode={({nodes, level, isExpanded, hasChildrenNodes}) => {
    return (
      <View>
        <Text
        style={{
          marginLeft: 25 * level,
        }}
        >
          {getIndicator(isExpanded, hasChildrenNodes)} {nodes.title}
        </Text>
      </View>
    )
  }}
  ></TreeView>
  </View>
)
}