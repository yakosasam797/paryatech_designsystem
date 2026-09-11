import type { Meta, StoryObj } from '@storybook/react-vite';
import { SizingFoundation } from './FoundationCatalog';
const meta = { title: 'Foundations/Sizing', component: SizingFoundation, parameters: { layout: 'fullscreen' }, tags: ['autodocs'] } satisfies Meta<typeof SizingFoundation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const IconAndControlSizing: Story = { name: 'Icon & control sizing' };
