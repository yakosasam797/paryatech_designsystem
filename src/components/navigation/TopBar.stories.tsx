import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppSelector, Breadcrumbs, Tabs, TopBar, type Role } from './Navigation';
import '../story-layout.css';

const applications = [{ id: 'bookings', name: 'Bookings', shortName: 'BK' }, { id: 'crm', name: 'Customer CRM', shortName: 'CR' }, { id: 'finance', name: 'Finance', shortName: 'FN' }];

function InteractiveTopBar() {
  const [search, setSearch] = useState('');
  const [role, setRole] = useState<Role>('Admin');
  return <TopBar onRoleChange={setRole} onSearchChange={setSearch} onSearchClear={() => setSearch('')} role={role} searchValue={search} user={{ name: 'Ananya Rao', initials: 'AR' }} />;
}

function ShellNavigation() {
  const [application, setApplication] = useState('bookings');
  const [tab, setTab] = useState('overview');
  return <div style={{ minHeight: 420, background: 'var(--color-surface-canvas)' }}><div className="ds-shell-navigation"><AppSelector applications={applications} onChange={setApplication} selectedId={application} /><div className="ds-shell-navigation__topbar"><InteractiveTopBar /></div></div><main style={{ padding: 'var(--space-32)' }}><Breadcrumbs items={[{ label: 'Bookings', href: '#bookings' }, { label: 'BK-2026-000003' }]} /><h1 className="type-heading-page" style={{ margin: 'var(--space-16) 0 var(--space-24)' }}>XYZ Family · Dubai</h1><Tabs activeId={tab} ariaLabel="Booking sections" items={[{ id: 'overview', label: 'Overview' }, { id: 'travellers', label: 'Travellers' }, { id: 'finance', label: 'Finance', count: 1 }, { id: 'documents', label: 'Documents', count: 3 }]} onChange={setTab} /></main></div>;
}

const meta = {
  title: 'Components/Navigation/Top bar',
  component: TopBar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Responsive 72px global header composed from Search, Role Switch, utility actions, and account controls. Compact mode hides role preview and contracts search.' } } },
} satisfies Meta<typeof TopBar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { args: { user: { name: 'Ananya Rao' } }, render: () => <InteractiveTopBar /> };
export const WithoutSidebar: Story = { name: 'Application shell navigation', args: { user: { name: 'Ananya Rao' } }, render: () => <ShellNavigation /> };
