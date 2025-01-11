import { Button, Text, View } from "react-native";
import { createBox, ThemeProvider } from "@shopify/restyle";
import { useAtom } from "jotai";
import { activeThemeAtom, activeThemeId } from "@/states/theme";
import { Theme, ThemeNames } from "@/theme";

const Box = createBox<Theme>();

export default function Index() {
  const [activeTheme] = useAtom<Theme>(activeThemeAtom);
  const [_, setActivThemeId] = useAtom<ThemeNames>(activeThemeId);
  console.log(activeTheme);
  return (
    <ThemeProvider theme={activeTheme}>
      <Box
        flex={1}
        backgroundColor="mainBackground"
        justifyContent="center"
        alignItems="center"
      >
        <Text> Hello, World !!</Text>

        <Button
          title="change green theme"
          onPress={() => setActivThemeId("green")}
        ></Button>
        <Button
          title="change purple theme"
          onPress={() => setActivThemeId("purple")}
        ></Button>
      </Box>
    </ThemeProvider>
  );
}
