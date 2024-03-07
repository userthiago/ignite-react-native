import { StatusBar } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { Loading } from "@components/Loading";
import { config } from "config/gluestack-ui.config";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {!fontsLoaded ? (
        <Box>
          <Text>Open up App.js to start working on your app!</Text>
        </Box>
      ) : (
        <Loading />
      )}
    </GluestackUIProvider>
  );
}
