import React from 'react';

export function UpcomingTasks() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-xl font-semibold mb-4">Upcoming Tasks</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <p className="text-sm text-gray-900">Update financial projections</p>
            </div>
            <span className="text-xs text-gray-500">Due tomorrow</span>
          </div>
        ))}
      </div>
    </div>
  );
}