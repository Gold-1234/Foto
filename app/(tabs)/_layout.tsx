import { Tabs } from "expo-router";
import { MaterialIcons, Ionicons, EvilIcons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs
    screenOptions={{
      headerShown: false
    }}>
      <Tabs.Screen 
        name="index" 
        options={{
            title: 'Create',
            tabBarIcon:({focused}) => (
                <MaterialIcons 
                    name="add-circle"
                    color={focused ? '#3C2A21' : '#1A120B'} 
                    size={30}/>
            )
        }}
        />
        <Tabs.Screen 
        name="camera" 
        options={{
            title: 'Camera',
            tabBarIcon:({focused}) => (
                <Ionicons 
                name="camera"
                color={focused ? '#3C2A21' : '#1A120B'} 
                size={30}/>
            )
        }}
        />
        <Tabs.Screen 
        name="settings" 
        options={{
            title: 'Settings',
            tabBarIcon:({focused}) => (
                <Ionicons 
                name="aperture"
                color={focused ? '#3C2A21' : '#1A120B'} 
                size={30}/>
            )
        }}
        />
    </Tabs>
  );
}