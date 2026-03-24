import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import {  
  Eye, 
  Download, 
  Send, 
  Edit, 
  Copy, 
  Trash2,
  Printer,
  CheckCircle
} from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const invoiceData = [
  {
    id: 1,
    clientName: "Gadget Gallery LTD",
    invoiceNumber: "INV-00234829",
    date: "14 Apr 2022",
    time: "at 5:00 PM",
    ordersType: "20",
    amount: "$420.84",
    status: "Pending"
  },
  {
    id: 2,
    clientName: "Gadget Gallery LTD",
    invoiceNumber: "INV-00234829",
    date: "14 Apr 2022",
    time: "at 5:00 PM",
    ordersType: "20",
    amount: "$420.84",
    status: "Pending"
  },
  {
    id: 3,
    clientName: "Gadget Gallery LTD",
    invoiceNumber: "INV-00234829",
    date: "14 Apr 2022",
    time: "at 5:00 PM",
    ordersType: "20",
    amount: "$420.84",
    status: "Pending"
  },
]

const RecentInvoice = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Invoice</CardTitle>
        <Button variant="link" className="text-blue-600 text-sm">
          View All →
        </Button>
      </CardHeader>
      
      <CardContent>
        <Table>
  {/* HEADER - Just labels, no dropdown here */}
  <TableHeader>
    <TableRow className="border-b">
      <TableHead className="text-gray-500 font-medium text-xs uppercase">
        Name/Client
      </TableHead>
      <TableHead className="text-gray-500 font-medium text-xs uppercase">
        Date
      </TableHead>
      <TableHead className="text-gray-500 font-medium text-xs uppercase">
        Orders Type
      </TableHead>
      <TableHead className="text-gray-500 font-medium text-xs uppercase">
        Amount
      </TableHead>
      <TableHead className="text-gray-500 font-medium text-xs uppercase">
        Status
      </TableHead>
      <TableHead className="text-gray-500 font-medium text-xs uppercase">
        Action
      </TableHead>
    </TableRow>
  </TableHeader>
  
  {/* BODY - Dropdown goes in each row here */}
  <TableBody>
    {invoiceData.map((invoice) => (
      <TableRow key={invoice.id} className="border-b hover:bg-gray-50">
        {/* Name/Client Column */}
        <TableCell>
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10 bg-blue-100">
              <AvatarFallback className="bg-blue-100 text-blue-600 text-sm font-medium">
                GG
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-sm">{invoice.clientName}</p>
              <p className="text-xs text-gray-500">{invoice.invoiceNumber}</p>
            </div>
          </div>
        </TableCell>
        
        {/* Date Column */}
        <TableCell>
          <p className="text-sm font-medium">{invoice.date}</p>
          <p className="text-xs text-gray-500">{invoice.time}</p>
        </TableCell>
        
        {/* Orders Type Column */}
        <TableCell className="text-sm">{invoice.ordersType}</TableCell>
        
        {/* Amount Column */}
        <TableCell className="text-sm font-semibold">
          {invoice.amount}
        </TableCell>
        
        {/* Status Column */}
        <TableCell>
          <Badge 
            variant="secondary" 
            className="bg-orange-100 text-orange-600 hover:bg-orange-100"
          >
            {invoice.status}
          </Badge>
        </TableCell>
        
        {/* Action Column - DROPDOWN GOES HERE */}
        <TableCell>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                className="inline-flex items-center justify-center h-8 w-8 rounded-md text-gray-500 hover:bg-gray-100"
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                View
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                Download
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

 {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-500">
            Showing
          </p>
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious/>
              </PaginationItem>
              
              {[...Array()].map((_, index) => (
                <PaginationItem key={index + 1}>
                  <PaginationLink
                    className="cursor-pointer"
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  )
}

export default RecentInvoice