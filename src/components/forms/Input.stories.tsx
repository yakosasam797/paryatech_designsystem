import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Fields';
import '../story-layout.css';
const meta = { title: 'Components/Forms/Input', component: Input, tags: ['autodocs'], args: { label: 'Traveller name', placeholder: 'Enter full name' } } satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const States: Story = { render: () => <div className="ds-story"><div className="ds-story-stack"><Input label="Default" placeholder="Enter value" /><Input autoFocus defaultValue="Focused value" label="Focused" /><Input error="Explain how to fix this field." label="Error" defaultValue="Invalid value" /><Input disabled label="Disabled" value="Unavailable" /><Input dataValue label="Booking reference" value="BK-2026-000003" readOnly /></div></div> };
