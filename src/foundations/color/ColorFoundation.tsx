import { useMemo, useState } from 'react';
import {
  colorTokenMeta,
  coreColorTokens,
  getColorGroup,
  getCoreColorGroup,
  semanticColorTokens,
  type CoreColorToken,
  type SemanticColorToken,
} from '../../tokens';
import './color-foundation.css';

const semanticOrder = [
  'Surface',
  'Text',
  'Icon',
  'Border',
  'Action',
  'Status',
  'Sidebar',
  'Accent',
  'Skeleton',
  'Overlay',
  'Avatar',
];

const coreOrder = [
  'Neutral',
  'Dark',
  'Brand',
  'Accent',
  'Success',
  'Warning',
  'Danger',
  'Information',
  'Alpha',
];

type ColorHeaderProps = {
  title: string;
  description: string;
  meta: string;
};

function ColorHeader({ title, description, meta }: ColorHeaderProps) {
  return (
    <header className="pt-color-header">
      <p className="pt-color-eyebrow">FOUNDATIONS · COLOR</p>
      <h1>{title}</h1>
      <p className="pt-color-description">{description}</p>
      <p className="pt-color-meta">{meta}</p>
    </header>
  );
}

type SwatchProps = {
  value: string;
  label: string;
  inverse?: boolean;
};

function Swatch({ value, label, inverse = false }: SwatchProps) {
  return (
    <span className={`pt-swatch-cell${inverse ? ' pt-swatch-cell--dark' : ''}`}>
      <span
        aria-label={`${label}: ${value}`}
        className="pt-swatch"
        role="img"
        style={{ backgroundColor: value }}
      />
      <code>{value}</code>
    </span>
  );
}

function SemanticRow({ token }: { token: SemanticColorToken }) {
  return (
    <tr>
      <th scope="row">{token.name}</th>
      <td className="pt-token-use">{token.description}</td>
      <td>
        <Swatch label={`${token.name}, Light`} value={token.light.value} />
        <span className="pt-alias">↳ {token.light.alias}</span>
      </td>
      <td>
        <Swatch inverse label={`${token.name}, Dark`} value={token.dark.value} />
        <span className="pt-alias pt-alias--dark">↳ {token.dark.alias}</span>
      </td>
      <td>
        <code className="pt-css-syntax">var({token.css})</code>
      </td>
    </tr>
  );
}

