import React, { useState } from "react";
import { IoMdSwap } from "react-icons/io"; // Circular arrow icon

export function Wallet2() {
  const [exchangeMode, setExchangeMode] = useState("Swap");
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("ETH");
  const [toCurrency, setToCurrency] = useState("USDC");
  const [rate, setRate] = useState(1900); // Example rate for ETH/USDC swap
  const [isLoading, setIsLoading] = useState(false); // For simulating loading state
  
  const handleExchangeModeToggle = (mode) => setExchangeMode(mode);

  // Sample data for balances, cards, transactions, and holdings
  const balances = [
    {
      title: "Total Balance",
      amount: "$176,676.72",
      items: [{ name: "Bitcoin", value: "$50,156.01", color: "text-yellow-400" }],
    },
    {
      title: "Crypto",
      amount: "$76,676.72",
      items: [{ name: "Ethereum", value: "$38,903.45", color: "text-blue-400" }],
    },
    {
      title: "Fiat",
      amount: "$100,000.72",
      items: [
        { name: "Binance Coin", value: "$26,101.01", color: "text-yellow-500" },
        { name: "USD Coin", value: "$14,247.6", color: "text-gray-400" },
      ],
    },
  ];

  const cards = [
    { bank: "Visa", type: "Debit", number: "**** 1572", color: "bg-gradient-to-r from-purple-400 to-blue-500" },
    { bank: "American Express", type: "Debit", number: "**** 1147", color: "bg-gradient-to-r from-pink-400 to-red-500" },
    { bank: "Discover Financial", type: "Debit", number: "**** 5651", color: "bg-gradient-to-r from-green-400 to-teal-500" },
    { bank: "Visa", type: "Debit", number: "**** 1572", color: "bg-gradient-to-r from-yellow-400 to-orange-500" },
  ];

  const transactions = [
    {
      token: "Bitcoin",
      date: "9 May 2023 9:00",
      status: "Received",
      link: "66b988be...08c46",
      amount: "+$29,025.99",
      change: { day: "+11.5%", hour: "-2.39%" },
      color: "text-green-500",
    },
    {
      token: "Ethereum",
      date: "15 May 2023 16:00",
      status: "Sent",
      link: "0xd032187c...kg48",
      amount: "-$15,271.24",
      change: { day: "-4.02%", hour: "-3.11%" },
      color: "text-red-500",
    },
    {
      token: "Tether",
      date: "13 May 2023 15:00",
      status: "Sent",
      link: "Rerg8sdbe...014B6",
      amount: "-$9,456.01",
      change: { day: "+0.00%", hour: "0.00%" },
      color: "text-red-500",
    },
  ];

  const holdings = [
    {
      name: "Bitcoin (BTC)",
      change: "+9.01%",
      price: "$30,742.7",
      holdings: "1.51",
      equivalent: "$50,156.01",
      color: "text-green-500",
    },
    {
      name: "Ethereum (ETH)",
      change: "+5.8%",
      price: "$1,889.01",
      holdings: "25.78",
      equivalent: "$38,903.45",
      color: "text-green-500",
    },
    {
      name: "Cardano (ADA)",
      change: "+3.99%",
      price: "$0.29",
      holdings: "30,000",
      equivalent: "$14,247.6",
      color: "text-green-500",
    },
    {
      name: "Ripple (XRP)",
      change: "-14.24%",
      price: "$0.47",
      holdings: "30,000",
      equivalent: "$14,247.6",
      color: "text-red-500",
    },
  ];

  // Currency options
  const currencyOptions = ["ETH", "USDC", "BTC", "BNB", "ADA"];

  const handleSwap = () => {
    // Check if fromCurrency and toCurrency are different
    if (fromCurrency !== toCurrency) {
      setFromCurrency(toCurrency);
      setToCurrency(fromCurrency);
    } else {
      alert("You cannot swap the same currency!");
    }
  };

  // Function to set the amount to the max balance for the selected currency
  const handleMaxAmount = () => {
    const balanceItem = balances.find(balance =>
      balance.items.some(item => item.name === fromCurrency)
    );
    
    // If balance is found, set the max amount, otherwise default to 0
    setAmount(balanceItem ? balanceItem.items[0].value : "0");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 space-y-8">
      {/* Balances Section */}
      <div className="grid grid-cols-3 gap-6">
        {balances.map((balance, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <div className="text-sm font-light text-gray-400">{balance.title}</div>
            <div className="text-2xl font-semibold">{balance.amount}</div>
            <div className="mt-4 space-y-2">
              {balance.items.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                  <span>{item.name}</span>
                  <span className="ml-auto text-gray-400">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Exchange Section (Updated for Uniswap-like swap) */}
      <div className="bg-gray-800 p-6 rounded-lg w-96 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold ">Swap</span>
        
        </div>
        <div className="space-y-6">
          {/* From Token */}
          <div className="relative">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full bg-gray-700 p-4 rounded-lg text-white outline-none"
          >
            {currencyOptions.map((currency, idx) => (
              <option key={idx} value={currency} disabled={currency === toCurrency}>
                {currency}
              </option>
            ))}
          </select>
          </div>

          <div className="flex justify-center items-center space-x-4">
            {/* Circular Swap Arrow */}
            <div 
              className="bg-gray-700 rounded-full p-2 text-white cursor-pointer"
              onClick={handleSwap}
            >
              <IoMdSwap size={24} />
            </div>
          </div>

          
          {/* To Currency Dropdown */}
          <div className="relative">
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full bg-gray-700 p-4 rounded-lg text-white outline-none"
            >
              {currencyOptions
                .filter((currency) => currency !== fromCurrency)  // Filter out the fromCurrency
                .map((currency, idx) => (
                  <option key={idx} value={currency}>
                    {currency}
                  </option>
                ))}
            </select>
          </div>

          {/* Max Button */}
      <div className="text-sm text-right mt-2">
        <button onClick={handleMaxAmount} className="text-gray-400 hover:text-white">
          Max (Balance: {balances.find(balance => balance.items.some(item => item.name === fromCurrency))?.items[0]?.value || "0"})
        </button>
      </div>

          <div className="text-gray-400 text-sm text-center">
            <p>1 {fromCurrency} = {rate} {toCurrency}</p>
            <p>Total fees: $2.99</p>
          </div>

          <button
            className={`w-full py-4 rounded-lg font-semibold ${isLoading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"} transition-all duration-300`}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 2000); // Simulate loading
            }}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Swap"}
          </button>
        </div>
      </div>

      {/* Accounts and Cards Section */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Accounts and Cards</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {cards.map((card, idx) => (
            <div key={idx} className={`w-72 h-40 ${card.color} text-white rounded-lg p-4`}>
              <div className="font-semibold">{card.bank}</div>
              <div className="text-sm">{card.type}</div>
              <div className="text-xl mt-2">{card.number}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Holdings Section */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Holdings Overview</h2>
        <div className="space-y-4">
          {holdings.map((holding, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <div className="font-semibold">{holding.name}</div>
                <div className="text-sm text-gray-400">{holding.price}</div>
              </div>
              <div className={`font-medium ${holding.color}`}>{holding.change}</div>
              <div className="text-right">
                <div className="text-sm">Holdings: {holding.holdings}</div>
                <div className="text-sm text-gray-400">Equiv.: {holding.equivalent}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transactions Section */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Transactions</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 text-sm">
              <th className="pb-2">Token</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Transaction Link</th>
              <th className="pb-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-2">{transaction.token}</td>
                <td className="py-2">{transaction.status}</td>
                <td className="py-2">
                  <a href="#" className="text-blue-400 hover:underline">
                    {transaction.link}
                  </a>
                </td>
                <td className={`py-2 text-right ${transaction.color}`}>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Wallet2;
