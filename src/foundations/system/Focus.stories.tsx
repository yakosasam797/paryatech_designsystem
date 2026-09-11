import type { Meta, StoryObj } from '@storybook/react-vite';
import { FocusFoundation } from './FoundationCatalog';
const meta = { title: 'Foundations/Focus', component: FocusFoundation, parameters: { layout: 'fullscreen' }, tags: ['autodocs'] } satisfies Meta<typeof FocusFoundation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const System: Story = {};
