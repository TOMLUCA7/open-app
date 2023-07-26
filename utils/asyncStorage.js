import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    Alert.alert("Error storing value: ", error);
  }
};

export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    Alert.alert("Error retrieving value: ", error);
  }
};

export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    Alert.alert("Error deleting value: ", error);
  }
};
