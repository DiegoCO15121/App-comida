import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTab from "./src/navigation/NavigationTab";
import { CartContext } from "./src/context/CartContext";
import { useState } from "react";

export default function App() {
  const [Cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ Cart, setCart }}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <NavigationTab />
      </NavigationContainer>
    </CartContext.Provider>
  );
}
