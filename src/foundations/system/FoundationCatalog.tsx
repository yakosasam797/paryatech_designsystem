import {
  elevationTokens,
  focusTokens,
  radiusTokens,
  responsiveTokens,
  sizingTokens,
  spacingTokens,
  typographyStyles,
  type NumericFoundationToken,
} from '../../tokens';
import './foundation-catalog.css';

type HeaderProps = { eyebrow: string; title: string; description: string; meta: string };

export function FoundationHeader({ eyebrow, title, description, meta }: HeaderProps) {
  return (
    <header className="ds-foundation-header">
      <p className="type-overline">{eyebrow}</p>
      <h1 className="type-display-lg">{title}</h1>
      <p className="type-body-md">{description}</p>
      <span className="type-caption">{meta}</span>
    </header>
  );
}

const visualLanguagePillars = [
  { index: '01', name: 'Color', contract: 'Reference palette → semantic roles → component states', detail: 'Warm neutrals establish the operational canvas; teal owns interaction; pink is a controlled identity accent; status colors carry meaning only.' },
  { index: '02', name: 'Typography', contract: 'Onest identity + Public Sans product language', detail: 'A restrained hierarchy separates page, section, card, UI, metadata, and tabular data without introducing a third font.' },
  { index: '03', name: 'Spacing', contract: 'Dense internals + calm page rhythm', detail: '2–10px is component anatomy, 12–24px is component composition, and 32–80px establishes page structure.' },
  { index: '04', name: 'Sizing', contract: '32 / 34 / 40 / 44 control ladder', detail: 'Optical icon sizes, control height, row density, avatar scale, and accessible hit areas are coordinated instead of independently resized.' },
  { index: '05', name: 'Corner radius', contract: '6 → 8 → 10 → 12 → 16 → 20', detail: 'Shape communicates function: selection, dense control, field, card, panel, then overlay. Full-round is reserved for identity and status.' },
];

export function VisualLanguageFoundation() {
  return (
    <main className="ds-foundation-page">
      <FoundationHeader eyebrow="FOUNDATIONS · SYSTEM" title="Visual language" description="The brand is not a palette applied after layout. It is the repeated relationship between color, type, spacing, size and corner geometry—supported by border, focus, elevation, icon and responsive rules." meta="Figma variables → versioned tokens → React components → product screens" />
      <section className="ds-language-signature" aria-label="Paryatech visual signature">
        <div className="ds-language-signature__identity"><span className="type-overline">BOOKING READINESS</span><strong className="type-heading-section">XYZ Family · Dubai</strong><p className="type-body-sm">Documents, suppliers and payments aligned for departure.</p></div>
        <div className="ds-language-signature__metric"><span className="type-overline">TO COLLECT</span><strong className="type-data-md">₹ 1,20,000</strong><span className="type-caption">Due 18 Sep</span></div>
        <button className="ds-language-signature__action" type="button">Review booking</button>
      </section>
      <section className="ds-language-pipeline" aria-label="Token architecture">
        <article><span>1</span><div><strong>Reference</strong><p>Raw, stable source values. Never consumed by product components.</p></div></article>
        <i aria-hidden="true" />
        <article><span>2</span><div><strong>Semantic</strong><p>Intent-based roles such as surface, text, action, compact control, and card.</p></div></article>
        <i aria-hidden="true" />
        <article><span>3</span><div><strong>Component</strong><p>Documented APIs that consume roles consistently in every state and mode.</p></div></article>
      </section>
      <div className="ds-language-grid">{visualLanguagePillars.map((pillar) => <article key={pillar.name}><span className="type-overline">{pillar.index}</span><h2 className="type-heading-card">{pillar.name}</h2><strong className="type-label-sm">{pillar.contract}</strong><p className="type-body-sm">{pillar.detail}</p></article>)}</div>
      <SectionTitle title="Supporting identity decisions" meta="Required, not decorative" />
      <Rules items={[
        ['Border', 'One-pixel structure is the default. Use stronger widths only for selected state, compact selection controls, focus, and notification separation.'],
        ['Focus', 'A two-pixel keyboard ring with a two-pixel gap provides a consistent interaction signature across controls and themes.'],
        ['Elevation', 'Depth explains raised, floating, overlay, or overflow relationships. It does not decorate ordinary cards.'],
        ['Icon', 'Lucide 24px masters scale through approved 12, 16, 20, and 24px optical roles and always inherit semantic color.'],
        ['Responsive', 'Density changes through layout roles and component behavior—not by proportionally shrinking the entire interface.'],
      ]} />
    </main>
  );
}

