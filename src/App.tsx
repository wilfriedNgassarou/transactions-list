import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
import { SelectedTransactionWrapper } from "./components/selected-transaction-wrapper"
import { Transaction, transactions } from "./constants/transactions"
import { Credits } from "./components/credits"


function App() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)

  return (
    <section className="w-full h-dvh flex justify-center items-center bg-gray-50 shadow">
      <Credits />
      {selectedTransaction != null && (
        <SelectedTransactionWrapper
          transaction={selectedTransaction}
          setSelectedTransaction={setSelectedTransaction} 
        />
      )}
      <motion.div 
        key="transactions-list"
        layoutId="wrapper" 
        className="bg-white w-80 p-4 rounded-3xl"
      >
        <h2 className="font-medium text-gray-700">
          Transactions
        </h2>
        <section className="my-3 flex flex-col gap-4">
          {transactions.map((item) => (
            <div 
              key={item.id}
              className="flex justify-between cursor-default"
              onClick={() => setSelectedTransaction(item)}
            >
              <div className=" flex items-center gap-2">
                <motion.div
                  layoutId={`icon-${item.id}`}
                  className="w-12 h-12 bg-black flex justify-center items-center"
                  animate={{ borderRadius: 24 }}
                  style={{ borderRadius: 24 }}
                >
                  {item.icon}
                </motion.div>
                <motion.div
                  layoutId={`header-${item.id}`} 
                  className="flex flex-col gap-1"
                >
                  <h3 className=" leading-none capitalize font-medium">
                    {item.name}
                  </h3>
                  <h4 className="leading-none capitalize text-gray-500">
                    {item.type}
                  </h4>
                </motion.div>
              </div>
              <motion.span 
                layoutId={`amount-${item.id}`}
                className="font-medium text-gray-500"
              >
                -${item.amount}
              </motion.span>
            </div>
          ))}
        </section>
        <motion.button
          className="w-full py-2 rounded-xl flex justify-center items-center gap-1 bg-gray-200 text-gray-800"
        >
          <span>All Transactions</span>
          <ArrowRight size={16} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default App
