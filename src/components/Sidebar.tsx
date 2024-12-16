import React from 'react';
import { 
  LayoutDashboard, 
  Lightbulb,
  LineChart,
  Presentation, // Changed from PresentationScreen
  Users,
  BookOpen,
  Globe,
  Settings,
  Menu
} from 'lucide-react';
import { SidebarItem } from './SidebarItem';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
  { icon: Lightbulb, label: 'Startup Toolkit', href: '#' },
  { icon: LineChart, label: 'Market Intel', href: '#' },
  { icon: Presentation, label: 'Pitch Tools', href: '#' },
  { icon: Users, label: 'Network Hub', href: '#' },
  { icon: BookOpen, label: 'Resources', href: '#' },
  { icon: Globe, label: 'Ecosystem', href: '#' },
  { icon: Settings, label: 'Settings', href: '#' },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className={`bg-gray-900 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="flex items-center justify-between p-4">
        <h1 className={`font-bold text-xl ${!isOpen && 'hidden'}`}>FounderHub</h1>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-800 rounded-lg"
        >
          <Menu size={20} />
        </button>
      </div>
      
      <nav className="mt-8">
        {menuItems.map((item) => (
          <SidebarItem 
            key={item.label}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isOpen={isOpen}
          />
        ))}
      </nav>
    </div>
  );
}