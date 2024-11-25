// import type { Meta, StoryObj } from '@storybook/react'
// import { fn } from '@storybook/test'
// import { Select } from './Select'

// const meta = {
//   title: 'UI/Select',
//   component: Select,
//   parameters: {
//     layout: 'fullscreen',
//   },
//   tags: ['autodocs'],
// } satisfies Meta<typeof Select>

// export default meta
// type Story = StoryObj<typeof meta>

// const options = [
//   { value: 'option1', label: 'Option 1' },
//   { value: 'option2', label: 'Option 2' },
//   { value: 'option3', label: 'Option 3' },
// ]

// export const Default: Story = {
//   args: {
//     options: options,
//     value: '',
//     onChange: fn(),
//     placeholder: 'Select an option',
//     disabled: false,
//     error: undefined,
//   },
//   parameters: {
//     viewport: { defaultViewport: 'reset' },
//   },
// }

// export const WithError: Story = {
//   args: {
//     options: options,
//     value: '',
//     onChange: fn(),
//     placeholder: 'Select an option',
//     disabled: false,
//     error: 'Selection is required',
//   },
//   parameters: {
//     viewport: { defaultViewport: 'reset' },
//   },
// }

// export const Disabled: Story = {
//   args: {
//     options: options,
//     value: 'option1',
//     onChange: fn(),
//     placeholder: 'Select an option',
//     disabled: true,
//     error: undefined,
//   },
//   parameters: {
//     viewport: { defaultViewport: 'reset' },
//   },
// }
