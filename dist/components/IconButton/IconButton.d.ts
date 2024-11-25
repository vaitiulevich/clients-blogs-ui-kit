export interface IconButtonProps {
    onClick?: () => void;
    icon: {
        src: string;
        alt: string;
    };
    disabled?: boolean;
}
export declare const IconButton: ({ icon, disabled, ...props }: IconButtonProps) => import("react/jsx-runtime").JSX.Element;
