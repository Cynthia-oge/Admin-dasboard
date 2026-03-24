import React from 'react'
import StatCard from '@/components/StatCard/StatCard'
// import { Wallet, DollarSign, TrendingUp } from 'lucide-react'
import ColouredWallet from '../../assets/icons/walletcoloured.svg?react'
import Wallet from '../../assets/icons/wallet.svg?react'
import Pending from '../../assets/icons/pending.svg?react'
import ChartStat from '@/components/Chart/ChartStat'
import RecentInvoice from '@/components/RecentInvoice/RecentInvoice'


const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          title="Total Income"
          amount="$5240.21"
          icon={ColouredWallet}
          bgColor="bg-gray-800"
        />
        
        <StatCard 
          title="Amount Paid"
          amount="$250.80"
          icon={Wallet}
          bgColor="bg-[#f8f8f8]"
          textColor="text-black"
        />
        
        <StatCard 
          title="Pending Payment"
          amount="$550.25"
          icon={Pending}
          bgColor="bg-[#f8f8f8]"
          textColor="text-black"
        />
      </div>
      <ChartStat />
      <RecentInvoice />
    </div>
  )
}

export default Dashboard