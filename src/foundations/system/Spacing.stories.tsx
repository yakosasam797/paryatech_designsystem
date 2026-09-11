import type { Meta, StoryObj } from '@storybook/react-vite';
import { SpacingFoundation } from './FoundationCatalog';
const meta = { title: 'Foundations/Spacing', component: SpacingFoundation, parameters: { layout: 'fullscreen' }, tags: ['autodocs'] } satisfies Meta<typeof SpacingFoundation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const TokenScale: Story = { name: 'Token scale' };
