import {
  useEffect,
  useId,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type KeyboardEvent,
} from 'react';
import { Icon, type IconName } from '../icon/Icon';
import './navigation.css';

export type BreadcrumbLinkItem = { label: string; href: string };
export type BreadcrumbCurrentItem = { label: string };
export type BreadcrumbItems = [BreadcrumbLinkItem, BreadcrumbCurrentItem] | [BreadcrumbLinkItem, BreadcrumbLinkItem, BreadcrumbCurrentItem];

export function Breadcrumbs({ items, ariaLabel = 'Breadcrumb' }: { items: BreadcrumbItems; ariaLabel?: string }) {
  return (
    <nav aria-label={ariaLabel} className="ds-breadcrumbs">
      <ol>
        {items.map((item, index) => {
          const current = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`}>
              {current ? <span aria-current="page">{item.label}</span> : <a href={(item as BreadcrumbLinkItem).href}>{item.label}</a>}
              {!current && <Icon className="ds-breadcrumbs__separator" name="ChevronRight" size={14} tone="muted" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export type TabDefinition = { id: string; label: string; count?: number; disabled?: boolean };
export type TabsProps = {
  items: TabDefinition[];
  activeId: string;
  onChange?: (id: string) => void;
  ariaLabel: string;
};

export function Tabs({ items, activeId, onChange, ariaLabel }: TabsProps) {
  const handleKeys = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    const enabled = Array.from(event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]:not(:disabled)') ?? []);
    const current = enabled.indexOf(event.currentTarget);
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? enabled.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + enabled.length) % enabled.length;
    event.preventDefault();
    enabled[next]?.focus();
  };

  return (
    <div aria-label={ariaLabel} className="ds-tabs" role="tablist">
      {items.map((item) => {
        const active = item.id === activeId;
        return (
          <button
            aria-selected={active}
            className="ds-tab"
            disabled={item.disabled}
            key={item.id}
            onClick={() => onChange?.(item.id)}
            onKeyDown={handleKeys}
            role="tab"
            tabIndex={active ? 0 : -1}
            type="button"
          >
            <span>{item.label}</span>
            {item.count !== undefined && <span className="ds-tab__count">{item.count}</span>}
          </button>
        );
      })}
    </div>
  );
}

export type SearchFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> & {
  label: string;
  scope?: string;
  scopeMenu?: boolean;
  onScopeClick?: () => void;
  onClear?: () => void;
};

export function SearchField({ label, scope, scopeMenu = false, onScopeClick, onClear, className = '', value, disabled, ...props }: SearchFieldProps) {
  const populated = typeof value === 'string' && value.length > 0;
  return (
    <div className={`ds-search-field ${className}`.trim()}>
      <Icon name="Search" size="m" tone={disabled ? 'muted' : 'default'} />
      <input aria-label={label} disabled={disabled} type="search" value={value} {...props} />
      {scope && (scopeMenu ? <button aria-label={`Change search scope, currently ${scope}`} className="ds-search-field__scope" onClick={onScopeClick} type="button">{scope}<Icon name="ChevronDown" size={13} tone="muted" /></button> : <span className="ds-search-field__scope">{scope}</span>)}
      {populated && onClear && <button aria-label="Clear search" className="ds-search-field__clear" onClick={onClear} type="button"><Icon name="X" size={14} tone="muted" /></button>}
    </div>
  );
}

export type MenuItemDefinition = { id: string; label: string; disabled?: boolean };
export type MenuProps = {
  items: MenuItemDefinition[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  ariaLabel: string;
  searchable?: boolean;
};

export function Menu({ items, selectedId, onSelect, ariaLabel, searchable = false }: MenuProps) {
  const [query, setQuery] = useState('');
  const visibleItems = items.filter((item) => item.label.toLowerCase().includes(query.trim().toLowerCase()));
  const moveOptionFocus = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
    const options = Array.from(event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="option"]:not(:disabled)') ?? []);
    const current = options.indexOf(event.currentTarget);
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1 : (current + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length;
    event.preventDefault();
    options[next]?.focus();
  };
  return (
    <div className="ds-menu">
      {searchable && <SearchField label={`Search ${ariaLabel}`} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === 'ArrowDown') { event.preventDefault(); event.currentTarget.closest('.ds-menu')?.querySelector<HTMLButtonElement>('[role="option"]:not(:disabled)')?.focus(); } }} placeholder="Search" value={query} />}
      <div aria-label={ariaLabel} className="ds-menu__list" role="listbox">
        {visibleItems.map((item) => {
          const selected = item.id === selectedId;
          return (
            <button aria-selected={selected} className="ds-menu__item" disabled={item.disabled} key={item.id} onClick={() => onSelect?.(item.id)} onKeyDown={moveOptionFocus} role="option" type="button">
              <span>{item.label}</span>
              {selected && <Icon name="Check" size={14} tone="interactive" />}
            </button>
          );
        })}
        {visibleItems.length === 0 && <p className="ds-menu__empty">No matching options</p>}
      </div>
    </div>
  );
}

export type AvatarProps = {
  name: string;
  initials?: string;
  size?: 20 | 26 | 32 | 40;
  tone?: 'accent' | 'info' | 'success' | 'warning';
  decorative?: boolean;
};

export function Avatar({ name, initials, size = 32, tone = 'accent', decorative = false }: AvatarProps) {
  const text = (initials ?? name.split(/\s+/).map((part) => part[0]).join('')).slice(0, 2).toUpperCase();
  return <span aria-hidden={decorative || undefined} aria-label={decorative ? undefined : name} className={`ds-avatar ds-avatar--${tone}`} data-size={size} role={decorative ? undefined : 'img'}>{text}</span>;
}

export type Application = { id: string; name: string; shortName?: string };
export function AppSelector({ applications, selectedId, onChange, label = 'Switch application' }: { applications: Application[]; selectedId: string; onChange?: (id: string) => void; label?: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const selected = applications.find((application) => application.id === selectedId) ?? applications[0];

  useEffect(() => {
    const close = (event: PointerEvent) => { if (!rootRef.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, []);

  return (
    <div className="ds-app-selector" onKeyDown={(event) => { if (event.key === 'Escape') setOpen(false); }} ref={rootRef}>
      <button aria-controls={menuId} aria-expanded={open} aria-haspopup="listbox" className="ds-app-selector__trigger" onClick={() => setOpen((value) => !value)} type="button">
        <span aria-hidden="true" className="ds-app-selector__mark">{selected?.shortName ?? selected?.name.slice(0, 1)}</span>
        <span className="ds-app-selector__copy"><small>Application</small><strong>{selected?.name}</strong></span>
        <Icon name="ChevronDown" size={14} tone="muted" />
        <span className="ds-visually-hidden">{label}</span>
      </button>
      {open && <div className="ds-app-selector__popover" id={menuId}><Menu ariaLabel={label} items={applications.map(({ id, name }) => ({ id, label: name }))} onSelect={(id) => { onChange?.(id); setOpen(false); }} selectedId={selectedId} /></div>}
    </div>
  );
}

export type Role = 'Owner' | 'Admin' | 'Member';
export function RoleSwitch({ active, onChange }: { active: Role; onChange?: (role: Role) => void }) {
  return <div aria-label="Preview permission role" className="ds-role-switch" role="group">{(['Owner', 'Admin', 'Member'] as Role[]).map((role) => <button aria-pressed={role === active} key={role} onClick={() => onChange?.(role)} title={`Preview ${role} permissions`} type="button">{role}</button>)}</div>;
}

export type TopBarUtilityButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & { icon: IconName; label: string; notification?: boolean };
export function TopBarUtilityButton({ icon, label, notification = false, className = '', ...props }: TopBarUtilityButtonProps) {
  return <button aria-label={`${label}${notification ? ', unread' : ''}`} className={`ds-topbar-utility ${className}`.trim()} title={label} type="button" {...props}><Icon name={icon} size="l" />{notification && <span aria-hidden="true" className="ds-topbar-utility__notification" />}</button>;
}

export type TopBarProps = {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onSearchClear?: () => void;
  onScopeClick?: () => void;
  role?: Role;
  onRoleChange?: (role: Role) => void;
  user: { name: string; initials?: string };
  actions?: Array<{ icon: IconName; label: string; notification?: boolean; onClick?: () => void }>;
  onAccountClick?: () => void;
};

export function TopBar({ searchValue = '', onSearchChange, onSearchClear, onScopeClick, role = 'Admin', onRoleChange, user, actions, onAccountClick }: TopBarProps) {
  const utilities = actions ?? [
    { icon: 'SlidersHorizontal' as const, label: 'Preferences' },
    { icon: 'CircleHelp' as const, label: 'Help' },
    { icon: 'Phone' as const, label: 'Contact support' },
    { icon: 'Bell' as const, label: 'Notifications', notification: true },
  ];
  return (
    <header className="ds-topbar">
      <div className="ds-topbar__search"><SearchField label="Search anything" onChange={(event) => onSearchChange?.(event.target.value)} onClear={onSearchClear} onScopeClick={onScopeClick} placeholder="Search anything" scope="Query" scopeMenu value={searchValue} /></div>
      <div className="ds-topbar__actions">
        <RoleSwitch active={role} onChange={onRoleChange} />
        {utilities.map((action) => <TopBarUtilityButton key={action.label} {...action} />)}
        <button aria-label={`Open account menu for ${user.name}`} className="ds-topbar__account" onClick={onAccountClick} type="button"><Avatar initials={user.initials} name={user.name} size={32} /><Icon name="ChevronDown" size={14} tone="muted" /></button>
      </div>
    </header>
  );
}
