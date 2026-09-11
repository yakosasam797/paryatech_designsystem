import type { Meta, StoryObj } from '@storybook/react-vite';
import { Status } from './Feedback';
import '../story-layout.css';
const meta = { title: 'Components/Feedback/Status', component: Status, tags: ['autodocs'], args: { children: 'Verified', tone: 'success', showDot: true } } satisfies Meta<typeof Status>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const SemanticTones: Story = { render: () => <div className="ds-story"><div className="ds-story-row"><Status tone="success">Confirmed</Status><Status tone="warning">Documents due</Status><Status tone="danger">Payment overdue</Status><Status tone="info">In review</Status><Status tone="neutral">Draft</Status></div></div> };
