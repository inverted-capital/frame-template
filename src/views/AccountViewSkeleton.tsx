import { User } from 'lucide-react'
import React from 'react'
import {
  ProfileSectionSkeleton,
  PaymentSectionSkeleton,
  BillingSectionSkeleton,
  SecuritySectionSkeleton
} from '../components/account'

const AccountViewSkeleton: React.FC = () => {
  return (
    <div className="animate-fadeIn animate-pulse">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <User className="mr-2 text-gray-300" size={24} />
        <div className="h-6 w-24 bg-gray-200 rounded" />
      </h1>

      <div className="space-y-6">
        <ProfileSectionSkeleton skeleton />
        <PaymentSectionSkeleton skeleton />
        <BillingSectionSkeleton skeleton />
        <SecuritySectionSkeleton skeleton />
      </div>
    </div>
  )
}

export default AccountViewSkeleton
