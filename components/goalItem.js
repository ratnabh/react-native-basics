import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
const GoalItem = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onDelete.bind(this, props.id)}
      activeOpacity={0.8}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
  },
});

export default GoalItem;
