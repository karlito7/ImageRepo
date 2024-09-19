import { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Modal,
  View,
  Text,
  TextInput,
  Button,
  Image,
} from "react-native";
import useRegisterUser from "../hooks/use-register-user";
import useLoginUser from "../hooks/use-login-user";
import UserContext from "../store/user-context";

export default function UserAuth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerData, register] = useRegisterUser();
  const [loginData, login] = useLoginUser();

  const userCtx = useContext(UserContext);

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

    if (isRegistering) {
      register(data);
    } else {
      login(data);
    }
  };

  return (
    <>
      {!userCtx.isLoggedIn && (
        <Modal visible={!userCtx.isLoggedIn}>
          <View style={styles.container}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                height: 150,
                width: 150,
                resizeMode: "contain",
                marginBottom: 32,
              }}
            ></Image>
            <Text style={styles.title}>
              User {isRegistering ? "register" : "login"}
            </Text>
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
            <View style={{ marginTop: 32, gap: 8 }}>
              <Button
                title={isRegistering ? "Register" : "Login"}
                onPress={onSubmit}
              ></Button>
              <Button
                onPress={changeMode}
                title={
                  isRegistering
                    ? "Switch to user login"
                    : "Switch to user register"
                }
              ></Button>
            </View>
          </View>
        </Modal>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 4,
    backgroundColor: "#201f1f",
  },
  textInput: {
    margin: 8,
    padding: 8,
    width: "60%",
    borderWidth: 1,
    color: "whitesmoke",
    fontWeight: "600",
    borderColor: "whitesmoke",
    borderRadius: 10,
  },
  title: {
    color: "whitesmoke",
    fontWeight: "600",
    borderColor: "whitesmoke",
    borderRadius: 10,
    fontSize: 24,
    marginBottom: 16,
  },
});
