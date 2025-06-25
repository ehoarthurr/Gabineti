import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <View style={[{ backgroundColor: theme.primary }, styles.container]}>
      <View
        style={[
          {
            backgroundColor: theme.tertiary + "40",
            borderTopColor: theme.tertiary,
          },
          styles.demandItem,
        ]}
      >
        <Ionicons
          name="time-outline"
          size={24}
          color={theme.tertiary}
          style={{ alignSelf: "flex-end" }}
        />
        <Text style={{ color: theme.tertiary, fontSize: 16, fontWeight: 600 }}>
          Rua Domingos Tenuta, 281, Leblon
        </Text>
        <Text style={{ color: theme.tertiary, fontSize: 12, marginTop: 4 }}>
          CEP: XXXXX-XXX
        </Text>
        <Text
          style={{ color: theme.tertiary, fontSize: 10, alignSelf: "flex-end" }}
        >
          24/06/2025
        </Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 22,
    paddingHorizontal: 18,
  },
  demandItem: {
    padding: 10,
    borderTopWidth: 2,
  },
});
