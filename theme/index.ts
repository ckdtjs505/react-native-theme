import green, { Theme } from "./green";
import purple from "./purple";

export type ThemeNames = "green" | "purple";

export interface ThemeMeta {
  id: ThemeNames;
  name: string;
  theme: Theme;
}

export const themes: readonly ThemeMeta[] = [
  {
    id: "green",
    name: "Default green",
    theme: green,
  },
  {
    id: "purple",
    name: "Default purple",
    theme: purple,
  },
];

export type { Theme };
