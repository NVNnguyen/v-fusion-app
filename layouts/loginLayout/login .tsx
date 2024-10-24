import { StatusBar, View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

const LoginLayout = () => {
   
  return (
    <SafeAreaView style={styles.container}>
      {/* Ẩn StatusBar và đặt màu nền */}
      <StatusBar hidden={false} barStyle="light-content" />
      <Text style={styles.header}>Login</Text>
      <View style={styles.loginForm}>
        <View style={styles.usernameBox}>
          <Text style={styles.formText}>Username</Text>
          <View style={styles.inputAccount}>
            <FontAwesome name="user-o" style={styles.icons} />
            <TextInput placeholderTextColor="white" style={styles.inputText} placeholder="Type your username" />
          </View>
        </View>

        <View style={styles.passwordBox}>
          <Text style={styles.formText}>Password</Text>
          <View style={styles.inputAccount}>
            <FontAwesome name="lock" style={styles.icons}/>
            <TextInput placeholderTextColor="white" style={styles.inputText} secureTextEntry={true} placeholder="Type your password" />
          </View>
        </View>

        <Text style={styles.forgetPasswordText}>Forget password?</Text>
        <Pressable style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
        <Text style={styles.loginWithText}>Or sign in with</Text>
        <View style={styles.loginWith}>
          <View><FontAwesome6 name="square-x-twitter" style={styles.icons}/></View>
          <View><FontAwesome5 name="facebook" style={styles.icons}/></View>
          <View><AntDesign name="google" style={styles.icons}/></View>
        </View>
        <Text style={styles.signUpText}>Sign Up</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", // Full screen black background
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 40,
    fontWeight: "600",
    color: "white",
  },
  loginForm: {
    marginTop: 20,
  },
  inputAccount: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  inputText: {
    width: "80%",
    paddingLeft: 30,
    color: "white",
  },
  usernameBox: {
    marginTop: 30,
  },
  passwordBox: {
    marginTop: 20,
  },
  formText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  icons: {
    fontSize: 24,
    color: "white"
  },
  forgetPasswordText: {
    marginTop: 10,
    color: "white",
  },
  loginButton: {
    marginTop: 20,
    borderColor: "white",
    borderWidth: 1,
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    backgroundColor: "black",
  },
  loginText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  loginWithText: {
    alignContent: "center",
    marginTop: 20,
    color: "white",
  },
  loginWith: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  signUpText: {
    marginTop: 20,
    color: "white",
  }
});

export default LoginLayout;
