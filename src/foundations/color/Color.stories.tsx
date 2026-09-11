import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  AppliedColorExamples,
  ColorArchitecture,
  CoreColorPalette,
  SemanticColorDocumentation,
} from './ColorFoundation';

const meta = {
  title: 'Foundations/Color',
  component: SemanticColorDocumentation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The production color contract extracted from the Figma Core and Color variable collections. Components consume semantic roles; core values remain reference-only.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SemanticColorDocumentation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SemanticTokens: Story = {
  name: 'Semantic tokens',
};

export const CorePalette: Story = {
  name: 'Core palette',
  render: () => <CoreColorPalette />,
};

export const AppliedExamples: Story = {
  name: 'Applied examples',
  render: () => <AppliedColorExamples />,
};

export const Architecture: Story = {
  render: () => <ColorArchitecture />,
};
