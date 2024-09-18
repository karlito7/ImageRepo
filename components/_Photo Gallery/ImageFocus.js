import { useState } from "react";
import { TextInput, View, Modal, Image, Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";
import usePostImage from "../hooks/use-post-image";
import usePatchImage from "../hooks/use-patch-image";
import useDeleteImage from "../hooks/use-delete-image";

export default function ImageFocus({ image, imageFocused, setImageFocused }) {
  const [title, setTitle] = useState(
    image && image.title ? image.title : "HELLO NEW IMAGE"
  );

  const [poData, postData] = usePostImage();
  const [paData, patchData] = usePatchImage();
  const [deData, deleteData] = useDeleteImage();

  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
    console.log("CHANGE TITLE");
  };

  const onSubmitHandler = () => {
    const data = {
      ...image,
      title: title,
    };

    if (imageFocused.post) {
      postData(data);
    } else {
      patchData(data);
    }
  };

  const onDeleteHandler = () => {
    deleteData(image);
  };

  return (
    <Modal
      animationType={"fade"}
      isVisible={imageFocused.isFocused}
      transparent={true}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.titleInput}
          value={title}
          onChange={changeTitleHandler}
        />
        <Image
          source={
            image && image.data ? image.data : require("../../assets/icon.png")
          }
          style={{ width: "80%", height: 300 }}
        />
        <View style={styles.actions}>
          <Pressable style={styles.actionButton} onPress={onSubmitHandler}>
            <Text style={styles.actionText}>
              {imageFocused.post ? "Add" : "Save"}
            </Text>
          </Pressable>

          {!imageFocused.post && (
            <Pressable style={styles.actionButton} onPress={onDeleteHandler}>
              <Text style={styles.actionText}>Delete</Text>
            </Pressable>
          )}

          <Pressable
            style={styles.actionButton}
            onPress={() => {
              setImageFocused({ isFocused: false, post: false });
            }}
          >
            <Text style={styles.actionText}>
              {imageFocused.post ? "Cancel" : "Exit"}
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000053",
    gap: 16,
  },
  titleInput: {
    width: "80%",
    backgroundColor: "whitesmoke",
    borderWidth: 0,
    borderRadius: 50,
    padding: 8,
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 24,
  },
  actionButton: {
    backgroundColor: "whitesmoke",
    flex: 1,
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  actionText: {
    fontWeight: 600,
  },
});
