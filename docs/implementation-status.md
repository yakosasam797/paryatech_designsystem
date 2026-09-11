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

## Foundation-derived

These components are production implementations derived from existing Figma color, spacing, sizing, radius, typography and focus contracts because no completed component set exists in the supplied file:

- `Textarea` follows Input geometry, states and messaging.
- `Radio` follows Checkbox size, target, selected color and focus construction.
- `Tooltip` follows Overlay surface, Overlay elevation, compact radius and keyboard-focus behavior.

Derived components should be reconciled with dedicated Figma component sets when those are published. Their public APIs should remain stable unless an accessibility or behavior correction requires a breaking change.

## Typography correction

Legacy Figma layers still mention JetBrains Mono. The approved system permits only Onest and Public Sans, so Data styles use Public Sans Medium with `font-variant-numeric: tabular-nums`. The token validator rejects any third font family.
