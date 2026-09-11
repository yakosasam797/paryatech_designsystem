import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Typography';
import '../story-layout.css';
const meta = { title: 'Components/Typography/Text', component: Text, tags: ['autodocs'], args: { children: 'Documents verified against originals', variant: 'body-md' } } satisfies Meta<typeof Text>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Roles: Story = { render: () => <div className="ds-story"><div className="ds-story-stack"><Text variant="body-lg">Large body for introductions and relaxed content.</Text><Text variant="body-md">Default product body and table content.</Text><Text variant="body-sm">Secondary operational information.</Text><Text variant="label-md">Request documents</Text><Text variant="label-sm">View booking</Text><Text variant="caption">Lead traveller · Adult · Indian</Text><Text variant="overline">DOCUMENT</Text><Text variant="data-md">₹ 1,20,000</Text><Text variant="data-sm">BK-2026-000003</Text></div></div> };
