import { View, Text,SafeAreaView,ScrollView, Button} from 'react-native'
import React from 'react'

export default function ScrollV({showModal,tigerfunction}) {
//   console.warn(showModal)
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
           <Text style={{fontSize:40,textAlign:"center"}}>Student Information</Text>
           <View style={{height:2,backgroundColor:"black"}}></View>
    </SafeAreaView>
   <ScrollView style={{flex:1}}>
        {
          data.map((item,index)=>{
            return(
              <View key={index} style={{justifyContent:"space-between",borderRadius:15, flex:1,height:150,backgroundColor:"orange",margin:10,padding:10}}>
                <Text style={{fontSize:30,textAlign:"center"}}>{item.name}: {item.age}</Text>
                <Button onPress={tigerfunction} title='modal'/>
              </View>
            )
          })
        }
   </ScrollView>
 </>
  )
}