function SemanticTable({ tokens }: { tokens: SemanticColorToken[] }) {
  const groups = useMemo(
    () =>
      semanticOrder
        .map((group) => ({ group, tokens: tokens.filter((token) => getColorGroup(token.name) === group) }))
        .filter(({ tokens: groupedTokens }) => groupedTokens.length > 0),
    [tokens],
  );

  return (
    <div className="pt-token-table-wrap">
      <table className="pt-token-table">
        <thead>
          <tr>
            <th scope="col">TOKEN</th>
            <th scope="col">USE</th>
            <th scope="col">LIGHT</th>
            <th scope="col">DARK</th>
            <th scope="col">WEB SYNTAX</th>
          </tr>
        </thead>
        <tbody>
          {groups.map(({ group, tokens: groupedTokens }) => (
            <GroupRows group={group} key={group} tokens={groupedTokens} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GroupRows({ group, tokens }: { group: string; tokens: SemanticColorToken[] }) {
  return (
    <>
      <tr className="pt-token-group-row">
        <th colSpan={5} scope="colgroup">
          {group}
        </th>
      </tr>
      {tokens.map((token) => (
        <SemanticRow key={token.name} token={token} />
      ))}
    </>
  );
}

export function SemanticColorDocumentation() {
  const [query, setQuery] = useState('');
  const filteredTokens = semanticColorTokens.filter((token) => {
    const search = `${token.name} ${token.description} ${token.css}`.toLowerCase();
    return search.includes(query.trim().toLowerCase());
  });

  return (
    <main className="pt-color-page">
      <ColorHeader
        description="Semantic color roles for content, structure, interaction and status. Every role is an alias over Core and resolves independently in Light and Dark modes."
        meta={`Collection: Color · ${colorTokenMeta.semanticCount} variables · 2 modes · Semantic aliases over Core`}
        title="Semantic color tokens"
      />
      <label className="pt-token-search">
        <span>Search tokens</span>
        <input
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try “status”, “sidebar” or “border”"
          type="search"
          value={query}
        />
        <strong>{filteredTokens.length}</strong>
      </label>
      <SemanticTable tokens={filteredTokens} />
    </main>
  );
}

function CoreCard({ token }: { token: CoreColorToken }) {
  const isDark = Number.parseInt(token.value.slice(1, 3), 16) < 90;
  return (
    <article className="pt-core-card">
      <div
        aria-label={`${token.name}: ${token.value}`}
        className="pt-core-card__swatch"
        role="img"
        style={{ backgroundColor: token.value }}
      >
        <code className={isDark ? 'pt-core-card__value pt-core-card__value--inverse' : 'pt-core-card__value'}>
          {token.value}
        </code>
      </div>
      <div className="pt-core-card__body">
        <strong>{token.name}</strong>
        <code>var({token.css})</code>
        <p>{token.description}</p>
      </div>
    </article>
  );
}

export function CoreColorPalette() {
  const groups = coreOrder
    .map((group) => ({
      group,
      tokens: coreColorTokens.filter((token) => getCoreColorGroup(token.name) === group),
    }))
    .filter(({ tokens }) => tokens.length > 0);

  return (
    <main className="pt-color-page">
      <ColorHeader
        description="Reference values from the Figma Core collection. Product components must consume semantic roles, never these values directly."
        meta={`Collection: Core · ${colorTokenMeta.coreCount} color variables · Default mode · Reference only`}
        title="Core color palette"
      />
      <aside className="pt-policy-note">
        <strong>Implementation rule</strong>
        <span>Core values may be aliased by semantic tokens. They must not appear in component CSS.</span>
      </aside>
      <div className="pt-core-groups">
        {groups.map(({ group, tokens }) => (
          <section className="pt-core-group" key={group}>
            <div className="pt-section-title">
              <h2>{group}</h2>
              <span>{tokens.length} tokens</span>
            </div>
            <div className="pt-core-grid">
              {tokens.map((token) => (
                <CoreCard key={token.name} token={token} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

const statusExamples = [
  { label: 'Confirmed', tone: 'success' },
  { label: 'Documents due', tone: 'warning' },
  { label: 'Payment overdue', tone: 'danger' },
  { label: 'In review', tone: 'info' },
  { label: 'Draft', tone: 'neutral' },
];

export function AppliedColorExamples() {
  return (
    <main className="pt-color-page">
      <ColorHeader
        description="A semantic token is named for its job, not its appearance. Toggle Light and Dark in the Storybook toolbar to verify every example."
        meta="Consumption preview · No raw hex values in component styles"
        title="Color in product UI"
      />
      <div className="pt-example-grid">
        <section className="pt-example-card">
          <span className="pt-card-overline">INTERACTION</span>
          <h2>Actions retain their own hierarchy</h2>
          <p>Status color never determines the color of an action.</p>
          <div className="pt-actions">
            <button className="pt-button pt-button--primary" type="button">Request documents</button>
            <button className="pt-button pt-button--secondary" type="button">View booking</button>
            <button className="pt-button pt-button--tertiary" type="button">Open traveller</button>
            <button className="pt-button pt-button--danger" type="button">Cancel booking</button>
          </div>
        </section>
        <section className="pt-example-card">
          <span className="pt-card-overline">SEMANTIC STATUS</span>
          <h2>Outcome is consistent everywhere</h2>
          <p>Background, border and foreground always move as a controlled set.</p>
          <div className="pt-status-list">
            {statusExamples.map(({ label, tone }) => (
              <span className={`pt-status pt-status--${tone}`} key={tone}>
                <i /> {label}
              </span>
            ))}
          </div>
        </section>
        <section className="pt-example-card pt-example-card--wide">
          <span className="pt-card-overline">SURFACE HIERARCHY</span>
          <div className="pt-surface-demo">
            <div className="pt-surface-demo__canvas">
              Canvas
              <div className="pt-surface-demo__default">
                Default
                <div className="pt-surface-demo__subtle">Subtle</div>
                <div className="pt-surface-demo__selected">Selected row</div>
              </div>
              <div className="pt-surface-demo__raised">Raised</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export function ColorArchitecture() {
  return (
    <main className="pt-color-page">
      <ColorHeader
        description="A three-layer contract keeps Figma, Storybook and product code aligned without coupling components to palette values."
        meta="Governance · Core → Semantic → Component consumption"
        title="Color architecture"
      />
      <div className="pt-architecture">
        <article>
          <span>01</span>
          <h2>Core references</h2>
          <code>--ref-brand-700</code>
          <p>Stable color values. Never consumed directly by product components.</p>
        </article>
        <b aria-hidden="true">→</b>
        <article>
          <span>02</span>
          <h2>Semantic roles</h2>
          <code>--color-text-link</code>
          <p>Intent-based aliases with Light and Dark mode mappings.</p>
        </article>
        <b aria-hidden="true">→</b>
        <article>
          <span>03</span>
          <h2>Components</h2>
          <code>color: var(--color-text-link)</code>
          <p>Components consume roles and remain independent from palette changes.</p>
        </article>
      </div>
      <section className="pt-governance">
        <div>
          <h2>Create a token when</h2>
          <ul>
            <li>The role repeats across multiple components.</li>
            <li>Light and Dark need separate values.</li>
            <li>The role carries stable product meaning.</li>
          </ul>
        </div>
        <div>
          <h2>Do not create one when</h2>
          <ul>
            <li>A value appears once without semantic meaning.</li>
            <li>An existing role already describes the intent.</li>
            <li>The name describes a visual hex rather than a job.</li>
          </ul>
        </div>
        <div>
          <h2>Agent checklist</h2>
          <ul>
            <li>Use semantic CSS variables only.</li>
            <li>Test both modes and interactive states.</li>
            <li>Never infer status color from an action.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
