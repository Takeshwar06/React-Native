import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, SafeAreaView, Modal, Pressable, Button } from "react-native";
import ScrollV from "./src/components/ScrollV";
import Flist from "./src/components/Flist";
import SecList from "./src/components/SecList";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
 const [showModal,setShowModal]=useState(false);
 const Tab=createBottomTabNavigator();
 const tigerfunction=()=>{
  setShowModal(!showModal)
 }
  return (
    <>
    <Modal visible={showModal}style={{flex:1}}>
      <View style={{height:200,backgroundColor:"green"}}>
      <Text style={{fontSize:40,textAlign:"center"}}>tiger</Text>
      <Button onPress={tigerfunction} title="button"/>
      </View>
    </Modal>

   <NavigationContainer>
   <Tab.Navigator>
      <Tab.Screen name="Home" component={ScrollV} />
      <Tab.Screen name="Settings" component={Flist} />
    </Tab.Navigator>
     {/* <ScrollV tigerfunction={tigerfunction} showModal={showModal}/> */}
    {/* <Flist/> */}
    {/* <SecList/> */}
   </NavigationContainer>
   </>
  )
}  