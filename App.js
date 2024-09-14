import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import useGetImages from "./components/hooks/use-get-images";
import PhotoUploadSection from "./components/_Photo Gallery/PhotoUploadSection";

export default function App() {
  const [data, getData] = useGetImages();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <ScrollView contentContainerStyle={styles.baseContainer}>
      <PhotoUploadSection />
      <ScrollView style={styles.container}>
        {data !== undefined &&
          data !== -1 &&
          data !== -2 &&
          data !== -3 &&
          data.map((image, i) => {
            return (
              <Image
                key={i}
                source={{ uri: image }}
                style={{ width: 100, height: 150 }}
              />
            );
          })}
      </ScrollView>
      <StatusBar style="auto" />
    </ScrollView>
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
    flex: 1,
  },
});
