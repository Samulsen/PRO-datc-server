import type { EThemeSpacing } from "@lib-theme/tokens";

export type TThemeShorthand<T> = [T] | [T, T] | [T, T, T] | [T, T, T, T];

export type TThemeSpacing = keyof typeof EThemeSpacing;

export type TThemeShorthandSpacing = TThemeShorthand<TThemeSpacing>;
