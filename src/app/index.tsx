import 'react-native-gesture-handler';

import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#008584' 
      }}
    >
      <Image
        source={require('../../assets/images/logo.png')}
      />
      <Text>Teste</Text>
    </View>
  );
}
