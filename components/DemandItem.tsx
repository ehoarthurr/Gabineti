import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  address: string;
  cep: string;
  date: string;
  highlighted?: boolean;
  onPress?: () => void;
};

export default function DemandItem({
  address,
  cep,
  date,
  highlighted = false,
  onPress,
}: Props) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <View
      style={[
        {
          backgroundColor: highlighted ? theme.tertiary + "40" : theme.primary,
          borderTopColor: highlighted ? theme.tertiary : theme.text + "40",
        },
        styles.container,
      ]}
    >
      {highlighted && (
        <Ionicons
          name="time-outline"
          size={24}
          color={theme.tertiary}
          style={{ alignSelf: "flex-end" }}
        />
      )}
      <Text
        style={{
          color: highlighted ? theme.tertiary : theme.text,
          fontSize: 16,
          fontWeight: 600,
          marginTop: highlighted ? -16 : 8,
        }}
      >
        {address}
      </Text>
      <Text
        style={{
          color: highlighted ? theme.tertiary : theme.text,
          fontSize: 12,
          marginTop: 4,
        }}
      >
        {cep}
      </Text>
      <Text
        style={{
          color: highlighted ? theme.tertiary : theme.text,
          fontSize: 10,
          alignSelf: "flex-end",
        }}
      >
        {date}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderTopWidth: 2,
  },
});
