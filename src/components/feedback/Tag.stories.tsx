import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Feedback';
import '../story-layout.css';
const meta = { title: 'Components/Feedback/Tag', component: Tag, tags: ['autodocs'], args: { children: 'Lead traveller', tone: 'neutral' } } satisfies Meta<typeof Tag>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Tones: Story = { render: () => <div className="ds-story"><div className="ds-story-row"><Tag>Adult</Tag><Tag tone="brand">Lead traveller</Tag><Tag tone="accent">VIP</Tag></div></div> };
