import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/styleComponents";
import CheckBox from "../elements/CheckBox";
import { useNavigation } from "@react-navigation/native";

import ArrowLeft from "../assets/icons/ArrowLeft.svg";
// import ArrowLeft from "react-native-heroicons/solid"
import { useState } from "react";
import { auth } from "../firebaseConfig";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isCheckedTerms, setCheckedTerms] = useState(false);
  const [isCheckedNewsletter, setCheckedNewsletter] = useState(false);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        // Signed in
        authUser.user.update({
          displayName: firstName,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView className="bg-primaryYellow flex-1">
      {/* Header */}
      <View className="mt-8 mx-8 justify-between items-center flex-row">
        <TouchableOpacity
          className="flex-1"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft width={30} height={21} />
        </TouchableOpacity>
        <View className="flex-3">
          <Text className="text-center text-lg font-bold">SignUpScreen</Text>
        </View>

        <View className="flex-1"></View>
      </View>
      {/* SignUp Fields */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 mx-8 justify-center"
      >
        <View className="space-y-2">
          <TextInput
            style={styles.inputStyle}
            placeholder="name"
            keyboardType="default"
            value={name}
            onChangeText={(text) => setName(text)}
            autofocus
          ></TextInput>
          <TextInput
            style={styles.inputStyle}
            placeholder="email"
            keyboardType="default"
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
          <TextInput
            style={styles.inputStyle}
            placeholder="password"
            keyboardType="default"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={register}
          ></TextInput>
        </View>
        {/* Terms Conditions */}
        <View>
          <View className="flex-row justify-start items-center mt-4 space-x-4">
            <CheckBox
              selected={isCheckedTerms}
              onSelectedChange={setCheckedTerms}
            />
            <View className="flex-1">
              <Text>
                I agree to WattWaffle Terms of Service and Privacy Policy.
              </Text>
            </View>
          </View>
          <View className="flex-row justify-start items-center my-4 space-x-4">
            <CheckBox
              selected={isCheckedNewsletter}
              onSelectedChange={setCheckedNewsletter}
            />
            <View>
              <Text>
                I agree to receive news and product updates from WattWaffle.
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={isCheckedTerms ? styles.buttonDark : styles.buttonDarkDisabled}
          disabled={!isCheckedTerms}
        >
          <Text className="text-grayLight1 font-bold text-lg ">Sign Up</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
