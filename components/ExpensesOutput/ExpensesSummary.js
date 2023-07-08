import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((tempTotal, expense) => {
    return tempTotal + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 3,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary50
  },
  period: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  sum: {
    fontWeight: 'bold'
  }
});
