import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const Link = (props) => <Text {...props} accessibilityRole="link" style={StyleSheet.compose(styles.link, props.style)} />

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.header}>
          <Image accessibilityLabel="React logo" source={logo} resizeMode="contain" style={styles.logo} />
          <Text style={styles.title}>D3 State Management (React/Redux)</Text>
        </View>

        {/* <ScrollComponent />
        <ChartComponent /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    textAlign: "center"
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;