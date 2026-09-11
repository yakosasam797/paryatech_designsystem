import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';
import { iconRegistry } from './icons';
import '../story-layout.css';
const meta = { title: 'Components/Icon', component: Icon, tags: ['autodocs'], args: { name: 'Search', size: 'm', tone: 'default' } } satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};
export const Sizing: Story = { render: () => <div className="ds-story"><div className="ds-story-row">{(['s','m','l','xl'] as const).map((size) => <div className="ds-story-card" key={size}><Icon name="Search" size={size} /><code>Icon/{size.toUpperCase()}</code></div>)}</div></div> };
export const Catalog: Story = { render: () => <div className="ds-story"><div className="ds-story__header"><TextBlock /></div><div className="ds-icon-catalog">{Object.keys(iconRegistry).map((name) => <article key={name}><Icon name={name as keyof typeof iconRegistry} size="l" /><code>{name}</code></article>)}</div></div> };
function TextBlock() { return <><span className="type-overline">OFFICIAL LUCIDE MASTERS</span><h1 className="type-heading-page">Icon library</h1><p className="type-body-md">Canonical 24×24 Lucide geometry with two-pixel round strokes. Components select documented optical sizes; raw vectors are never resized.</p></>; }
