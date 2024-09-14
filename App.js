import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import useGetImages from "./components/hooks/use-get-images";
import PhotoUploadSection from "./components/_Photo Gallery/PhotoUploadSection";

export default function App() {
  const [data, getData] = useGetImages();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <View style={styles.baseContainer}>
      <PhotoUploadSection />
      <View style={styles.container}>
        {data !== undefined &&
          data !== -1 &&
          data !== -2 &&
          data !== -3 &&
          data.map((image, i) => {
            return (
              <Text key={i} style={styles.text}>
                {image.name}
              </Text>
            );
          })}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "whitesmoke",
  },
  baseContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#141414",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    height: 100,
  },
});
