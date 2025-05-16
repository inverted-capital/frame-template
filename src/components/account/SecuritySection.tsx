import React from 'react';

interface SecuritySectionProps {
  showDeleteAccountConfirm: () => void;
}

const SecuritySection: React.FC<SecuritySectionProps> = ({ showDeleteAccountConfirm }) => {
  return (
    <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-md">
      <h2 className="text-lg font-medium mb-4">Account Security</h2>

      <div className="space-y-4">
        <div>
          <button
            className="px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-md hover:bg-red-100 transition-colors"
            onClick={showDeleteAccountConfirm}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;