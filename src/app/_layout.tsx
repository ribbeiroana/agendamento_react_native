import { NavigationContainer } from '@react-navigation/native';
import { Stack } from "expo-router";
import { createStackNavigator } from '@react-navigation/stack';
// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" />
//     </Stack>
//   );
// }

  export default () => {
    return (
<Stack.Navigator>
  <Stack.Screen name='Preload' />
</Stack.Navigator>
    );
  }
