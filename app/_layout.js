import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(mainTabs)" />
      <Stack.Screen name="doctors" />
      <Stack.Screen name="pharmacy" />
      <Stack.Screen name="labtests" />
      <Stack.Screen name="insurance" />
      <Stack.Screen name="myhealth" />
    </Stack>
  );
}
