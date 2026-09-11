import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs } from './Navigation';
import '../story-layout.css';

const meta = {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Two- or three-level location context. Earlier levels are links; the current page is never interactive.' } } },
} satisfies Meta<typeof Breadcrumbs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const TwoLevels: Story = { args: { items: [{ label: 'Bookings', href: '#bookings' }, { label: 'Upload' }] } };
export const ThreeLevels: Story = { args: { items: [{ label: 'Bookings', href: '#bookings' }, { label: 'Documents', href: '#documents' }, { label: 'Upload' }] } };

export const Usage: Story = {
  args: { items: [{ label: 'Bookings', href: '#bookings' }, { label: 'Upload' }] },
  render: () => <div className="ds-story"><div className="ds-story__header"><span className="type-overline">LOCATION</span><h1 className="type-heading-page">Breadcrumbs</h1><p className="type-body-md">Keep the hierarchy short. If a path needs more than three levels, improve the information architecture instead of extending the component.</p></div><Breadcrumbs items={[{ label: 'Bookings', href: '#bookings' }, { label: 'Documents', href: '#documents' }, { label: 'Upload' }]} /></div>,
};
