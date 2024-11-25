import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ size, backgroundColor, label, isNavigate, type, disabled, ...props }: import("@components/Button/Button").ButtonProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        backgroundColor: {
            control: "color";
        };
    };
    args: {
        onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const WithIcon: Story;
