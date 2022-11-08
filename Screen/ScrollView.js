import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useCallback } from 'react'
import { useState } from 'react'
import TreeView from 'react-native-final-tree-view'
import myData from '../Components/MyData'
import { AntDesign } from '@expo/vector-icons'; 
import { ListItem } from 'react-native-elements'

export default function Test() {
  function getIndicator(isExpanded, hasChildrenNodes, hasDataNodes) {
    if (!hasChildrenNodes) {
      return (<AntDesign name="minuscircle" size={15} color="black" />)
    } else if (isExpanded) {
      return (<AntDesign name="caretdown" size={15} color="black" />)
    } else {
      return (<AntDesign name="caretright" size={15} color="black" />)
    }
  }
  const [show, setShow] = useState(false)
  const handleClick= useCallback(()=> {
    setShow(!show);
  }, [show, setShow])
  return(
  <ScrollView style={styles.container}>
  <TreeView
  data={myData}
  renderNode={({node, level, isExpanded, hasChildrenNodes}) => {
    return (
      <ScrollView style={{marginBottom:30, borderBottomWidth:1}}>
        <Text
        style={{
          marginLeft: 25 * level,
          fontSize:24
        }}
        >
          {getIndicator(isExpanded, hasChildrenNodes)} ID: {node.id}
        </Text>
        <Text style={{marginLeft: 25 * level}}>Fullname: {node.Fname}</Text>
        <View style={{marginLeft: 25 * level}}>
        <Text onPress={handleClick}>Data</Text>
        {show && (
            <View style={{marginLeft:10}}>
            <Text>- Role: {node.data.role}</Text>
            <Text>- Note: {node.data.note}</Text>
            </View>
        )}
        </View>
      </ScrollView>
    )
  }}
  ></TreeView>
  </ScrollView>
)
}
const styles = StyleSheet.create({
  container:{
    marginTop:40,
    padding:20,
    marginVertical:10
  }
})