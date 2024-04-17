import ThemeProvider from './ui/ThemeProvider';
import { useTheme } from './lib/useTheme';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export {
    ThemeProvider,
    useTheme,
};
