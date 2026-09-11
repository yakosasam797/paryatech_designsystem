import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Tabs, type TabDefinition } from './Navigation';
import '../story-layout.css';

const bookingTabs: TabDefinition[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'services', label: 'Services & Vendors', count: 2 },
  { id: 'tasks', label: 'Fulfilment & Tasks', count: 4 },
  { id: 'travellers', label: 'Travellers' },
  { id: 'finance', label: 'Finance', count: 1 },
  { id: 'documents', label: 'Documents', count: 3 },
  { id: 'vouchers', label: 'Vouchers' },
  { id: 'communication', label: 'Communication', count: 2 },
  { id: 'activity', label: 'Activity' },
];

function InteractiveTabs({ initial = 'overview', items = bookingTabs }: { initial?: string; items?: TabDefinition[] }) {
  const [active, setActive] = useState(initial);
  return <Tabs activeId={active} ariaLabel="Booking sections" items={items} onChange={setActive} />;
}

const meta = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'A 44px horizontal view switcher. Counts are reserved for action-required, unread, or unresolved items—not decorative totals.' } } },
} satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const BookingNavigation: Story = {
  args: { activeId: 'documents', ariaLabel: 'Booking sections', items: bookingTabs },
  render: () => <InteractiveTabs initial="documents" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('tab', { name: /Finance/ }));
    await expect(canvas.getByRole('tab', { name: /Finance/ })).toHaveAttribute('aria-selected', 'true');
  },
};
export const CompactSet: Story = { args: { activeId: 'all', ariaLabel: 'Query views', items: [] }, render: () => <InteractiveTabs items={[{ id: 'all', label: 'All' }, { id: 'mine', label: 'Mine', count: 6 }, { id: 'unassigned', label: 'Unassigned', count: 3 }, { id: 'archived', label: 'Archived', disabled: true }]} /> };
