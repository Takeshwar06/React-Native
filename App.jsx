import React from "react";
import { View, Text, TextInput, ScrollView, SafeAreaView } from "react-native";

export default function App() {
  const data = [
    { name: "tiger", age: 21 },
    { name: "amit", age: 17 },
    { name: "bhola", age: 20 },
    { name: "puran", age: 20 },
    { name: "dushyant", age: 21 },
    { name: "tiger", age: 21 },
  ]
  return (
    <SafeAreaView>
    <ScrollView style={{display:"flex",justifyContent:"center",height:"100%"}}>
      <TextInput style={{fontSize:30}}></TextInput>
      {
        data.map((element, index) => {
          return (
            <Text key={index} style={{ fontSize: 30,backgroundColor:"purple",margin:8,padding:8,textAlign:"center" }}>
              {element.name} - {element.age}
            </Text>
          )
        })
      }
    </ScrollView>
    </SafeAreaView>
  )
}  