import React from 'react'

interface SkeletonProps {
  skeleton?: boolean
}

const BillingSectionSkeleton: React.FC<SkeletonProps> = ({ skeleton }) => {
  if (!skeleton) return null

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      <div className="h-5 w-40 bg-gray-200 rounded mb-4" />
      <div className="space-y-4">
        <div className="h-8 bg-gray-200 rounded" />
        <div className="h-32 bg-gray-200 rounded" />
        <div className="h-8 bg-gray-200 rounded" />
      </div>
    </div>
  )
}

export default BillingSectionSkeleton
