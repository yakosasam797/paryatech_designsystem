import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './Selection';
import '../story-layout.css';
const meta = { title: 'Components/Selection/Radio', component: Radio, tags: ['autodocs'], args: { label: 'Email', name: 'channel' } } satisfies Meta<typeof Radio>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Group: Story = { render: () => <fieldset className="ds-story-card"><legend className="type-heading-card">Delivery channel</legend><div className="ds-story-stack"><Radio defaultChecked label="WhatsApp" name="delivery" value="whatsapp" /><Radio label="Email" name="delivery" value="email" /><Radio disabled label="SMS unavailable" name="delivery" value="sms" /></div></fieldset> };
