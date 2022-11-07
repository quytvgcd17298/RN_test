import { View, Text, SafeAreaView, StyleSheet, SectionList, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from "react";
import myData from '../Components/MyData';
 function FlatView () {
  const [isVisible, setIsVisible] = useState(false);
  const [show, setShow] = useState(false)
  const expand = () => {
    setIsVisible(!isVisible);
  };

/*   const MapData =(item, index) => (      
      <View key={index}>
      <Text>{item.title}</Text>
      <Text>{item.data.fullname + "-" + item.data.age + "-" + item.data.note}</Text>
    </View>
  ) */

  const renderItem = () => {
    return(
      <View>
        {myData.map((item, index)=>{
      return(
        <View key={index}>
        <Text>ID: {item.id}</Text>
        <Text>Full name: {item.Fname}</Text>
        <Text>Data: {item.data.role}</Text>
        <Text>Data: {item.data.note}</Text>
        <Text onPress={() => setShow(!show)}>Children:</Text>
        {show && item.children.map((children, index) => {
      return (
        <View style={{marginLeft: 30}} key={index}>
        <Text>{children.id}</Text>
        <Text>{children.Fname}</Text>
        <Text>{children.data.role}</Text>
        <Text>{children.data.note}</Text>
      </View>
      )
    })} 
      </View>
      )
    })}
      </View>
    )
  }

  return (

    <View>
      <FlatList
      data={myData}
      renderItem={renderItem}
      keyExtractor={item => item}
      ></FlatList>
    </View>

/*   <SafeAreaView style={styles.container}>
    {myData.map((item, index)=>{
      return(
        <View key={index}>
        <Text>ID: {item.id}</Text>
        <Text>Full name: {item.Fname}</Text>
        <Text>Data: {item.data.role}</Text>
        <Text>Data: {item.data.note}</Text>
        <Text onPress={() => setShow(!show)}>Children:</Text>
        {show && item.children.map((item, index) => {
      return (
        <View style={{marginLeft: 30}} key={index}>
        <Text>{item.id}</Text>
        <Text>{item.Fname}</Text>
        <Text>{item.data.role}</Text>
        <Text>{item.data.note}</Text>
      </View>
      )
    })} 
      </View>
      )
    })}
  </SafeAreaView> */
  )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent:'center',   
},
item: {
  backgroundColor: "#f9c2ff",
  padding: 20,
  marginVertical: 8
},
header: {
  fontSize: 32,
  backgroundColor: "#fff"
},
title: {
  fontSize: 24
}
});
export default FlatView;
