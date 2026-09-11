import type { Meta, StoryObj } from '@storybook/react-vite';
import { ResponsiveFoundation } from './FoundationCatalog';
const meta = { title: 'Foundations/Responsive', component: ResponsiveFoundation, parameters: { layout: 'fullscreen' }, tags: ['autodocs'] } satisfies Meta<typeof ResponsiveFoundation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const BreakpointsAndModes: Story = { name: 'Breakpoints & modes' };
