import { StatusBar } from "expo-status-bar";
import { useContext, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import useGetImages from "./components/hooks/use-get-images";
import PhotoUploadSection from "./components/_Photo Gallery/PhotoUploadSection";
import UserAuth from "./components/_User_auth/UserAuth";
import UserProvider from "./components/store/UserProvider";
import UserContext from "./components/store/user-context";

export default function App() {
  const [data, getData] = useGetImages();
  const userCtx = useContext(UserContext);

  useEffect(() => {
    if (data === -1 || data === -2 || data === -3) console.log(data);
  }, [data]);

  return (
    <UserProvider>
      {!userCtx.isLoggedIn && <UserAuth />}
      <View style={styles.baseContainer}>
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
                  source={{ uri: image.data }}
                  style={{ width: 350, height: 150 }}
                />
              );
            })}
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </UserProvider>
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
