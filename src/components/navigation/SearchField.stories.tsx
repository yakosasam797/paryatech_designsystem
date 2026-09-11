import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { SearchField } from './Navigation';
import '../story-layout.css';

function SearchDemo({ initial = '', disabled = false, scope }: { initial?: string; disabled?: boolean; scope?: string }) {
  const [value, setValue] = useState(initial);
  return <div style={{ width: 360 }}><SearchField disabled={disabled} label="Search bookings" onChange={(event) => setValue(event.target.value)} onClear={() => setValue('')} placeholder="Search" scope={scope} value={value} /></div>;
}

const meta = {
  title: 'Components/Navigation/Search field',
  component: SearchField,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Responsive 40px search control for toolbars and filtered views. It expands before adjacent filters and may carry one compact scope label.' } } },
} satisfies Meta<typeof SearchField>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: 'Search bookings', placeholder: 'Search' }, render: () => <SearchDemo /> };
export const Populated: Story = {
  args: { label: 'Search bookings', value: 'Dubai' },
  render: () => <SearchDemo initial="Dubai" scope="Bookings" />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: 'Clear search' }));
    await expect(canvas.getByRole('searchbox', { name: 'Search bookings' })).toHaveValue('');
  },
};
export const Disabled: Story = { args: { disabled: true, label: 'Search bookings' }, render: () => <SearchDemo disabled /> };
