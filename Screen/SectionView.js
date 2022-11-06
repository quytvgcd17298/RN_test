import { View, Text, SafeAreaView, StyleSheet, SectionList, TouchableOpacity } from 'react-native'
import React, { useState } from "react";
import dataTree from "../Components/Data"
import Test from './Test';

 function SectionView () {
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


  return (
  <SafeAreaView style={styles.container}>
    <Text>Title: {dataTree.title}</Text>
    <Text>Data: {dataTree.data.fullname + "-" + dataTree.data.age + "-" + dataTree.data.note}</Text>
    <Text onPress={() => setShow(!show)}>Children:</Text>
    {show && dataTree?.children?.map((item, index) => {
      return (
        <View style={{marginLeft: 30}} key={index}>
        <Text>-{item.title}</Text>
        <Text>{item.data.fullname + "-" + item.data.age + "-" + item.data.note}</Text>
        <Text onPress={()=> setShow(!show)}>Children:</Text>
        {show && dataTree?.children?.map((item, index)=>{
          return(
          <View key={index}>
          <Text>{item.title}</Text>
          </View>           
          )
        })}
      </View>
      )
    })}
  </SafeAreaView>
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
export default SectionView;
