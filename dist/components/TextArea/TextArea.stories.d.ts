import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';
declare const meta: Meta<typeof TextArea>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithError: Story;
