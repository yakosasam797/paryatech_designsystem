import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Selection';
import '../story-layout.css';
const meta = { title: 'Components/Selection/Checkbox', component: Checkbox, tags: ['autodocs'], args: { label: 'Select traveller', checked: false } } satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const SelectionStates: Story = { render: () => <div className="ds-story"><div className="ds-story-stack"><Checkbox label="Unchecked" /><Checkbox checked label="Checked" readOnly /><Checkbox checked="mixed" label="Mixed selection" readOnly /><Checkbox disabled label="Disabled" /></div></div> };