function TokenTable({ tokens, sample }: { tokens: NumericFoundationToken[]; sample: 'space' | 'radius' | 'size' | 'focus' }) {
  return (
    <div className="ds-token-table-wrap">
      <table className="ds-token-table">
        <thead><tr><th>TOKEN</th><th>USE</th><th>CORE SOURCE</th><th>VALUE</th><th>SAMPLE</th><th>WEB SYNTAX</th></tr></thead>
        <tbody>
          {tokens.map((token) => (
            <tr key={token.name}>
              <th scope="row">{token.name}</th>
              <td>{token.description}</td>
              <td><code>{token.alias ?? 'Core primitive'}</code></td>
              <td><strong>{token.value}{token.unit === 'number' ? '' : 'px'}</strong></td>
              <td><TokenSample sample={sample} token={token} /></td>
              <td><code>var({token.css})</code></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TokenSample({ token, sample }: { token: NumericFoundationToken; sample: 'space' | 'radius' | 'size' | 'focus' }) {
  if (sample === 'radius') return <span className="ds-radius-sample" style={{ borderRadius: Math.min(token.value, 999) }} />;
  if (sample === 'focus') return <button className="ds-focus-sample" type="button">Focus me</button>;
  const size = Math.min(Math.max(token.value, 2), sample === 'space' ? 100 : 72);
  return <span className={`ds-linear-sample ds-linear-sample--${sample}`} style={{ width: size, height: sample === 'size' ? size : 8 }} />;
}

export function TypographyFoundation() {
  return (
    <main className="ds-foundation-page">
      <FoundationHeader eyebrow="FOUNDATIONS · TYPOGRAPHY" title="Typography" description="A role-based type system for hierarchy, dense product UI and aligned operational data. Onest carries identity; Public Sans carries UI, body and data." meta={`${typographyStyles.length} published styles · 2 approved families · no JetBrains Mono`} />
      <div className="ds-type-table-wrap">
        <table className="ds-token-table ds-type-table">
          <thead><tr><th>STYLE</th><th>SPECIMEN</th><th>SPECIFICATION</th><th>USE</th><th>CLASS</th></tr></thead>
          <tbody>{typographyStyles.map((style) => (
            <tr key={style.name}>
              <th scope="row">{style.name}</th>
              <td><span className={style.className}>{specimenFor(style.name)}</span></td>
              <td><code>{style.size} / {style.lineHeight} / {style.weight} / {style.family}</code></td>
              <td>{style.description}</td>
              <td><code>.{style.className}</code></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <Rules items={[
        ['Hierarchy', 'One page heading per primary page region. Step down through section, card and compact headings without skipping by appearance.'],
        ['Data', 'Use Public Sans Medium with tabular numerals for aligned money, dates, counts and identifiers.'],
        ['Accessibility', 'Never reduce text below Caption/Default for product content, and never use weight or color as the only hierarchy cue.'],
      ]} />
    </main>
  );
}

function specimenFor(name: string) {
  if (name === 'Display/Large') return 'Operational clarity at scale';
  if (name === 'Heading/Page') return 'XYZ Family · Dubai';
  if (name.startsWith('Heading/')) return name.includes('Section') ? 'Manage margin' : name.includes('Card') ? 'Traveller documents' : 'Priya XYZ';
  if (name.startsWith('Data/')) return name.endsWith('Medium') ? '₹ 1,20,000' : 'BK-2026-000003';
  if (name.startsWith('Overline')) return 'DOCUMENT';
  if (name.startsWith('Label/')) return 'Request documents';
  if (name.startsWith('Caption')) return 'Lead traveller · Adult · Indian';
  return 'Documents verified against originals';
}

export function SpacingFoundation() {
  return <main className="ds-foundation-page"><FoundationHeader eyebrow="FOUNDATIONS · GEOMETRY" title="Spacing" description="A controlled numeric scale for layout rhythm. Samples are bound to published tokens, not approximations." meta={`${spacingTokens.length} published tokens · px units · auto-layout gap and padding`} /><TokenTable tokens={spacingTokens} sample="space" /><Rules items={[["Component first", "Use a component token when one exists; use the scale only for new layout composition."],["No arbitrary values", "A value outside the scale requires a design-system decision, not a local CSS exception."],["Rhythm", "Reserve 2–10px for internals, 12–24px for components and 32–80px for page structure."]]} /></main>;
}

export function RadiusFoundation() {
  return <main className="ds-foundation-page"><FoundationHeader eyebrow="FOUNDATIONS · GEOMETRY" title="Corner radius" description="A semantic shape hierarchy that makes function visible and avoids indiscriminate pills or inflated card rounding." meta={`${radiusTokens.length} published tokens · reference scale → component roles → focus geometry`} /><div className="ds-radius-language"><span style={{ borderRadius: 'var(--radius-component-checkbox)' }}>Selection<br /><b>6px</b></span><span style={{ borderRadius: 'var(--radius-component-compact-control)' }}>Dense control<br /><b>8px</b></span><span style={{ borderRadius: 'var(--radius-component-field-and-button)' }}>Field / button<br /><b>10px</b></span><span style={{ borderRadius: 'var(--radius-component-card)' }}>Card<br /><b>12px</b></span><span style={{ borderRadius: 'var(--radius-component-panel-and-table)' }}>Panel / table<br /><b>16px</b></span><span style={{ borderRadius: 'var(--radius-component-modal-and-drawer)' }}>Modal / drawer<br /><b>20px</b></span></div><TokenTable tokens={radiusTokens} sample="radius" /><Rules items={[["Meaning", "Use full round only for status, avatar and truly circular controls."],["Progression", "Radius increases with container scale and layer responsibility; it is not selected by visual preference."],["Focus", "Outer focus radii are intentionally two pixels larger than component geometry."],["Prohibited", "Do not convert buttons, tags, cards, or table actions into capsules unless their semantic role explicitly requires full round."]]} /></main>;
}

export function ElevationFoundation() {
  return (
    <main className="ds-foundation-page">
      <FoundationHeader eyebrow="FOUNDATIONS · DEPTH" title="Elevation" description="Four purposeful depth levels. Borders establish structure; elevation communicates layering, floating or overflow." meta={`${elevationTokens.length} effect styles · neutral shadow source`} />
      <div className="ds-elevation-grid">{elevationTokens.map((token) => <article key={token.name} style={{ boxShadow: `var(${token.css})` }}><span className="type-overline">{token.name}</span><h2 className="type-heading-card">Layered surface</h2><p className="type-body-sm">{token.description}</p><code>var({token.css})</code></article>)}</div>
      <Rules items={[["Raised", "Use for sticky or lifted cards, not every bordered container."],["Floating", "Use for detached controls and sticky toolbars."],["Overlay", "Use for menus, popovers, drawers and modals."],["Overflow", "Use at a sticky table edge to reveal additional horizontal content."]]} />
    </main>
  );
}

export function SizingFoundation() {
  const controls = sizingTokens.filter((token) => token.name.startsWith('Control/') || token.name.startsWith('Accessibility/'));
  const icons = sizingTokens.filter((token) => token.name.startsWith('Icon/'));
  const rest = sizingTokens.filter((token) => !controls.includes(token) && !icons.includes(token));
  return <main className="ds-foundation-page"><FoundationHeader eyebrow="FOUNDATIONS · GEOMETRY" title="Sizing & density" description="Role tokens coordinate control heights, icon optics, hit targets, avatars, navigation and table density. Visible geometry and accessible target size are related but not always identical." meta={`${sizingTokens.length} published tokens · component roles over Core sizing`} /><div className="ds-control-ladder"><span><i style={{ height: 'var(--size-control-xs)' }} />32px<strong>XS utility</strong></span><span><i style={{ height: 'var(--size-control-compact)' }} />34px<strong>Compact row</strong></span><span><i style={{ height: 'var(--size-control-standard)' }} />40px<strong>Standard</strong></span><span><i style={{ height: 'var(--size-control-large)' }} />44px<strong>Large / target</strong></span></div><SectionTitle title="Control heights" meta="32 · 34 · 40 · 44" /><TokenTable tokens={controls} sample="size" /><SectionTitle title="Icon sizing" meta="12 · 16 · 20 · 24" /><TokenTable tokens={icons} sample="size" /><SectionTitle title="Component sizing" meta={`${rest.length} roles`} /><TokenTable tokens={rest} sample="size" /><Rules items={[["Optical pairing", "Use 16px icons inside standard fields and most buttons; reserve 20px for prominent utilities and navigation."],["Hit targets", "A visible 20px checkbox still lives inside a minimum 44px interactive target."],["Density", "Use 56px table rows for compact operations and 64px where values need a second line; do not invent intermediate row heights."]]} /></main>;
}

export function ResponsiveFoundation() {
  const modes = ['Compact Desktop', 'Standard Desktop', 'Wide Desktop'];
  return (
    <main className="ds-foundation-page">
      <FoundationHeader eyebrow="FOUNDATIONS · RESPONSIVE" title="Breakpoints & layout modes" description="Figma modes are selected manually; production CSS switches the same role tokens automatically at desktop breakpoints." meta={`${responsiveTokens.length} tokens · 3 desktop modes · mobile and tablet references`} />
      <div className="ds-token-table-wrap"><table className="ds-token-table"><thead><tr><th>TOKEN</th><th>USE</th>{modes.map((m) => <th key={m}>{m.toUpperCase()}</th>)}<th>WEB SYNTAX</th></tr></thead><tbody>{responsiveTokens.map((token) => <tr key={token.name}><th>{token.name}</th><td>{token.description}</td>{token.values.map((value, i) => <td key={i}><strong>{value}px</strong></td>)}<td><code>var({token.css})</code></td></tr>)}</tbody></table></div>
      <div className="ds-responsive-cards">{modes.map((mode, index) => <article key={mode}><span className="type-overline">{mode}</span><div className="ds-layout-mini"><i style={{ width: responsiveTokens[7].values[index] / 8 }} /><b /></div><dl><div><dt>Gutter</dt><dd>{responsiveTokens[5].values[index]}px</dd></div><div><dt>Content max</dt><dd>{responsiveTokens[6].values[index]}px</dd></div><div><dt>Table min</dt><dd>{responsiveTokens[9].values[index]}px</dd></div></dl></article>)}</div>
    </main>
  );
}

export function FocusFoundation() {
  return (
    <main className="ds-foundation-page">
      <FoundationHeader eyebrow="FOUNDATIONS · ACCESSIBILITY" title="Focus system" description="A consistent two-pixel outer ring for keyboard navigation, separated from the component edge by a two-pixel offset." meta="Visible · keyboard-first · immediate · contrast-preserving" />
      <div className="ds-focus-stage"><button type="button">Save changes</button><input aria-label="Focused field example" defaultValue="Search documents" /></div>
      <TokenTable tokens={focusTokens} sample="focus" />
      <Rules items={[["Visible", "The ring remains visible against both the control and surrounding surface."],["Keyboard", "Every interactive element is reachable in a logical order; no hover-only actions."],["Motion", "Focus appearance is immediate and respects reduced-motion preferences."],["Contrast", "Never communicate focus through color change alone; preserve the outer-ring geometry."]]} />
    </main>
  );
}

function SectionTitle({ title, meta }: { title: string; meta: string }) { return <div className="ds-section-title"><h2 className="type-heading-section">{title}</h2><span className="type-caption">{meta}</span></div>; }

function Rules({ items }: { items: string[][] }) {
  return <section className="ds-rules">{items.map(([title, copy]) => <article key={title}><span className="type-overline">{title}</span><p className="type-body-sm">{copy}</p></article>)}</section>;
}
