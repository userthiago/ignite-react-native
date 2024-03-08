import { StatusBar } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";
import { Loading } from "@components/Loading";
import { config } from "config/gluestack-ui.config";
import { SignIn } from "@screens/Signin";
import { SignUp } from "@screens/Signup";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <SignUp /> : <Loading />}
    </GluestackUIProvider>
  );
}
