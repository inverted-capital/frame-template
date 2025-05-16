import React from 'react';
import { X } from 'lucide-react';

interface AddPaymentModalProps {
  showAddPaymentModal: boolean;
  setShowAddPaymentModal: (show: boolean) => void;
  newPaymentType: string;
  setNewPaymentType: (type: string) => void;
  newPaymentValue: string;
  setNewPaymentValue: (value: string) => void;
  handleAddPayment: () => void;
}

const AddPaymentModal: React.FC<AddPaymentModalProps> = ({
  showAddPaymentModal,
  setShowAddPaymentModal,
  newPaymentType,
  setNewPaymentType,
  newPaymentValue,
  setNewPaymentValue,
  handleAddPayment
}) => {
  if (!showAddPaymentModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Add Payment Method</h3>
          <button
            onClick={() => setShowAddPaymentModal(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Type
            </label>
            <select
              value={newPaymentType}
              onChange={(e) => setNewPaymentType(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ethereum">Ethereum Wallet</option>
              <option value="wise">Wise Account</option>
              <option value="bank">Bank Account</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {newPaymentType === 'ethereum' 
                ? 'Ethereum Address' 
                : newPaymentType === 'wise' 
                  ? 'Wise Email' 
                  : 'Account Number'}
            </label>
            <input
              type="text"
              value={newPaymentValue}
              onChange={(e) => setNewPaymentValue(e.target.value)}
              placeholder={
                newPaymentType === 'ethereum' 
                  ? '0x...' 
                  : newPaymentType === 'wise' 
                    ? 'email@example.com' 
                    : 'XXXX-XXXX-XXXX-XXXX'
              }
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              onClick={() => setShowAddPaymentModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleAddPayment}
              disabled={!newPaymentValue.trim()}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 transition-colors"
            >
              Add Payment Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentModal;