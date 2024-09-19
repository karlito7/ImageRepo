import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import usePostImage from "../hooks/use-post-image";

export default function PhotoUploadSection({ setFocusInfo, setImageFocused }) {
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
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",
    left: 45,
    bottom: 60,
  },
  text: {
    color: "black",
    fontWeight: "bold",
    fontSize: 32,
  },
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 32,
    position: "absolute",
    top: 0,
    left: 0,
  },
});
