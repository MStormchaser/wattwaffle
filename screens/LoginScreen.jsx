import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect } from "react";
import styles from "../styles/styleComponents";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebaseConfig";

import MagicStar from "../assets/icons/magicstar.svg";
import AppleLogo from "../assets/logos/apple.svg";
import GoogleLogo from "../assets/logos/google.svg";
import WattWaffleLogo from "../assets/logos/WattWaffl-tmp-logo.svg";

const LoginScreen = ({ navigation }) => {
  // const navigation = useNavigation();

  useEffect(() => {
    // unsubscribe is a clean up function
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView className="bg-primaryYellow flex-1">
      <StatusBar barStyle={"dark-content"} />
      {/* Header */}
      <View className="flex-row items-center justify-between mt-8 mx-8">
        <Text className="text-secondBlack text-3xl font-extrabold">
          WattWaffle
        </Text>
        <TouchableOpacity
          className="px-4 py-2 bg-grayLight1 rounded-full"
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text>SignUp</Text>
        </TouchableOpacity>
      </View>
      {/* Input  and Sign In methods*/}
      <View className="mx-8 space-y-4 justify-center flex-1">
        <KeyboardAvoidingView>
          <View className="space-y-4 justify-center">
            <TextInput
              placeholder="email"
              keyboardType="email-address"
              style={styles.inputStyle}
            />
            <TextInput
              placeholder="password"
              keyboardType="default"
              secureTextEntry={true}
              style={styles.inputStyle}
            />
          </View>
        </KeyboardAvoidingView>

        {/* Sign In and Magic Link Button */}
        <View className="pt-16">
          <TouchableOpacity
            style={styles.buttonDark}
            onPress={() => navigation.navigate("Home")}
          >
            <Text className="text-grayLight1 font-bold text-lg ">Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mt-2 justify-center items-center">
            <Text className="text-grayLight3">
              Holy waffle! I forgot my password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonTranparent} className="mt-4">
            <Text className="font-bold text-lg text-secondBlack">
              Get Magic Link
            </Text>
            <MagicStar />
            <Text className="text-grayLight2">no password needed</Text>
          </TouchableOpacity>
          <Text className="my-2 text-grayLight2">or continue with:</Text>
          {/* Google and Apple login */}
          <View className="flex-row space-x-4 justify-between">
            <TouchableOpacity style={styles.buttonLight} className="flex-1">
              <GoogleLogo />
              <Text className="font-bold text-lg text-secondBlack">Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLight} className="flex-1">
              <AppleLogo />
              <Text className="font-bold text-lg text-secondBlack">Apple</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="justify-end items-center">
        <WattWaffleLogo />
        <Text style={{ letterSpacing: 7 }} className="text-secondBlack">
          make energy transparent
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
