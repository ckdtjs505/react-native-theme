import { themes, Theme, ThemeNames } from "@/theme";
import { atom } from "jotai";

export const countAtom = atom(0);

export const activeThemeId = atom<ThemeNames>("purple");

export const activeThemeAtom = atom<Theme>((get) => {
  const themeId = get(activeThemeId);
  const themeIndex = themes.findIndex((t) => t.id === themeId);
  if (themeIndex >= 0) {
    return themes[themeIndex].theme;
  } else {
    return themes[0].theme;
  }
});
