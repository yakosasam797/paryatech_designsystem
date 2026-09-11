import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Fields';
import '../story-layout.css';
const meta = { title: 'Components/Forms/Select', component: Select, tags: ['autodocs'], args: { label: 'Document type', placeholder: 'Choose an option', children: <><option>Passport</option><option>Visa</option><option>Insurance</option></> } } satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const States: Story = { render: () => <div className="ds-story"><div className="ds-story-stack"><Select label="Default" placeholder="Choose an option"><option>Passport</option></Select><Select defaultValue="Passport" label="Selected"><option>Passport</option><option>Visa</option></Select><Select error="Select a valid option." label="Error" placeholder="Choose an option"><option>Passport</option></Select><Select disabled label="Disabled" value="Passport"><option>Passport</option></Select></div></div> };
