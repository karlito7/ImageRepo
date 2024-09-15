import { useState } from "react";
import { StyleSheet, Modal, View, Text, TextInput, Button } from "react-native";
import useRegisterUser from "../hooks/use-register-user";

export default function UserAuth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(true);
  const [data, register] = useRegisterUser();

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const changeMode = (e) => {
    setIsRegistering((prevVal) => !prevVal);
    setUsername("");
    setPassword("");
  };

  const onSubmit = () => {
    const data = {
      username,
      password,
    };

    register(data);
  };

  return (
    <Modal>
      <View style={styles.container}>
        <Text>User {isRegistering ? "register" : "login"}</Text>
        <TextInput
          style={styles.textInput}
          value={username}
          onChange={onUsernameChange}
          placeholder="Username"
        />
        <TextInput
          style={styles.textInput}
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button
          title={isRegistering ? "Register" : "Login"}
          onPress={onSubmit}
        ></Button>
        <Button
          onPress={changeMode}
          title={
            isRegistering ? "Switch to user register" : "Switch to user login"
          }
        ></Button>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 4,
  },
  textInput: {
    margin: 8,
    padding: 8,
    width: "60%",
    borderWidth: 1,
  },
});
