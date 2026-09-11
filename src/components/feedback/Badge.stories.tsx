import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Feedback';
import '../story-layout.css';
const meta = { title: 'Components/Feedback/Badge', component: Badge, tags: ['autodocs'], args: { children: '12' } } satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Variants: Story = { render: () => <div className="ds-story"><div className="ds-story-row"><Badge count>12</Badge><Badge>International</Badge><Badge selected>Selected</Badge><Badge disabled>Unavailable</Badge></div></div> };
