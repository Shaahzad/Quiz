import { View, Text } from 'react-native'
import React from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo' 

const Header = () => {
  return (
    <View style={{flex: 1}}>
    <View>
      <Text style={{fontSize: 30, color:'#00ff99', fontWeight: 'bold'}}>
        WhatsApp
      </Text>
        </View>
        <View>
            <IonIcon name='camera-outline'/>
            <Entypo name='dots-three-vertical'/>
        </View>
    </View>
  )
}

export default Header