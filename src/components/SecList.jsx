import React from "react"
import { View,Text, SectionList } from "react-native"
export default function SecList(){
    const users=[
        {
            id:1,
            name:"tiger",
            coding:["c","cpp","java","python","php","javaScript"]
        },
        {
            id:2,
            name:"tiger",
            coding:["c","cpp","java","python","php","javaScript"]
        },
        {
            id:3,
            name:"tiger",
            coding:["c","cpp","java","python","php","javaScript"]
        },
        {
            id:4,
            name:"tiger",
            coding:["c","cpp","java","python","php","javaScript"]
        },
        {
            id:5,
            name:"tiger",
            coding:["c","cpp","java","python","php","javaScript"]
        },
        {
            id:6,
            name:"tiger",
            coding:["c","cpp","java","python","php","javaScript"]
        },
    ]
    return(
     <>
     <Text style={{fontSize:30}}>some error occured</Text>
      {/* <SectionList
      sections={users}
      renderItem={({item})=><Text style={{fontSize:20}}>{item}</Text>} // all  inner array item print
       renderSectionHeader={({section:{name}})=><Text style={{fontSize:35}}>{name}</Text>} // header means upper array name
      /> */}
     </>        
    )
}