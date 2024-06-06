import { LayoutGrid, Send, Tag, User2, Users } from 'lucide-react';

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getAdminMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/dashboard',
          label: 'Dashboard',
          active: pathname.includes('/dashboard'),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Contents',
      menus: [
        {
          href: '/accept-letter',
          label: 'Acceptance letter',
          active: pathname.includes('/accept-letter'),
          icon: Send,
          submenus: [],
        },
        {
          href: '/tags',
          label: 'Tags',
          active: pathname.includes('/tags'),
          icon: Tag,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Settings',
      menus: [
        {
          href: '/users',
          label: 'Users',
          active: pathname.includes('/users'),
          icon: Users,
          submenus: [],
        },
        {
          href: '/dashboard/profile',
          label: 'Account',
          active: pathname.includes('/dashboard/profile'),
          icon: User2,
          submenus: [],
        },
      ],
    },
  ];
}

export function getUserMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/dashboard',
          label: 'Dashboard',
          active: pathname.includes('/dashboard'),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Contents',
      menus: [
        {
          href: '/tags',
          label: 'Tags',
          active: pathname.includes('/tags'),
          icon: Tag,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Settings',
      menus: [
        {
          href: '/dashboard/profile',
          label: 'Account',
          active: pathname.includes('/dashboard/profile'),
          icon: User2,
          submenus: [],
        },
      ],
    },
  ];
}
