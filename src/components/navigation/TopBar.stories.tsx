import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';
import { TopBar } from './Navigation';

const figmaSource = 'https://www.figma.com/design/2uayhHpYDyrue0XL4o2Zwt/PRD--Copy-?node-id=68-10';

const meta = {
  title: 'Components/Navigation/Top bar',
  component: TopBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: `Implementation contract: finalized Figma node [68:10](${figmaSource}). The desktop composition is 1268 × 72 with a 560px search, flexible spacer, 220px role switch, four 40px utility controls, and icon-only account control.` } },
  },
} satisfies Meta<typeof TopBar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const FinalizedDesktop: Story = {
  name: 'Finalized desktop · Figma 68:10',
  args: { role: 'Admin' },
  parameters: { docs: { description: { story: `Source of truth: [open the finalized TopBar in Figma](${figmaSource}). This story intentionally excludes the sidebar and application selector.` } } },
  render: (args) => <div style={{ width: 1268, maxWidth: 'none' }}><TopBar {...args} /></div>,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const topbar = canvasElement.querySelector<HTMLElement>('[data-figma-node="68:10"]');
    const search = canvasElement.querySelector<HTMLElement>('[data-figma-node="67:28"]');
    const role = canvas.getByRole('group', { name: 'Preview permission role' });
    const utilities = ['Settings', 'Information', 'Contact support', 'Notifications, unread'];
    await expect(topbar).toHaveStyle({ height: '72px', paddingLeft: '28px', paddingRight: '28px', columnGap: '20px' });
    await expect(search).toHaveStyle({ width: '560px', height: '44px' });
    await expect(canvas.getByRole('button', { name: 'Change search scope, currently Query' })).toHaveStyle({ height: '32px' });
    await expect(role).toHaveStyle({ width: '220px', height: '40px' });
    for (const name of utilities) await expect(canvas.getByRole('button', { name })).toHaveStyle({ width: '40px', height: '40px' });
    await expect(canvas.getByRole('button', { name: 'Open account menu' })).toHaveStyle({ width: '58px', height: '40px' });
  },
};
