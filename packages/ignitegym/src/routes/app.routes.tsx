import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { Home } from "@screens/Home";
import { History } from "@screens/History";
import { Profile } from "@screens/Profile";
import { Exercise } from "@screens/Exercise";

import HomeSvg from "@assets/home.svg";
import HistorySvg from "@assets/history.svg";
import ProfileSvg from "@assets/profile.svg";
import { useStyled } from "@gluestack-style/react";

type AppRoutes = {
  home: undefined;
  exercise: undefined;
  profile: undefined;
  history: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { config } = useStyled();

  const iconSize = config.tokens.space["6"];

  return (
    <Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  );
}
