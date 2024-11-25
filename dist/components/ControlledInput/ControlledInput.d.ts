import { UseFormRegisterReturn } from 'react-hook-form';
export interface ControlledInputProps {
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    color?: 'dark' | 'light';
    error?: string;
    register: UseFormRegisterReturn;
    styles?: string;
}
export declare const ControlledInput: ({ type, placeholder, disabled, color, error, register, styles, }: ControlledInputProps) => import("react/jsx-runtime").JSX.Element;
