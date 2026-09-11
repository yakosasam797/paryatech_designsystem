import type { Meta, StoryObj } from '@storybook/react-vite';
import { VisualLanguageFoundation } from './FoundationCatalog';

const meta = { title: 'Foundations/Visual language', component: VisualLanguageFoundation, parameters: { layout: 'fullscreen' }, tags: ['autodocs'] } satisfies Meta<typeof VisualLanguageFoundation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const SystemOverview: Story = { name: 'System overview' };
