import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ locales, onLocaleChange, current }: import("@components/LocaleSwitcher/LocaleSwitcher").LocaleSwitcherProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
