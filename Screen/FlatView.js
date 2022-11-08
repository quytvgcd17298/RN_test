import { View, Text, SafeAreaView, StyleSheet, SectionList, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from "react";
import myData from '../Components/MyData';
 const FlatView = () => {
  const [dataShow, setDataShow] = useState(false)
  const [show, setShow] = useState(false)


/*   const MapData =(item, index) => (      
      <View key={index}>
      <Text>{item.title}</Text>
      <Text>{item.data.fullname + "-" + item.data.age + "-" + item.data.note}</Text>
    </View>
  ) */


  function RenderItem ({item, index}) {
    return(
      <View key={index} style={{borderBottomWidth:1 }}>
      <Text>ID: {item.id}</Text>
      <Text>Fullname: {item.Fname}</Text>
      <TouchableOpacity onPress={()=> setDataShow(!dataShow)}>
        <Text>data</Text>
      </TouchableOpacity>
      {dataShow && item.data?(
        <View>
          <Text>- Role: {item.data.role}</Text>
          <Text>- Note: {item.data.note}</Text>
        <Text onPress={()=>setShow(!show)}>Children</Text>

        </View>
      ):[]}
        {show && item?.children?.map((itemChild, indexChild)=>{
        return (
          <View style={{ marginLeft: 40}} key = {indexChild}>
          <Text>{itemChild.id}</Text>
          <Text>{itemChild.Fname}</Text>
          <Text>Data: </Text>
          <Text>- Role: {itemChild.data.role}</Text>
          <Text>- Note: {itemChild.data.note}</Text>
          <Text onPress={()=>setShow(!show)}>Children</Text>
          {itemChild.children?.map((itemChildren, indexChildren) => {
            return (
              <View style={{ marginLeft: 40}} key={indexChildren}>
          <Text>{itemChildren.id}</Text>
          <Text>{itemChildren.Fname}</Text>
          <Text>Data: </Text>
          <Text>- Role: {itemChildren.data.role}</Text>
          <Text>- Note: {itemChildren.data.note}</Text>
              </View>
            )
          })}
          </View>
        )
      })}
      </View>
  )}

  return (

    <SafeAreaView>
      <FlatList
      style={{
        marginLeft:25,
        paddingVertical:10
      }}
      data={myData}
      renderItem={({item})=> <RenderItem key={item.id} item={item}/>}
      keyExtractor={(item, index)=>item.id + index}
      ></FlatList>
    </SafeAreaView>

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
