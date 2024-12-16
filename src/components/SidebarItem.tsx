import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isOpen: boolean;
}

export function SidebarItem({ icon: Icon, label, href, isOpen }: SidebarItemProps) {
  return (
    <a
      href={href}
      className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
    >
      <Icon size={20} />
      <span className={`ml-4 ${!isOpen && 'hidden'}`}>{label}</span>
    </a>
  );
}