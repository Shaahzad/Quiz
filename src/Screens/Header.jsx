import { View, Text } from 'react-native'
import React from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo' 

const Header = () => {
  return (
    <View style={{flex: 1}}>
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{fontSize: 20, color:'#00ff99', fontWeight: 'bold'}}>
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