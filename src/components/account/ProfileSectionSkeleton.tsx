import React from 'react'

interface SkeletonProps {
  skeleton?: boolean
}

const ProfileSectionSkeleton: React.FC<SkeletonProps> = ({ skeleton }) => {
  if (!skeleton) return null

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      <div className="h-5 w-40 bg-gray-200 rounded mb-4" />
      <div className="flex items-center space-x-6">
        <div className="w-24 h-24 bg-gray-200 rounded-full" />
        <div className="flex-1 space-y-4">
          <div className="h-4 w-3/4 bg-gray-200 rounded" />
          <div className="h-4 w-1/2 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  )
}

export default ProfileSectionSkeleton
