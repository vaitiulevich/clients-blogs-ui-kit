export interface Locale {
    code: string;
    label: string;
}
export interface LocaleSwitcherProps {
    locales: Locale[];
    onLocaleChange?: (locale: string) => void;
    current: string;
}
export declare const LocaleSwitcher: ({ locales, onLocaleChange, current }: LocaleSwitcherProps) => import("react/jsx-runtime").JSX.Element;
