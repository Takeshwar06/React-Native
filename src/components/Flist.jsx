import { View, Text, ScrollView, SafeAreaView,FlatList } from 'react-native'
import React from 'react'

export default function Flist() {
    const data = [
        { name: "tiger", age: 21 },
        { name: "amit", age: 17 },
        { name: "bhola", age: 20 },
        { name: "puran", age: 20 },
        { name: "dushyant", age: 21 },
        { name: "tiger", age: 21 },
      ]
  return (
   <>
    <SafeAreaView style={{height:50,paddingHorizontal:10}}>
           <Text style={{fontSize:21,textAlign:"center"}}>Student Information-FlatList</Text>
           <View style={{height:2,backgroundColor:"black"}}></View>
    </SafeAreaView>
   <View style={{paddingBottom:50}}>
     <FlatList
      data={data}
      keyExtractor={(item)=>item.name}
      renderItem={({item})=><Text style={{
        fontSize:30,height:150,borderWidth:2,borderColor:"black",margin:10,textAlign:"center"
      }} >{item.name}: {item.age}</Text>}
     />
   </View>
   </>
  )
}