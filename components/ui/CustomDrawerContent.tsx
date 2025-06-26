import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CustomDrawerContent() {
  const navigation = useNavigation() as any;
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <SafeAreaView
      style={[{ backgroundColor: theme.primary }, styles.container]}
    >
      <Text style={[{ color: theme.text }, styles.title]}>Menu</Text>
      {/* Adicione outros itens customizados aqui */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 32,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  label: {
    fontSize: 16,
  },
});
