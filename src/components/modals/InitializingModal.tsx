import React from 'react'

interface InitializingModalProps {
  show: boolean
}

const InitializingModal: React.FC<InitializingModalProps> = ({ show }) => {
  if (!show) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl text-center">
        <h3 className="text-lg font-medium mb-2">Setting up your profile...</h3>
        <p className="text-gray-700">
          Please wait while we prepare your account.
        </p>
      </div>
    </div>
  )
}

export default InitializingModal
