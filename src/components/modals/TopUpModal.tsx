import React from 'react'
import { X, Plus } from 'lucide-react'

import type { BillingData, PaymentMethod } from '../../types/account.ts'

interface TopUpModalProps {
  showTopUpModal: boolean
  setShowTopUpModal: (show: boolean) => void
  topUpAmount: string
  setTopUpAmount: (amount: string) => void
  customAmount: string
  setCustomAmount: (amount: string) => void
  handleTopUp: () => void
  billingData: BillingData
  paymentMethods: PaymentMethod[]
}

const TopUpModal: React.FC<TopUpModalProps> = ({
  showTopUpModal,
  setShowTopUpModal,
  topUpAmount,
  setTopUpAmount,
  customAmount,
  setCustomAmount,
  handleTopUp,
  billingData,
  paymentMethods
}) => {
  if (!showTopUpModal) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Top Up Balance</h3>
          <button
            onClick={() => setShowTopUpModal(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div>
          <p className="mb-4 text-gray-600">
            Current balance:{' '}
            <span className="font-medium text-green-600">
              ${billingData.balance.toFixed(2)}
            </span>
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Choose amount to add:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-3">
              {['10', '25', '50', '100'].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setTopUpAmount(amount)}
                  className={`py-2 border transition-colors ${topUpAmount === amount ? 'border-blue-500 bg-blue-50 text-blue-600' : 'border-gray-300 hover:border-gray-400'} rounded-md`}
                >
                  ${amount}
                </button>
              ))}
              <button
                onClick={() => setTopUpAmount('custom')}
                className={`py-2 border transition-colors ${topUpAmount === 'custom' ? 'border-blue-500 bg-blue-50 text-blue-600' : 'border-gray-300 hover:border-gray-400'} rounded-md`}
              >
                Custom
              </button>
            </div>

            {topUpAmount === 'custom' && (
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Enter amount:
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="0.00"
                    min="1"
                    step="0.01"
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment method:
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {paymentMethods
                .filter((method) => method.isConnected)
                .map((method) => (
                  <option key={method.id} value={method.id}>
                    {method.name} ({method.value.slice(0, 10)}...)
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <button
            onClick={() => setShowTopUpModal(false)}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleTopUp}
            disabled={
              topUpAmount === 'custom' &&
              (!customAmount.trim() || parseFloat(customAmount) <= 0)
            }
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50 transition-colors flex items-center"
          >
            <Plus size={16} className="mr-2" />
            Add ${topUpAmount === 'custom' ? customAmount : topUpAmount}
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopUpModal
