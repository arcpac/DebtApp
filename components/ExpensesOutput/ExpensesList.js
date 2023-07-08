import { FlatList, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
  return (
    // <View style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={renderExpenseItem}
      />
    // </View>
  );
}

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderWidth: 2
  },
});
