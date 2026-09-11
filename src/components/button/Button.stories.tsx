import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import '../story-layout.css';
const meta = { title: 'Components/Actions/Button', component: Button, tags: ['autodocs'], args: { children: 'Request documents', variant: 'primary', size: 'medium' } } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Variants: Story = { render: () => <div className="ds-story"><div className="ds-story-stack"><div className="ds-story-row"><Button icon="Upload">Request documents</Button><Button size="medium">Save changes</Button></div><div className="ds-story-row"><Button variant="outline">View</Button><Button tone="brand" variant="outline">Add traveller</Button></div><div className="ds-story-row"><Button variant="ghost">Send reminder</Button><Button variant="destructive">Cancel booking</Button></div></div></div> };
export const LoadingAndDisabled: Story = { render: () => <div className="ds-story"><div className="ds-story-row"><Button loading>Save changes</Button><Button disabled>Save changes</Button><Button disabled variant="outline">View</Button></div></div> };
