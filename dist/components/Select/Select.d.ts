import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
interface SelectProps {
    options: {
        value: string;
        label: string;
    }[];
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    register?: UseFormRegisterReturn;
}
export declare const Select: ({ options, value, onChange, placeholder, disabled, error, register, }: SelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
