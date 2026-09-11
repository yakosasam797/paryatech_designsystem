import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Navigation';
import '../story-layout.css';

const meta = {
  title: 'Components/Identity/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: { name: 'Ananya Rao', size: 32, tone: 'accent' },
  parameters: { docs: { description: { component: 'Initials-only identity. Tone is assigned deterministically from a stable user identifier and must never communicate status.' } } },
} satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const SizesAndTones: Story = {
  render: () => <div className="ds-story"><div className="ds-story-grid">{(['accent', 'info', 'success', 'warning'] as const).map((tone) => <article className="ds-story-card" key={tone}><h2 className="type-heading-card">{tone}</h2><div className="ds-story-row">{([20, 26, 32, 40] as const).map((size) => <Avatar key={size} name="Ananya Rao" size={size} tone={tone} />)}</div></article>)}</div></div>,
};
