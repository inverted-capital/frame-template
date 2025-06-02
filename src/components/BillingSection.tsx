import React from 'react'
import {
  DollarSign,
  Plus,
  Calendar,
  HardDrive,
  Cpu,
  Wifi,
  PenTool,
  RefreshCw
} from 'lucide-react'

import type { BillingData, UsageRecord } from '../types/account'

interface BillingPeriod {
  start: string
  end: string
}

interface BillingSectionProps {
  billingData?: BillingData
  selectedPeriod?: string
  setSelectedPeriod?: (period: string) => void
  setShowTopUpModal?: (show: boolean) => void
  billingPeriod?: BillingPeriod
  periodData?: UsageRecord
  totalCost?: string
  netStorageCost?: string
  skeleton?: boolean
}

const BillingSection: React.FC<BillingSectionProps> = ({
  billingData,
  selectedPeriod,
  setSelectedPeriod,
  setShowTopUpModal,
  billingPeriod,
  periodData,
  totalCost,
  netStorageCost,
  skeleton
}) => {
  if (skeleton) {
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
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 transition-all duration-300 hover:shadow-md">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h2 className="text-lg font-medium flex items-center">
            <DollarSign size={20} className="mr-2 text-green-600" />
            Billing & Usage
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Pay only for resources you use
          </p>
        </div>

        <div className="flex items-center">
          <div className="mr-4 text-right">
            <div className="text-sm text-gray-500">Current Balance</div>
            <div className="font-medium text-xl text-green-600">
              ${billingData!.balance.toFixed(2)}
            </div>
          </div>

          <button
            onClick={() => setShowTopUpModal!(true)}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center transition-colors"
          >
            <Plus size={16} className="mr-2" />
            Top Up
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <h3 className="font-medium">Usage Period</h3>
          <div className="flex items-center">
            <Calendar size={16} className="mr-2 text-gray-500" />
            <div>
              {billingPeriod!.start} - {billingPeriod!.end}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-md p-3 flex justify-between flex-wrap gap-2">
          <button
            onClick={() => setSelectedPeriod!('current')}
            className={`px-3 py-1.5 rounded transition-colors ${selectedPeriod === 'current' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Current Month
          </button>
          <button
            onClick={() => setSelectedPeriod!('previous')}
            className={`px-3 py-1.5 rounded transition-colors ${selectedPeriod === 'previous' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Previous Month
          </button>
          <button
            onClick={() => setSelectedPeriod!('older')}
            className={`px-3 py-1.5 rounded transition-colors ${selectedPeriod === 'older' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            2 Months Ago
          </button>
        </div>
      </div>

      <div>
        <div className="mb-4">
          <h3 className="font-medium mb-2">Usage Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <HardDrive size={18} className="text-blue-500 mr-2" />
                  <span className="font-medium">Storage</span>
                </div>
                <span className="text-sm px-2 py-1 bg-blue-50 text-blue-700 rounded-full">
                  ${netStorageCost!} net
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-green-500 mr-1">+</span>
                    {periodData!.storage.gained.toFixed(2)} GB gained
                  </div>
                  <div className="text-gray-500">
                    ${periodData!.storage.gainedCost.toFixed(2)}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-red-500 mr-1">-</span>
                    {periodData!.storage.lost.toFixed(2)} GB deleted
                  </div>
                  <div className="text-gray-500">
                    -${periodData!.storage.lostRefund.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Cpu size={18} className="text-purple-500 mr-2" />
                  <span className="font-medium">Compute</span>
                </div>
                <span className="text-sm px-2 py-1 bg-purple-50 text-purple-700 rounded-full">
                  ${periodData!.computeCost.toFixed(2)}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div>{periodData!.compute} processor units</div>
                  <div className="text-gray-500">
                    ${periodData!.computeCost.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Wifi size={18} className="text-green-500 mr-2" />
                  <span className="font-medium">Bandwidth</span>
                </div>
                <span className="text-sm px-2 py-1 bg-green-50 text-green-700 rounded-full">
                  ${periodData!.bandwidthCost.toFixed(2)}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div>{periodData!.bandwidth.toFixed(2)} GB transferred</div>
                  <div className="text-gray-500">
                    ${periodData!.bandwidthCost.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">AI Token Usage</h3>
            <span className="text-sm px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full">
              ${periodData!.aiTokensCost.toFixed(2)}
            </span>
          </div>

          <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between transition-all duration-300 hover:shadow-sm flex-wrap gap-2">
            <div className="flex items-center">
              <PenTool size={18} className="text-indigo-500 mr-2" />
              <span>
                {periodData!.aiTokens.toLocaleString()} tokens consumed
              </span>
            </div>
            <div className="text-gray-500">
              ${periodData!.aiTokensCost.toFixed(2)}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center flex-wrap gap-2">
          <div>
            <span className="text-sm text-gray-500">Total for period:</span>
            <span className="ml-2 font-medium text-lg">${totalCost!}</span>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <RefreshCw size={14} className="mr-1" />
            Updated {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BillingSection
