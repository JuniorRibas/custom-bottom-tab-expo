import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBarButtonProps,
} from "@react-navigation/bottom-tabs";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

import Chat from "../pages/Chat";
import Find from "../pages/Find";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Settings from "../pages/Settings";

const Bottom = createBottomTabNavigator();

interface CustomBtnProps {
  focused: boolean;
  nameScreen: string;
  nameIcon: any;
}

const CustomBtnPosts: React.FC<BottomTabBarButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: RFValue(-30),
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
    >
      <View
        style={{ width: RFValue(70), height: RFValue(70), borderRadius: 35 }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};
const CustomBtn: React.FC<CustomBtnProps> = ({
  focused,
  nameIcon,
  nameScreen,
}) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        top: Platform.OS === "ios" ? 15 : 0,
      }}
    >
      <Ionicons
        name={nameIcon}
        size={RFValue(24)}
        color={focused ? "#e32f45" : "#748c94"}
      />
      <Text
        style={{
          fontSize: RFValue(12),
          color: focused ? "#e32f45" : "#748c94",
        }}
      >
        {nameScreen}
      </Text>
    </View>
  );
};

export const Tabs = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarIconStyle: {
          justifyContent: "center",
          alignItems: "center",
          height: hp(100),
        },
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: RFValue(25),
          left: RFValue(20),
          right: RFValue(20),
          backgroundColor: "#000",
          borderRadius: 10,
          height: hp(10),
          ...styles.shadow,
        },
      }}
    >
      <Bottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomBtn
                nameIcon="home-sharp"
                nameScreen="Home"
                focused={focused}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Find"
        component={Find}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomBtn
                nameIcon="search"
                nameScreen="Find"
                focused={focused}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="add-circle-sharp" size={60} color={"#e32f45"} />
          ),
          tabBarButton: (props) => <CustomBtnPosts {...props} />,
        }}
      />
      <Bottom.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomBtn
                nameIcon="settings-sharp"
                nameScreen="Settings"
                focused={focused}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomBtn
                nameIcon="chatbubble"
                nameScreen="Chat"
                focused={focused}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 1,
  },
});
