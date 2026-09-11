import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadiusFoundation } from './FoundationCatalog';
const meta = { title: 'Foundations/Corner radius', component: RadiusFoundation, parameters: { layout: 'fullscreen' }, tags: ['autodocs'] } satisfies Meta<typeof RadiusFoundation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const TokenScale: Story = { name: 'Token scale' };
