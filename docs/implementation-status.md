# Implementation status

This document records whether a code component is directly mapped from a completed Figma component set or derived from approved foundation contracts.

## Figma-mapped

| Code API | Figma source | Contract |
| --- | --- | --- |
| `Icon` | Icons / `__Icon Slot` | Official Lucide masters; 13–20px and 24px optical sizing |
| `Button` | Button / Primary, Outline, Ghost, Destructive | Small 34px, medium 40px; semantic action hierarchy |
| `IconButton` | Icon Button | Row 34px square; toolbar 40px circle |
| `Input` | Input | Responsive width; fixed 40px field; default, focus, error, disabled |
| `Select` | Select | Input geometry; native accessible selection; separate popup responsibility |
| `Checkbox` | Checkbox | 20px visible box; unchecked, checked and mixed; 44px target |
| `Status` | Status Badge | Five semantic tones; optional dot; never interactive |
| `Badge` | Chip / Count and Label | Compact non-status content labels |
| `Tag` | Chip / Label plus semantic foundation roles | Non-action category metadata |
| `Avatar` | Avatar | Initials-only identity in 20, 26, 32 and 40px sizes; deterministic, non-status tones |
| `Breadcrumbs` | Breadcrumb | Two or three levels; linked ancestors and a non-interactive current page |
| `Tabs` | Tabs / Item | 44px view switcher, 2px active indicator and semantic counts |
| `SearchField` | Search Field | Responsive 40px toolbar search; optional scope; populated and disabled behavior |
| `Menu` | Menu and Menu Item | 236px overlay, 36px options and search above eight options |
| `RoleSwitch` | TopBar / Role Switch | 40px permission-context preview for Owner, Admin and Member |
| `TopBarUtilityButton` | TopBar / Utility Button | Circular 40px utility action with an optional unread indicator |
| `TopBar` | TopBar | Responsive 72px global header composed from governed subcomponents |

## Foundation-derived

These components are production implementations derived from existing Figma color, spacing, sizing, radius, typography and focus contracts because no completed component set exists in the supplied file:

- `Textarea` follows Input geometry, states and messaging.
- `Radio` follows Checkbox size, target, selected color and focus construction.
- `Tooltip` follows Overlay surface, Overlay elevation, compact radius and keyboard-focus behavior.
- `AppSelector` composes the approved Menu, control-height, typography, focus and overlay contracts. No dedicated App Selector component set exists in Figma yet.

Derived components should be reconciled with dedicated Figma component sets when those are published. Their public APIs should remain stable unless an accessibility or behavior correction requires a breaking change.

## Explicitly excluded

- `Sidebar`, `SidebarNavItem` and `BookingSidebar` are not implemented in this release.
- The application-shell Storybook example demonstrates navigation without importing or approximating the Sidebar.

## Typography correction

Legacy Figma layers still mention JetBrains Mono. The approved system permits only Onest and Public Sans, so Data styles use Public Sans Medium with `font-variant-numeric: tabular-nums`. The token validator rejects any third font family.
