import { Receipt, Soup, Wifi } from "lucide-react";
import { Visa } from "../components/cards/visa";
import { Mastercard } from "../components/cards/mastercard";

export type Transaction = typeof transactions[number]

export const transactions = [
  {
    id: '#67593',
    name: 'netflix',
    type: 'subscription',
    icon: <Receipt className="fill-white" size={32} />,
    amount: 6.99,
    date: 'september 26',
    time: '12:01 am',
    paymentMethod: {
      type: 'Credit Card',
      icon: <Visa />,
      account: 'XXXX 9342'
    }
  },
  {
    id: '#67594',
    name: 'orange',
    type: 'mobile recharge',
    icon: <Wifi className="stroke-white" size={28} />,
    amount: 4.05,
    date: 'september 26',
    time: '12:01 am',
    paymentMethod: {
      type: 'Credit Card',
      icon: <Visa />,
      account: 'XXXX 9342'
    }
  },
  {
    id: '#67595',
    name: 'spotify',
    type: 'subscription',
    icon: <Receipt className="fill-white" size={32} />,
    amount: 5.01,
    date: 'september 26',
    time: '12:01 am',
    paymentMethod: {
      type: 'Credit Card',
      icon: <Mastercard />,
      account: 'XXXX 9342'
    }
  },
  {
    id: '#67596',
    name: 'figma',
    type: 'subscription',
    icon: <Receipt className="fill-white" size={32} />,
    amount: 15.55,
    date: 'september 26',
    time: '12:01 am',
    paymentMethod: {
      type: 'Credit Card',
      icon: <Visa />,
      account: 'XXXX 9342'
    }
  },
  {
    id: '#67597',
    name: 'rāmen',
    type: 'restaurant',
    icon: <Soup className="fill-white stroke-white" size={28} />,
    amount: 12.05,
    date: 'september 26',
    time: '12:01 am',
    paymentMethod: {
      type: 'Credit Card',
      icon: <Mastercard />,
      account: 'XXXX 9342'
    }
  },
] as const