import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  Fadeout,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const Navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
      {/* background image */}
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/background.png")}
      />
      {/* lights */}
      <View className="flex-row w-full justify-around absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify().damping(2)}
          className="h-[225] w-[90]"
          source={require("../assets/images/light.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify().damping(2)}
          className="h-[160] w-[65]"
          source={require("../assets/images/light.png")}
        />
      </View>

      {/* title and  form */}
      <View className=" h-full w-full flex justify-around pt-40 pb-10">
        {/* title */}
        <Animated.View
          entering={FadeInUp.duration(1000).springify()}
          className="flex items-center"
        >
          <Text className="text-white text-5xl font-bold tracking-wider">
            Login
          </Text>
        </Animated.View>
        {/* form */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full"
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="p-5 rounded-2xl bg-black/5 w-full mb-3"
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            className="w-full"
          >
            <TouchableOpacity className="bg-sky-400 p-3 rounded-2xl">
              <Text className="text-center font-bold text-xl text-white">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="flex-row justify-center"
          >
            <Text>Don't have an account? </Text>

            <TouchableOpacity>
              <Text className="text-sky-600">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
