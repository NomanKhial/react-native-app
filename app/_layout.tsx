import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return <>
  {/* <Text>Header</Text> */}
  <Stack>
    <Stack.Screen name="(tabs)" options={{headerShown: false}} />
  </Stack>
    {/* <Text>Footer</Text> */}
  </>
}
