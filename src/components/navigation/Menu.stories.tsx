import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from './Navigation';
import '../story-layout.css';

const options = [
  { id: 'all', label: 'All options' },
  { id: 'needs-action', label: 'Needs action' },
  { id: 'completed', label: 'Completed' },
  { id: 'in-progress', label: 'In progress' },
  { id: 'restricted', label: 'Restricted' },
  { id: 'unavailable', label: 'Unavailable', disabled: true },
];

function InteractiveMenu({ searchable = false }: { searchable?: boolean }) {
  const [selected, setSelected] = useState('all');
  return <Menu ariaLabel="Status filter" items={options} onSelect={setSelected} searchable={searchable} selectedId={selected} />;
}

const meta = {
  title: 'Components/Navigation/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'A 236px selection overlay composed from governed 36px option rows. Enable search only when the real option set exceeds eight items.' } } },
} satisfies Meta<typeof Menu>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { ariaLabel: 'Status filter', items: options, selectedId: 'all' }, render: () => <InteractiveMenu /> };
export const Searchable: Story = { args: { ariaLabel: 'Status filter', items: options, selectedId: 'all', searchable: true }, render: () => <InteractiveMenu searchable /> };
