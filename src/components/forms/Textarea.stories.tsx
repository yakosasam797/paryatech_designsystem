import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './Fields';
import '../story-layout.css';
const meta = { title: 'Components/Forms/Textarea', component: Textarea, tags: ['autodocs'], args: { label: 'Internal note', placeholder: 'Add details for the operations team' } } satisfies Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const States: Story = { render: () => <div className="ds-story"><div className="ds-story-stack"><Textarea label="Default" placeholder="Enter details" /><Textarea error="The note must be under 500 characters." label="Error" defaultValue="This value needs correction." /><Textarea disabled label="Disabled" value="This note cannot be edited." /></div></div> };
