import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from './Typography';
import '../story-layout.css';

const meta = { title: 'Components/Typography/Heading', component: Heading, tags: ['autodocs'], args: { children: 'Traveller documents', variant: 'section' } } satisfies Meta<typeof Heading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Hierarchy: Story = { render: () => <div className="ds-story"><div className="ds-story-stack"><Heading as="h1" variant="display">Operational clarity at scale</Heading><Heading as="h1" variant="page">XYZ Family · Dubai</Heading><Heading variant="section">Manage margin</Heading><Heading variant="card">Traveller documents</Heading><Heading variant="compact">Priya XYZ</Heading></div></div> };
