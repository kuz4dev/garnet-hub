import { createContext } from 'react';
import { Theme } from '..';

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
