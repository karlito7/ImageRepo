import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function PhotoUploadSection() {
  const [image, setImage] = useState();

  const uploadImageHandler = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={uploadImageHandler}>
        <Text style={styles.text}>+</Text>
      </Pressable>
      {image && <Image src={image} style={{ width: "100%", height: "100%" }} />}
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
    flex: 1,
    marginTop: 64,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 32,
  },
});
