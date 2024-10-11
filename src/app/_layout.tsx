import { NavigationContainer } from '@react-navigation/native';
import { Stack } from "expo-router";
import { createStackNavigator } from '@react-navigation/stack';
import App from './index';


export default function RootLayout() {
  return (
    <Stack>
    <App/>
    </Stack>
  );
}

