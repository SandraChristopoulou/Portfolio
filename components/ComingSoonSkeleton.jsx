import React from 'react';

function ComingSoonSkeleton() {
  return (
    <div className="w-full max-w-sm bg-gray-100 rounded-xl p-4 animate-pulse shadow">
      {/* Image Placeholder */}
      <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>

      {/* Title Placeholder */}
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>

      {/* Description Placeholder */}
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>

      {/* Tags Placeholder */}
      <div className="flex gap-2 mb-4">
        <div className="h-5 w-12 bg-gray-300 rounded"></div>
        <div className="h-5 w-16 bg-gray-300 rounded"></div>
      </div>

      {/* Coming Soon Text */}
      <p className="text-center text-gray-500 text-sm">Coming Soon</p>
    </div>
  );
}

export default ComingSoonSkeleton;
