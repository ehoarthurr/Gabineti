import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import CustomDrawerContent from "@/components/ui/CustomDrawerContent";
import Header from "@/components/ui/Header";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Drawer drawerContent={() => <CustomDrawerContent />}>
        <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
        <Drawer.Screen
          name="new"
          options={{
            header: () => <Header type="back" />,
          }}
        />
      </Drawer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
