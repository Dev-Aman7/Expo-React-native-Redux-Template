import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import store from "./app/store";

import HomeScreen from "./app/screens/HomeScreen";
import Page from "./app/screens/Page";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Page1">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Page2" component={Page} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
