import { Colors } from "@/constants/Colors";
// import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props =
  | { type?: "default"; title: string }
  | { type: "back"; title?: string };

export default function Header({ type = "default", title }: Props) {
  const navigation = useNavigation() as DrawerNavigationProp<
    Record<string, object | undefined>
  >;
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return type === "back" ? (
    <SafeAreaView
      edges={["top"]}
      style={[{ backgroundColor: theme.secondary }, styles.headerContainer]}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={32} color="#F5F5F5" />
      </TouchableOpacity>
      <Text style={[styles.headerTitle, { color: theme.text }]}>
        {title || "Voltar"}
      </Text>
    </SafeAreaView>
  ) : (
    <SafeAreaView
      edges={["top"]}
      style={[{ backgroundColor: theme.secondary }, styles.headerContainer]}
    >
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={32} color="#F5F5F5" />
      </TouchableOpacity>
      <Text style={[styles.headerTitle, { color: theme.text }]}>{title}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 22,
    paddingHorizontal: 18,
    flexDirection: "row",
    gap: 18,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
});
