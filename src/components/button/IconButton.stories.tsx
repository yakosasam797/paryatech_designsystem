import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './Button';
import '../story-layout.css';
const meta = { title: 'Components/Actions/IconButton', component: IconButton, tags: ['autodocs'], args: { label: 'More actions', icon: 'Ellipsis', size: 'row', shape: 'square' } } satisfies Meta<typeof IconButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const SizesAndStates: Story = { render: () => <div className="ds-story"><div className="ds-story-row"><IconButton icon="Eye" label="View booking" /><IconButton active icon="ListFilter" label="Filters active" /><IconButton disabled icon="Trash2" label="Delete unavailable" /><IconButton icon="Settings2" label="Settings" shape="circle" size="toolbar" /></div></div> };
