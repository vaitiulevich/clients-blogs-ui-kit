import { LocaleSwitcher } from '@components/LocaleSwitcher/LocaleSwitcher'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ru', label: 'RU' },
]

const meta = {
  title: 'UI/LocaleSwitcher',
  component: LocaleSwitcher,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LocaleSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onLocaleChange: fn(),
    locales: locales,
    current: locales[0].code,
  },
  parameters: {
    viewport: { defaultViewport: 'reset' },
  },
}

// export const MobileMenu: Story = {
//   args: {
//     navItems: navItems,
//   },
//   parameters: {
//     viewport: { defaultViewport: 'mobile1' },
//   },
// };
