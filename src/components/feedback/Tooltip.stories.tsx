import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Feedback';
import { IconButton } from '../button/Button';
import '../story-layout.css';
const meta = { title: 'Components/Feedback/Tooltip', component: Tooltip, tags: ['autodocs'], args: { content: 'Download itinerary PDF', children: <IconButton icon="Download" label="Download itinerary" /> } } satisfies Meta<typeof Tooltip>;
export default meta;
type Story = StoryObj<typeof meta>;
export const OnHoverAndFocus: Story = { render: () => <div className="ds-story" style={{ display: 'grid', placeItems: 'center' }}><Tooltip content="Download itinerary PDF"><IconButton icon="Download" label="Download itinerary" /></Tooltip></div> };
export const Placement: Story = { render: () => <div className="ds-story"><div className="ds-story-row"><Tooltip content="Shown above the trigger"><IconButton icon="CircleHelp" label="Help above" /></Tooltip><Tooltip content="Shown below the trigger" side="bottom"><IconButton icon="CircleHelp" label="Help below" /></Tooltip></div></div> };
