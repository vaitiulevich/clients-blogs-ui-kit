import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ icon, disabled, ...props }: import("@components/IconButton/IconButton").IconButtonProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
