import React from 'react'

interface DeleteAccountModalProps {
  showDeleteConfirm: boolean
  dismissDeleteConfirm: () => void
}

const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({
  showDeleteConfirm,
  dismissDeleteConfirm
}) => {
  if (!showDeleteConfirm) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
        <h3 className="text-lg font-medium mb-4">Delete Account</h3>
        <p className="mb-6 text-gray-700">
          You can check out anytime you like, but you can never leave.
        </p>

        <div className="flex justify-end">
          <button
            onClick={dismissDeleteConfirm}
            className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteAccountModal
