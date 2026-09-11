# Foundation model

The Paryatech visual language is governed as a three-layer contract:

1. **Reference values** are stable raw sources. They are not consumed by components.
2. **Semantic roles** describe intent, such as `surface/default`, `text/secondary`, `Control/Standard` or `Component/Card`.
3. **Component decisions** combine semantic roles into documented geometry, state and behavior.

## Identity pillars

| Pillar | Brand decision | Enforcement |
| --- | --- | --- |
| Color | Warm neutral operational canvas, teal interaction, controlled pink identity accent, semantic status colors | Core and Color token sources; Light/Dark aliases |
| Typography | Onest for identity and hierarchy; Public Sans for UI, body and tabular data | Fourteen published roles; validators reject a third family |
| Spacing | Dense component anatomy and calm page-level rhythm | Twenty-two published roles; arbitrary local values require review |
| Sizing | 32/34/40/44 control ladder coordinated with icons, hit targets, navigation and row density | Twenty-four role tokens plus component geometry |
| Corner radius | Shape communicates responsibility: selection → control → field → card → panel → overlay | Scale, component and focus-radius roles |

## Supporting decisions

- Border width establishes structure and interaction emphasis.
- Focus uses a visible 2px ring and 2px offset in both themes.
- Elevation communicates real layer changes only: raised, floating, overlay and overflow.
- Icons are official Lucide 24px masters rendered through 12, 16, 20 and 24px optical roles.
- Responsive modes change layout roles and component behavior; the interface is never proportionally scaled.

## Consumption rules

- Product CSS consumes semantic or component variables only.
- Raw reference colors and Core numeric values are implementation details.
- A component state must be documented in Storybook before product adoption.
- New values are added to Figma and the token source together; product repositories do not add local design tokens.
- Full-round geometry is limited to avatars, status indicators, segmented controls and genuinely circular actions.
