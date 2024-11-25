export interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'full';
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset' | undefined;
    icon?: {
        src: string;
        alt: string;
    };
    disabled?: boolean;
    isNavigate?: boolean;
}
export declare const Button: ({ size, backgroundColor, label, isNavigate, type, disabled, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
