import { useState } from "react";
import { TextInput, View, Modal, Image, Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";
import usePostImage from "../hooks/use-post-image";
import usePatchImage from "../hooks/use-patch-image";
import useDeleteImage from "../hooks/use-delete-image";
import { ActivityIndicator } from "react-native-web";

export default function ImageFocus({
  image,
  imageFocused,
  setImageFocused,
  mainData,
  setData,
}) {
  const [title, setTitle] = useState(
    image && image.title ? image.title : "HELLO NEW IMAGE"
  );

  const postData = usePostImage();
  const patchData = usePatchImage();
  const deleteData = useDeleteImage();
  const [isLoading, setIsLoading] = useState(false);

  const changeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const onSubmitHandler = async () => {
    const data = {
      ...image,
      title: title,
    };

    if (imageFocused.post) {
      setIsLoading(true);
      const response = await postData(data);
      if (response) {
        setImageFocused({ isFocused: false, post: false });
        setData((prevData) => [...prevData, data]);
      }
    } else {
      setIsLoading(true);
      const response = await patchData(data);
      if (response) {
        setImageFocused({ isFocused: false, post: false });
        mainData[mainData.findIndex((el) => el._id === data._id)] = data;
        setData(mainData);
      }
    }
  };

  const onDeleteHandler = async () => {
    setIsLoading(true);
    const response = await deleteData(image);

    if (response) {
      setData((prevData) => prevData.filter((el) => el._id !== image._id));
      setImageFocused({ isFocused: false, post: false });
    }
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
        {isLoading && (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#FFFFFF" />
          </View>
        )}
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
    backgroundColor: "#0000006a",
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
  loader: {
    position: "absolute",
    backgroundColor: "#0000004c",
    width: "100%",
    height: "100%",
    zIndex: 1000,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
