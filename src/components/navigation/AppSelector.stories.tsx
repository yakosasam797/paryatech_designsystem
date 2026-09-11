import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { AppSelector } from './Navigation';
import '../story-layout.css';

const applications = [
  { id: 'bookings', name: 'Bookings', shortName: 'BK' },
  { id: 'crm', name: 'Customer CRM', shortName: 'CR' },
  { id: 'proposals', name: 'Proposals', shortName: 'PR' },
  { id: 'finance', name: 'Finance', shortName: 'FN' },
];

function InteractiveSelector() {
  const [selected, setSelected] = useState('bookings');
  return <AppSelector applications={applications} onChange={setSelected} selectedId={selected} />;
}

const meta = {
  title: 'Components/Navigation/App selector',
  component: AppSelector,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'A product-context switcher derived from the approved Menu, control-height, focus, typography, and overlay contracts. It is intentionally independent from the Sidebar.' } } },
} satisfies Meta<typeof AppSelector>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { applications, selectedId: 'bookings' },
  render: () => <div style={{ minHeight: 340 }}><InteractiveSelector /></div>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /Switch application/ }));
    await userEvent.click(canvas.getByRole('option', { name: 'Customer CRM' }));
    await expect(canvas.getByRole('button', { name: /Customer CRM/ })).toHaveAttribute('aria-expanded', 'false');
  },
};
