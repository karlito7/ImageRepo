import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import usePostImage from "../hooks/use-post-image";

export default function PhotoUploadSection({ setFocusInfo, setImageFocused }) {
  const [data, postData] = usePostImage();

  const uploadImageHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFocusInfo({ title: "NEW IMAGE", data: result.assets[0].uri });
      setImageFocused({ isFocused: true, post: true });
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={uploadImageHandler}>
        <Text style={styles.text}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gray",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 32,
  },
  container: {
    height: 75,
    marginTop: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 32,
  },
});
