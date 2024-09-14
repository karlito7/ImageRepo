import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import usePostImage from "../hooks/use-post-image";

export default function PhotoUploadSection() {
  const [image, setImage] = useState();
  const [data, postData] = usePostImage();

  const uploadImageHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      postData(result.assets[0].uri);
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={uploadImageHandler}>
        <Text style={styles.text}>+</Text>
      </Pressable>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gray",
    height: 50,
    width: 50,
    marginTop: 64,
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
    height: 200,
    marginTop: 64,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 32,
  },
});
