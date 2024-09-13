import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import useGetImages from "./components/hooks/use-get-images";

export default function App() {
  const [data, getData] = useGetImages();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <View style={styles.container}>
      {data !== undefined &&
        data !== -1 &&
        data !== -2 &&
        data !== -3 &&
        data.map((image) => {
          return <Text style={styles.text}>{image.name}</Text>;
        })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "whitesmoke",
  },
  container: {
    flex: 1,
    backgroundColor: "#141414",
    alignItems: "center",
    justifyContent: "center",
  },
});
