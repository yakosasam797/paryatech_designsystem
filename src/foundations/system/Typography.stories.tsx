import type { Meta, StoryObj } from '@storybook/react-vite';
import { TypographyFoundation } from './FoundationCatalog';

const meta = { title: 'Foundations/Typography', component: TypographyFoundation, parameters: { layout: 'fullscreen' }, tags: ['autodocs'] } satisfies Meta<typeof TypographyFoundation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const PublishedStyles: Story = { name: 'Published styles' };
