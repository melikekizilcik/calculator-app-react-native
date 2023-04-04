import React, {useState} from "react";
import { SafeAreaView, Text, View, Switch, StyleSheet } from "react-native";
import { ThemeContext } from "./src/context/ThemeContext";
import { Colors } from "./src/styles/Colors";
import Button from "./src/components/Button/Button";
import MyKeyboard from "./src/components/Keyboard/Keyboard";

const App = () => {
  const [theme, setTheme] = useState("light");
  return(
    //theme değişikliğinin sadece local'de çalışmaması için
    <ThemeContext.Provider value={theme}> 
    <SafeAreaView style={theme === "light" ? styles.container : [styles.container, {backgroundColor: "#000000"}]}>
        <Switch 
          value={theme === "light"}
          onValueChange={() => setTheme(theme === "light" ? "dark" :"light")}
        />
        <MyKeyboard />
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

export default App;