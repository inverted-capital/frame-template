import { User } from 'lucide-react'
import React from 'react'

const AccountViewSkeleton: React.FC = () => {
  return (
    <div className="animate-fadeIn animate-pulse">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <User className="mr-2 text-gray-300" size={24} />
        <div className="h-6 w-24 bg-gray-200 rounded" />
      </h1>

      <div className="space-y-6">
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

        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="h-5 w-40 bg-gray-200 rounded mb-4" />
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-10 bg-gray-200 rounded" />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="h-5 w-40 bg-gray-200 rounded mb-4" />
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded" />
            <div className="h-32 bg-gray-200 rounded" />
            <div className="h-8 bg-gray-200 rounded" />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="h-5 w-40 bg-gray-200 rounded mb-4" />
          <div className="h-10 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  )
}

export default AccountViewSkeleton
