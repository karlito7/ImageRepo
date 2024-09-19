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
  ActivityIndicator,
} from "react-native";
import useGetImages from "./components/hooks/use-get-images";
import PhotoUploadSection from "./components/_Photo Gallery/PhotoUploadSection";
import UserAuth from "./components/_User_auth/UserAuth";
import UserProvider from "./components/store/UserProvider";
import UserContext from "./components/store/user-context";
import ImageFocus from "./components/_Photo Gallery/ImageFocus";
import { FlatList } from "react-native-web";

export default function App() {
  const [data, setData, getData] = useGetImages();
  const [imageFocused, setImageFocused] = useState({
    isFocused: false,
    post: false,
  });
  const [focusInfo, setFocusInfo] = useState();
  const userCtx = useContext(UserContext);

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
            mainData={data}
            setData={setData}
          />
        )}
        <Text style={styles.title}>ImageRepo Gallery</Text>
        {data === -3 ? (
          <Text style={styles.text}>No Data</Text>
        ) : data === -2 || data === -1 ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          data &&
          data.length > 0 && (
            <View style={styles.container}>
              <FlatList
                numColumns={3}
                data={data}
                columnWrapperStyle={styles.row}
                renderItem={(item) => {
                  return (
                    <View style={styles.imageContainer}>
                      <Pressable onPress={() => onImageFocus(item.item)}>
                        <Image
                          source={{ uri: item.item.data }}
                          style={{ width: 110, height: 110 }}
                        />
                      </Pressable>
                    </View>
                  );
                }}
              />
            </View>
          )
        )}

        <StatusBar style="auto" />
      </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "whitesmoke",
  },
  title: {
    color: "whitesmoke",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 32,
  },
  baseContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#201f1f",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    marginTop: 45,
  },
  imageContainer: {
    backgroundColor: "white",
    margin: 3,
  },
  row: {
    flex: 1,
    justifyContent: "flex-start",
  },
  loader: {
    marginTop: 50,
  },
});
