import React from 'react';
import { StatCard } from './StatCard';
import { RecentActivity } from './RecentActivity';
import { UpcomingTasks } from './UpcomingTasks';
import { 
  TrendingUp, 
  Users, 
  Target,
  Calendar
} from 'lucide-react';

const stats = [
  { label: 'Active Goals', value: '12', icon: Target, trend: '+2 this week' },
  { label: 'Network Size', value: '847', icon: Users, trend: '+23 new connections' },
  { label: 'Growth Rate', value: '34%', icon: TrendingUp, trend: '+5% vs last month' },
  { label: 'Upcoming Events', value: '8', icon: Calendar, trend: '3 this week' },
];

export function Dashboard() {
  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Founder</h1>
        <p className="text-gray-600 mt-2">Here's what's happening with your startup today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <UpcomingTasks />
      </div>
    </div>
  );
}