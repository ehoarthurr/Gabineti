import DemandItem from "@/components/DemandItem";
import FAB from "@/components/ui/FAB";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { navigate } from "expo-router/build/global-state/routing";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <View style={[{ backgroundColor: theme.primary }, styles.container]}>
      <DemandItem
        address="Rua Domingos Tenuta, 281, Leblon"
        cep="79092-225"
        date="24/06/2025"
        highlighted
      />
      <DemandItem
        address="Rua Domingos Tenuta, 281, Leblon"
        cep="79092-225"
        date="24/06/2025"
      />
      <DemandItem
        address="Rua Domingos Tenuta, 281, Leblon"
        cep="79092-225"
        date="24/06/2025"
      />

      <FAB onPress={() => navigate("/new")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 22,
    paddingHorizontal: 18,
  },
});
