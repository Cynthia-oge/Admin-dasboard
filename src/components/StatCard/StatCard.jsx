import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

const StatCard = ({ title, amount, icon: Icon, bgColor = "bg-gray-800", textColor="text-white"}) => {
  return (
    <Card className={`${bgColor} border-none ${textColor}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-5">
          {Icon && (
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
          )}
           <div>
            <p className="text-sm text-gray-300 mb-1">{title}</p>
            <h3 className="text-2xl font-bold">{amount}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default StatCard