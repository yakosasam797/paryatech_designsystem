import {
  Bell, BookOpen, CalendarDays, Car, Check, ChevronDown, ChevronLeft, ChevronRight,
  CircleDollarSign, CircleHelp, Clock3, Copy, Download, Ellipsis, EllipsisVertical,
  ExternalLink, Eye, FileText, Hotel, Inbox, Landmark, LayoutDashboard, ListFilter,
  LogOut, MapPin, Megaphone, Menu, Package, Paperclip, Pencil, Plane, Plus, Receipt,
  RefreshCw, Route, Search, Send, Settings2, Ship, SlidersHorizontal, SquareCheckBig,
  Store, Trash2, Upload, User, UserRound, Users, WalletCards, X,
  type LucideIcon,
} from 'lucide-react';

export const iconRegistry = {
  Search, Plus, Pencil, Trash2, Eye, Download, Upload, Send, RefreshCw, Copy,
  ExternalLink, Paperclip, X, Check, Ellipsis, EllipsisVertical, ListFilter,
  SlidersHorizontal, Settings2, ChevronDown, ChevronLeft, ChevronRight, Menu,
  LayoutDashboard, Inbox, SquareCheckBig, Newspaper: FileText, FileText, Package,
  Megaphone, BookOpen, Users, User, UserRound, Store, Landmark, CircleDollarSign,
  WalletCards, Receipt, Plane, Hotel, MapPin, Route, Car, Ship, CalendarDays,
  Clock3, Bell, CircleHelp, LogOut,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconRegistry;
