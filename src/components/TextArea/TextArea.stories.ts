import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { TextArea } from './TextArea'

const meta:Meta<typeof TextArea> = {
  title: 'UI/TextArea',
  component: TextArea,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: '',
    onChange: fn(),
    placeholder: 'TextArea',
    disabled: false,
    error: undefined,
  },
  parameters: {
    viewport: { defaultViewport: 'reset' },
  },
}

export const WithError: Story = {
  args: {
    value: '',
    maxH: '5rem',
    onChange: fn(),
    placeholder: 'TextArea',
    disabled: false,
    error: 'TextAreaion',
  },
  parameters: {
    viewport: { defaultViewport: 'reset' },
  },
}
