import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { router, useNavigation, useRouter } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";

const { width, height } = Dimensions.get("window"); // Get device dimensions

// Loại cụ thể cho Login

// type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  //   const navigation = useNavigation<LoginScreenNavigationProp>();
  const router = useRouter();
  const handleLogin = () => {
    if (username && password) {
      Alert.alert("Login Successful", `Welcome ${username}!`);
    } else {
      Alert.alert("Error", "Please fill in all fields.");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <Text style={styles.label}>User name</Text>
        <TextInput
          style={styles.input}
          placeholder="User name"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor="#9E9E9E"
        />

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
            placeholderTextColor="#9E9E9E"
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <FontAwesome
              name={isPasswordVisible ? "eye" : "eye-slash"}
              size={20}
              color="#9E9E9E"
            />
          </TouchableOpacity>
        </View>

        {/* Updated Checkbox */}
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setIsChecked(!isChecked)}
        >
          {isChecked ? (
            <MaterialIcons name="check-box" size={24} color="#FFF" />
          ) : (
            <MaterialIcons
              name="check-box-outline-blank"
              size={24}
              color="#FFF"
            />
          )}
          <Text style={styles.checkboxText}>Remember me</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <Text style={styles.signInWith}>Sign in with</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="apple" size={20} color="#FFF" />
            <Text style={styles.socialText}>Apple ID</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={20} color="#FFF" />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/screens/RegisterScreen")}
        >
          <Text style={styles.registerText}>Register an account</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    padding: width * 0.05, // Dynamic padding based on screen width
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: width * 0.08, // Dynamic font size
    color: "#FFF",
    marginBottom: height * 0.02,
    fontWeight: "bold",
  },
  label: {
    color: "#FFF",
    alignSelf: "flex-start",
    marginLeft: width * 0.05,
    marginBottom: height * 0.01,
    fontSize: width * 0.045,
  },
  input: {
    backgroundColor: "#2C2C2E",
    width: "100%",
    height: height * 0.065,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#FFF",
    marginBottom: height * 0.02,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2C2C2E",
    width: "100%",
    height: height * 0.065,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: height * 0.02,
  },
  inputPassword: {
    flex: 1,
    color: "#FFF",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  checkboxText: {
    color: "#FFF",
    marginLeft: width * 0.02,
    fontSize: width * 0.04,
  },
  button: {
    backgroundColor: "#000",
    width: "100%",
    height: height * 0.065,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  buttonText: {
    color: "#FFF",
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#9E9E9E",
    marginBottom: height * 0.03,
    fontSize: width * 0.04,
    textDecorationLine: "underline",
  },
  signInWith: {
    color: "#9E9E9E",
    fontSize: width * 0.045,
    marginBottom: height * 0.01,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: height * 0.02,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 10,
    padding: width * 0.03,
    paddingHorizontal: width * 0.07,
  },
  socialText: {
    color: "#FFF",
    marginLeft: width * 0.02,
    fontSize: width * 0.04,
  },
  registerText: {
    color: "#FFF",
    fontSize: width * 0.04,
    textDecorationLine: "underline",
  },
});

export default LoginScreen;