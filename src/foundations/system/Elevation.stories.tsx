import type { Meta, StoryObj } from '@storybook/react-vite';
import { ElevationFoundation } from './FoundationCatalog';
const meta = { title: 'Foundations/Elevation', component: ElevationFoundation, parameters: { layout: 'fullscreen' }, tags: ['autodocs'] } satisfies Meta<typeof ElevationFoundation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Styles: Story = {};
