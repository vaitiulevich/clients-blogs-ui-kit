import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
interface TextAreaProps {
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
    name?: string;
    register?: UseFormRegisterReturn;
    styles?: string;
    maxH?: string;
}
export declare const TextArea: ({ value, onChange, placeholder, disabled, error, register, maxH, }: TextAreaProps) => import("react/jsx-runtime").JSX.Element;
export {};
