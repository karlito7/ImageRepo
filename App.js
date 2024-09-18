import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Modal,
} from "react-native";
import useGetImages from "./components/hooks/use-get-images";
import PhotoUploadSection from "./components/_Photo Gallery/PhotoUploadSection";
import UserAuth from "./components/_User_auth/UserAuth";
import UserProvider from "./components/store/UserProvider";
import UserContext from "./components/store/user-context";
import ImageFocus from "./components/_Photo Gallery/ImageFocus";

export default function App() {
  const [data, getData] = useGetImages();
  const [imageFocused, setImageFocused] = useState({
    isFocused: false,
    post: false,
  });
  const [focusInfo, setFocusInfo] = useState();
  const userCtx = useContext(UserContext);

  useEffect(() => {
    console.log("login");
    console.log("app " + userCtx.isLoggedIn);
  }, [userCtx.isLoggedIn]);

  useEffect(() => {
    if (data === -1 || data === -2 || data === -3) console.log(data);
  }, [data]);

  const onImageFocus = (image) => {
    setFocusInfo(image);
    setImageFocused({ isFocused: true, post: false });
  };

  return (
    <UserProvider>
      <UserAuth />
      <View style={styles.baseContainer}>
        <PhotoUploadSection
          setFocusInfo={setFocusInfo}
          setImageFocused={setImageFocused}
        />
        {imageFocused.isFocused && (
          <ImageFocus
            image={focusInfo}
            imageFocused={imageFocused}
            setImageFocused={setImageFocused}
          />
        )}

        <ScrollView style={styles.container}>
          {data !== undefined &&
            data !== -1 &&
            data !== -2 &&
            data !== -3 &&
            data.map((image, i) => {
              return (
                <Pressable onPress={() => onImageFocus(image)} key={i}>
                  <Image
                    source={{ uri: image.data }}
                    style={{ width: 350, height: 150 }}
                  />
                </Pressable>
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
