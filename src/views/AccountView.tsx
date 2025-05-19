import React, { useState } from 'react'
import { useNavigationStore } from '../features/navigation/state'
import { useChatStore } from '../features/chat/state'
import { useRepoStore } from '../features/repos/state'

// Components
import ProfileSection from '../components/account/ProfileSection'
import PaymentSection from '../components/account/PaymentSection'
import BillingSection from '../components/account/BillingSection'
import SecuritySection from '../components/account/SecuritySection'
import DeleteAccountModal from '../components/account/modals/DeleteAccountModal'
import AddPaymentModal from '../components/account/modals/AddPaymentModal'
import TopUpModal from '../components/account/modals/TopUpModal'

// Icons
import { User } from 'lucide-react'

// Mock data
import {
  mockUserProfile,
  mockPaymentMethods,
  mockBillingData
} from '../data/mockData'

const AccountView: React.FC = () => {
  const [userProfile, setUserProfile] = useState(mockUserProfile)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [paymentMethods, setPaymentMethods] = useState(mockPaymentMethods)
  const [showAddPaymentModal, setShowAddPaymentModal] = useState(false)
  const [newPaymentType, setNewPaymentType] = useState('ethereum')
  const [newPaymentValue, setNewPaymentValue] = useState('')

  // Billing related state
  const [billingData, setBillingData] = useState(mockBillingData)
  const [selectedPeriod, setSelectedPeriod] = useState('current')
  const [showTopUpModal, setShowTopUpModal] = useState(false)
  const [topUpAmount, setTopUpAmount] = useState('10')
  const [customAmount, setCustomAmount] = useState('')

  const setCurrentView = useNavigationStore((state) => state.setCurrentView)
  const navigateTo = useChatStore((state) => state.navigateTo)
  const { selectHomeRepository } = useRepoStore()

  const showDeleteAccountConfirm = () => {
    setShowDeleteConfirm(true)
  }

  const dismissDeleteConfirm = () => {
    setShowDeleteConfirm(false)
  }

  const togglePaymentConnection = (id: string) => {
    setPaymentMethods((methods) =>
      methods.map((method) =>
        method.id === id
          ? { ...method, isConnected: !method.isConnected }
          : method
      )
    )
  }

  const handleAddPayment = () => {
    if (!newPaymentValue.trim()) return

    const newPayment = {
      id: `${newPaymentType}${Date.now()}`,
      type: newPaymentType,
      name:
        newPaymentType === 'ethereum'
          ? 'Ethereum Wallet'
          : newPaymentType === 'wise'
            ? 'Wise Account'
            : 'Bank Account',
      value: newPaymentValue,
      isConnected: true
    }

    setPaymentMethods([...paymentMethods, newPayment])
    setNewPaymentValue('')
    setShowAddPaymentModal(false)
  }

  const navigateToWalletNapp = () => {
    // Select home repository
    selectHomeRepository()

    // Navigate to the napps view
    setCurrentView('napps')

    // Create a navigation marker
    navigateTo({
      title: 'Wallet Manager',
      icon: 'Package',
      view: 'napps'
    })
  }

  const handleTopUp = () => {
    // In a real app, this would process payment and update balance
    const amount =
      topUpAmount === 'custom'
        ? parseFloat(customAmount) || 0
        : parseFloat(topUpAmount)

    if (amount > 0) {
      setBillingData({
        ...billingData,
        balance: billingData.balance + amount
      })
      setShowTopUpModal(false)
      setTopUpAmount('10')
      setCustomAmount('')
    }
  }

  const getCurrentBillingPeriod = () => {
    const today = new Date()
    const startDate =
      selectedPeriod === 'current'
        ? new Date(today.getFullYear(), today.getMonth(), 1)
        : selectedPeriod === 'previous'
          ? new Date(today.getFullYear(), today.getMonth() - 1, 1)
          : new Date(today.getFullYear(), today.getMonth() - 2, 1)

    let endDate
    if (selectedPeriod === 'current') {
      endDate = today
    } else if (selectedPeriod === 'previous') {
      endDate = new Date(today.getFullYear(), today.getMonth(), 0)
    } else {
      endDate = new Date(today.getFullYear(), today.getMonth() - 1, 0)
    }

    return {
      start: startDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      end: endDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }
  }

  const getPeriodData = () => {
    const index =
      selectedPeriod === 'current' ? 0 : selectedPeriod === 'previous' ? 1 : 2
    return billingData.usageHistory[index] || billingData.usageHistory[0]
  }

  const periodData = getPeriodData()
  const billingPeriod = getCurrentBillingPeriod()

  const totalCost = (
    periodData.storage.gainedCost -
    periodData.storage.lostRefund +
    periodData.computeCost +
    periodData.bandwidthCost +
    periodData.aiTokensCost
  ).toFixed(2)

  const netStorageCost = (
    periodData.storage.gainedCost - periodData.storage.lostRefund
  ).toFixed(2)

  return (
    <div className="animate-fadeIn">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <User className="mr-2" size={24} />
        Account
      </h1>

      <ProfileSection
        userProfile={userProfile}
        setUserProfile={setUserProfile}
      />

      <PaymentSection
        paymentMethods={paymentMethods}
        togglePaymentConnection={togglePaymentConnection}
        setShowAddPaymentModal={setShowAddPaymentModal}
        navigateToWalletNapp={navigateToWalletNapp}
      />

      <BillingSection
        billingData={billingData}
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        setShowTopUpModal={setShowTopUpModal}
        billingPeriod={billingPeriod}
        periodData={periodData}
        totalCost={totalCost}
        netStorageCost={netStorageCost}
      />

      <SecuritySection showDeleteAccountConfirm={showDeleteAccountConfirm} />

      {/* Modals */}
      <DeleteAccountModal
        showDeleteConfirm={showDeleteConfirm}
        dismissDeleteConfirm={dismissDeleteConfirm}
      />

      <AddPaymentModal
        showAddPaymentModal={showAddPaymentModal}
        setShowAddPaymentModal={setShowAddPaymentModal}
        newPaymentType={newPaymentType}
        setNewPaymentType={setNewPaymentType}
        newPaymentValue={newPaymentValue}
        setNewPaymentValue={setNewPaymentValue}
        handleAddPayment={handleAddPayment}
      />

      <TopUpModal
        showTopUpModal={showTopUpModal}
        setShowTopUpModal={setShowTopUpModal}
        topUpAmount={topUpAmount}
        setTopUpAmount={setTopUpAmount}
        customAmount={customAmount}
        setCustomAmount={setCustomAmount}
        handleTopUp={handleTopUp}
        billingData={billingData}
        paymentMethods={paymentMethods}
      />
    </div>
  )
}

export default AccountView
