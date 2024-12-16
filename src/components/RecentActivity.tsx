import React from 'react';

export function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
            <div>
              <p className="text-sm text-gray-900">New investor viewed your pitch deck</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}