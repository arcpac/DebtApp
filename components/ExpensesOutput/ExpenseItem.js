import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ description, amount, date }) {
  const navigation = useNavigation();
  function expensePressHandler() {
    navigation.navigate("ManageExpense");
  }
  return (
    <Pressable onPress={expensePressHandler}>
      <View style={styles.container}>
        <View>
          <Text style={[styles.text, styles.textDescription]}>
            {description}
          </Text>
          <Text style={styles.text}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text
            style={[
              styles.text,
              { fontSize: 12, color: GlobalStyles.colors.primary700 },
            ]}
          >
            ${amount.toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;
const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary400,
    borderColor: "white",
    borderRadius: 6,
  },
  text: {
    fontSize: 16,
    color: GlobalStyles.colors.primary50,
  },
  textDescription: { fontWeight: "bold" },
  textAmount: {},
  amountContainer: {
    minWidth: "19%",
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.primary50,
  },
});
