import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ author, date, mode }: import("@components/AuthorDate/AuthorDate").AuthorDateProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        author: {
            control: "text";
        };
        date: {
            control: "date";
        };
    };
    args: {
        date: Date;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const CustomAuthor: Story;
export declare const WithDifferentDate: Story;
