import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { navigate } from "expo-router/build/global-state/routing";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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

      {/* FAB Button */}
      <TouchableOpacity
        style={[styles.fab, { backgroundColor: theme.tertiary }]}
        onPress={() => {
          // Adicione aqui a ação do botão
          navigate("/new");
        }}
      >
        <Ionicons name="add" size={32} color={theme.primary} />
      </TouchableOpacity>
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
  fab: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
