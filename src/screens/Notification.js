import React,{useState} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
const Notification =() =>{
    const [count,setCount] = useState(0)
    return (
        <View style ={{flex:1,alignSelf:'center'}}>
            <Text>{count}-Notifications</Text>
            <TouchableOpacity
        onPress={()=>setCount(count+1)}><Text style ={{fontSize:32}}>+</Text></TouchableOpacity>
        </View>
    )
}
export default Notification