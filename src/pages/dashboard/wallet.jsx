// import React, { useState } from "react";
// import { IoMdSwap } from "react-icons/io"; // Circular arrow icon

// export function Wallet() {
//   const [exchangeMode, setExchangeMode] = useState("Swap");
//   const [amount, setAmount] = useState("");
//   const [fromCurrency, setFromCurrency] = useState("ETH");
//   const [toCurrency, setToCurrency] = useState("USDC");
//   const [rate, setRate] = useState(1900); // Example rate for ETH/USDC swap
//   const [isLoading, setIsLoading] = useState(false); // For simulating loading state
  
//   const handleExchangeModeToggle = (mode) => setExchangeMode(mode);

//   // Sample data for balances, cards, transactions, and holdings
//   const balances = [
//     {
//       title: "Total Balance",
//       amount: "$176,676.72",
//       items: [{ name: "Bitcoin", value: "$50,156.01", color: "text-yellow-400" }],
//     },
//     {
//       title: "Crypto",
//       amount: "$76,676.72",
//       items: [{ name: "Ethereum", value: "$38,903.45", color: "text-blue-400" }],
//     },
//     {
//       title: "Fiat",
//       amount: "$100,000.72",
//       items: [
//         { name: "Binance Coin", value: "$26,101.01", color: "text-yellow-500" },
//         { name: "USD Coin", value: "$14,247.6", color: "text-gray-400" },
//       ],
//     },
//   ];

//   const cards = [
//     { bank: "Visa", type: "Debit", number: "**** 1572", color: "bg-gradient-to-r from-purple-400 to-blue-500" },
//     { bank: "American Express", type: "Debit", number: "**** 1147", color: "bg-gradient-to-r from-pink-400 to-red-500" },
//     { bank: "Discover Financial", type: "Debit", number: "**** 5651", color: "bg-gradient-to-r from-green-400 to-teal-500" },
//     { bank: "Visa", type: "Debit", number: "**** 1572", color: "bg-gradient-to-r from-yellow-400 to-orange-500" },
//   ];

//   const transactions = [
//     {
//       token: "Bitcoin",
//       date: "9 May 2023 9:00",
//       status: "Received",
//       link: "66b988be...08c46",
//       amount: "+$29,025.99",
//       change: { day: "+11.5%", hour: "-2.39%" },
//       color: "text-green-500",
//     },
//     {
//       token: "Ethereum",
//       date: "15 May 2023 16:00",
//       status: "Sent",
//       link: "0xd032187c...kg48",
//       amount: "-$15,271.24",
//       change: { day: "-4.02%", hour: "-3.11%" },
//       color: "text-red-500",
//     },
//     {
//       token: "Tether",
//       date: "13 May 2023 15:00",
//       status: "Sent",
//       link: "Rerg8sdbe...014B6",
//       amount: "-$9,456.01",
//       change: { day: "+0.00%", hour: "0.00%" },
//       color: "text-red-500",
//     },
//   ];

//   const holdings = [
//     {
//       name: "Bitcoin (BTC)",
//       change: "+9.01%",
//       price: "$30,742.7",
//       holdings: "1.51",
//       equivalent: "$50,156.01",
//       color: "text-green-500",
//     },
//     {
//       name: "Ethereum (ETH)",
//       change: "+5.8%",
//       price: "$1,889.01",
//       holdings: "25.78",
//       equivalent: "$38,903.45",
//       color: "text-green-500",
//     },
//     {
//       name: "Cardano (ADA)",
//       change: "+3.99%",
//       price: "$0.29",
//       holdings: "30,000",
//       equivalent: "$14,247.6",
//       color: "text-green-500",
//     },
//     {
//       name: "Ripple (XRP)",
//       change: "-14.24%",
//       price: "$0.47",
//       holdings: "30,000",
//       equivalent: "$14,247.6",
//       color: "text-red-500",
//     },
//   ];

//   // Currency options
//   const currencyOptions = ["ETH", "USDC", "BTC", "BNB", "ADA"];

//   const handleSwap = () => {
//     // Check if fromCurrency and toCurrency are different
//     if (fromCurrency !== toCurrency) {
//       setFromCurrency(toCurrency);
//       setToCurrency(fromCurrency);
//     } else {
//       alert("You cannot swap the same currency!");
//     }
//   };

//   // Function to set the amount to the max balance for the selected currency
//   const handleMaxAmount = () => {
//     const balanceItem = balances.find(balance =>
//       balance.items.some(item => item.name === fromCurrency)
//     );
    
//     // If balance is found, set the max amount, otherwise default to 0
//     setAmount(balanceItem ? balanceItem.items[0].value : "0");
//   };


//   return (
//     <div className="bg-gray-900 text-white min-h-screen p-8 space-y-8">
//       {/* Balances Section */}
//       <div className="grid grid-cols-3 gap-6">
//         {balances.map((balance, index) => (
//           <div key={index} className="bg-gray-800 p-6 rounded-lg">
//             <div className="text-sm font-light text-gray-400">{balance.title}</div>
//             <div className="text-2xl font-semibold">{balance.amount}</div>
//             <div className="mt-4 space-y-2">
//               {balance.items.map((item, idx) => (
//                 <div key={idx} className="flex items-center space-x-2">
//                   <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
//                   <span>{item.name}</span>
//                   <span className="ml-auto text-gray-400">{item.value}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
   
     

//       {/* Exchange Section (Updated for Uniswap-like swap) */}
//       <div className="bg-gray-800 p-6 rounded-lg w-96 mx-auto">
//         <div className="flex justify-between items-center mb-4">
//           <span className="text-lg font-semibold ">Swap</span>
        
//         </div>
//         <div className="space-y-6">
//           {/* From Token */}
//           <div className="relative">
//           <select
//             value={fromCurrency}
//             onChange={(e) => setFromCurrency(e.target.value)}
//             className="w-full bg-gray-700 p-4 rounded-lg text-white outline-none"
//           >
//             {currencyOptions.map((currency, idx) => (
//               <option key={idx} value={currency} disabled={currency === toCurrency}>
//                 {currency}
//               </option>
//             ))}
//           </select>
//           </div>

//           <div className="flex justify-center items-center space-x-4">
//             {/* Circular Swap Arrow */}
//             <div 
//               className="bg-gray-700 rounded-full p-2 text-white cursor-pointer"
//               onClick={handleSwap}
//             >
//               <IoMdSwap size={24} />
//             </div>
//           </div>

          
//           {/* To Currency Dropdown */}
//           <div className="relative">
//             <select
//               value={toCurrency}
//               onChange={(e) => setToCurrency(e.target.value)}
//               className="w-full bg-gray-700 p-4 rounded-lg text-white outline-none"
//             >
//               {currencyOptions
//                 .filter((currency) => currency !== fromCurrency)  // Filter out the fromCurrency
//                 .map((currency, idx) => (
//                   <option key={idx} value={currency}>
//                     {currency}
//                   </option>
//                 ))}
//             </select>
//           </div>

//           {/* Max Button */}
//       <div className="text-sm text-right mt-2">
//         <button onClick={handleMaxAmount} className="text-gray-400 hover:text-white">
//           Max (Balance: {balances.find(balance => balance.items.some(item => item.name === fromCurrency))?.items[0]?.value || "0"})
//         </button>
//       </div>

//           <div className="text-gray-400 text-sm text-center">
//             <p>1 {fromCurrency} = {rate} {toCurrency}</p>
//             <p>Total fees: $2.99</p>
//           </div>

//           <button
//             className={`w-full py-4 rounded-lg font-semibold ${isLoading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"} transition-all duration-300`}
//             onClick={() => {
//               setIsLoading(true);
//               setTimeout(() => setIsLoading(false), 2000); // Simulate loading
//             }}
//             disabled={isLoading}
//           >
//             {isLoading ? "Processing..." : "Swap"}
//           </button>
//         </div>
//       </div>

//       {/* Accounts and Cards Section */}
//       <div className="bg-gray-800 p-6 rounded-lg">
//         <h2 className="text-lg font-semibold mb-4">Accounts and Cards</h2>
//         <div className="flex space-x-4 overflow-x-auto">
//           {cards.map((card, idx) => (
//             <div key={idx} className={`w-72 h-40 ${card.color} text-white rounded-lg p-4`}>
//               <div className="font-semibold">{card.bank}</div>
//               <div className="text-sm">{card.type}</div>
//               <div className="text-xl mt-2">{card.number}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Holdings Section */}
//       <div className="bg-gray-800 p-6 rounded-lg">
//         <h2 className="text-lg font-semibold mb-4">Holdings Overview</h2>
//         <div className="space-y-4">
//           {holdings.map((holding, index) => (
//             <div key={index} className="flex justify-between items-center">
//               <div>
//                 <div className="font-semibold">{holding.name}</div>
//                 <div className="text-sm text-gray-400">{holding.price}</div>
//               </div>
//               <div className={`font-medium ${holding.color}`}>{holding.change}</div>
//               <div className="text-right">
//                 <div className="text-sm">Holdings: {holding.holdings}</div>
//                 <div className="text-sm text-gray-400">Equiv.: {holding.equivalent}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Transactions Section */}
//       <div className="bg-gray-800 p-6 rounded-lg">
//         <h2 className="text-lg font-semibold mb-4">Transactions</h2>
//         <table className="w-full">
//           <thead>
//             <tr className="text-left text-gray-400 text-sm">
//               <th className="pb-2">Token</th>
//               <th className="pb-2">Status</th>
//               <th className="pb-2">Transaction Link</th>
//               <th className="pb-2 text-right">Amount</th>
//             </tr>
//           </thead>
//           <tbody className="text-sm">
//             {transactions.map((transaction, index) => (
//               <tr key={index} className="border-b border-gray-700">
//                 <td className="py-2">{transaction.token}</td>
//                 <td className="py-2">{transaction.status}</td>
//                 <td className="py-2">
//                   <a href="#" className="text-blue-400 hover:underline">
//                     {transaction.link}
//                   </a>
//                 </td>
//                 <td className={`py-2 text-right ${transaction.color}`}>{transaction.amount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Wallet;


// second code

// import React, { useState, useEffect } from "react";
// import Web3 from "web3";
// import { IoMdSwap } from "react-icons/io"; // Import swap icon
// import { saveTransaction } from "../../services/api"; // Assuming the saveTransaction function from api.js

// export function Wallet() {
//   const [walletAddress, setWalletAddress] = useState("");
//   const [amount, setAmount] = useState("");
//   const [convertedAmount, setConvertedAmount] = useState(""); // Store the converted amount in "to" currency
//   const [fromCurrency, setFromCurrency] = useState("ETH");
//   const [toCurrency, setToCurrency] = useState("USDC");
//   const [fromPrice, setFromPrice] = useState(null); // Price of the fromCurrency
//   const [toPrice, setToPrice] = useState(null); // Price of the toCurrency
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(""); // Store error message for wallet connection

//   const currencyOptions = ["ETH", "USDC", "BTC", "BNB", "ADA"];
//   const contractAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"; // Replace with your contract address

//   const web3 = new Web3(window.ethereum);

//   const TokenSwapABI = [
//     {
//       "anonymous": false,
//       "inputs": [
//         { "indexed": true, "internalType": "address", "name": "user", "type": "address" },
//         { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" },
//         { "indexed": false, "internalType": "string", "name": "fromToken", "type": "string" },
//         { "indexed": false, "internalType": "string", "name": "toToken", "type": "string" }
//       ],
//       "name": "Swap",
//       "type": "event"
//     },
//     {
//       "inputs": [
//         { "internalType": "uint256", "name": "amount", "type": "uint256" },
//         { "internalType": "string", "name": "fromToken", "type": "string" },
//         { "internalType": "string", "name": "toToken", "type": "string" }
//       ],
//       "name": "swapTokens",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     }
//   ];

//   const contract = new web3.eth.Contract(TokenSwapABI, contractAddress);

//   const connectWallet = async () => {
//     try {
//       setErrorMessage(""); // Reset error message
//       const accounts = await web3.eth.requestAccounts();
//       setWalletAddress(accounts[0]);
//     } catch (error) {
//       console.error("Failed to connect wallet:", error);
//       setErrorMessage("Could not connect wallet. Make sure MetaMask is installed.");
//     }
//   };

//   // Fetch real-time price of a currency from CoinGecko API
//   const fetchRealTimePrice = async (currency) => {
//     const url = `https://api.coingecko.com/api/v3/simple/price?ids=${currency.toLowerCase()}&vs_currencies=usd`;
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       return data[currency.toLowerCase()]?.usd;
//     } catch (error) {
//       console.error("Error fetching price:", error);
//       return null;
//     }
//   };

//   // Fetch prices whenever the currencies are changed
//   useEffect(() => {
//     const fetchPrices = async () => {
//       const fromPrice = await fetchRealTimePrice(fromCurrency);
//       const toPrice = await fetchRealTimePrice(toCurrency);
//       setFromPrice(fromPrice);
//       setToPrice(toPrice);
//     };

//     fetchPrices();
//   }, [fromCurrency, toCurrency]);

//   const handleAmountChange = async (e) => {
//     const inputAmount = e.target.value;
//     setAmount(inputAmount);

//     if (!inputAmount || parseFloat(inputAmount) <= 0) {
//       setConvertedAmount("");
//       return;
//     }

//     if (fromPrice && toPrice) {
//       // Convert the amount based on real-time prices
//       const converted = (inputAmount * fromPrice) / toPrice;
//       setConvertedAmount(converted.toFixed(2)); // Set the converted amount to two decimal places
//     }
//   };

//   const handleSwap = async () => {
//     if (fromCurrency === toCurrency) {
//       alert("You cannot swap the same currency!");
//       return;
//     }

//     if (!walletAddress) {
//       alert("Please connect your wallet first!");
//       return;
//     }

//     if (!amount || parseFloat(amount) <= 0) {
//       alert("Please enter a valid amount!");
//       return;
//     }

//     try {
//       setIsLoading(true);

//       const amountInWei = web3.utils.toWei(amount, "ether");

//       const receipt = await contract.methods
//         .swapTokens(amountInWei, fromCurrency, toCurrency)
//         .send({ from: walletAddress });

//       alert("Transaction successful!");
//       console.log("Transaction details:", receipt);

//       // Save transaction in API (Database)
//       await saveTransaction({
//         from: walletAddress,
//         amount,
//         fromCurrency,
//         toCurrency,
//         transactionHash: receipt.transactionHash,
//       });

//     } catch (error) {
//       console.error("Transaction Failed:", error);
//       alert("Transaction failed!");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="bg-gray-900 text-white min-h-screen p-8 space-y-8">
//       {walletAddress && (
//         <div className="absolute top-4 right-4 text-white bg-blue-600 px-4 py-2 rounded-lg text-sm">
//           Connected Wallet: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
//         </div>
//       )}
//       <div className="text-right">
//         {!walletAddress ? (
//           <button
//             className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
//             onClick={connectWallet}
//           >
//             Connect Wallet
//           </button>
//         ) : (
//           <p className="text-sm text-gray-400">Connected Wallet: {walletAddress}</p>
//         )}
//       </div>

//       <div className="bg-gray-800 p-6 rounded-lg w-96 mx-auto">
//         <div className="flex justify-between items-center mb-4">
//           <span className="text-lg font-semibold">Swap</span>
//         </div>
//         <div className="space-y-6">
//           <div className="relative">
//             <select
//               value={fromCurrency}
//               onChange={(e) => setFromCurrency(e.target.value)}
//               className="w-full bg-gray-700 p-4 rounded-lg text-white outline-none"
//             >
//               {currencyOptions.map((currency, idx) => (
//                 <option key={idx} value={currency} disabled={currency === toCurrency}>
//                   {currency}
//                 </option>
//               ))}
//             </select>
//             {fromPrice && <div className="mt-2 text-sm text-gray-400">1 {fromCurrency} = ${fromPrice}</div>}
//           </div>

//           <div className="flex justify-center items-center space-x-4">
//             <div
//               className="bg-gray-700 rounded-full p-2 text-white cursor-pointer"
//               onClick={() => {
//                 setFromCurrency(toCurrency);
//                 setToCurrency(fromCurrency);
//               }}
//             >
//               <IoMdSwap size={24} />
//             </div>
//           </div>

//           <div className="relative">
//             <select
//               value={toCurrency}
//               onChange={(e) => setToCurrency(e.target.value)}
//               className="w-full bg-gray-700 p-4 rounded-lg text-white outline-none"
//             >
//               {currencyOptions
//                 .filter((currency) => currency !== fromCurrency)
//                 .map((currency, idx) => (
//                   <option key={idx} value={currency}>
//                     {currency}
//                   </option>
//                 ))}
//             </select>
//             {toPrice && <div className="mt-2 text-sm text-gray-400">1 {toCurrency} = ${toPrice}</div>}
//           </div>

//           {/* Amount Input Field (From Currency) */}
//           <div className="relative">
//             <input
//               type="number"
//               value={amount}
//               onChange={handleAmountChange}
//               className="w-full bg-gray-700 p-4 rounded-lg text-white outline-none"
//               placeholder="Enter Amount"
//               step="any"
//             />
//           </div>

//           {/* Converted Amount Field (To Currency) */}
//           <div className="relative">
//             <input
//               type="text"
//               value={convertedAmount}
//               readOnly
//               className="w-full bg-gray-700 p-4 rounded-lg text-white outline-none"
//               placeholder="Converted Amount"
//             />
//           </div>

//           <button
//             className={`w-full py-4 rounded-lg font-semibold ${isLoading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"} transition-all duration-300`}
//             onClick={handleSwap}
//             disabled={isLoading}
//           >
//             {isLoading ? "Processing..." : "Swap"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Wallet;

// third code working


// import React, { useState, useEffect } from "react";
// import Web3 from "web3";
// import { IoMdSwap } from "react-icons/io"; // Import swap icon
// import { saveTransaction } from "../../services/api"; // Assuming the saveTransaction function from api.js

// export function Wallet() {
//   const [walletAddress, setWalletAddress] = useState("");
//   const [amount, setAmount] = useState(""); // The amount entered in the 'Sell' currency
//   const [convertedAmount, setConvertedAmount] = useState(""); // The converted amount in 'Buy' currency
//   const [fromCurrency, setFromCurrency] = useState("ETH");
//   const [toCurrency, setToCurrency] = useState("USDT");
//   const [isLoading, setIsLoading] = useState(false);
//   const [fromPrice, setFromPrice] = useState(null);
//   const [toPrice, setToPrice] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(""); // Store error message for wallet connection

//   const currencyOptions = ["ETH", "USDC", "BTC", "BNB", "ADA"];
//   const contractAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"; // Replace with your contract address

//   const web3 = new Web3(window.ethereum);

//   const TokenSwapABI = [
//     {
//       "anonymous": false,
//       "inputs": [
//         { "indexed": true, "internalType": "address", "name": "user", "type": "address" },
//         { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" },
//         { "indexed": false, "internalType": "string", "name": "fromToken", "type": "string" },
//         { "indexed": false, "internalType": "string", "name": "toToken", "type": "string" }
//       ],
//       "name": "Swap",
//       "type": "event"
//     },
//     {
//       "inputs": [
//         { "internalType": "uint256", "name": "amount", "type": "uint256" },
//         { "internalType": "string", "name": "fromToken", "type": "string" },
//         { "internalType": "string", "name": "toToken", "type": "string" }
//       ],
//       "name": "swapTokens",
//       "outputs": [],
//       "stateMutability": "nonpayable",
//       "type": "function"
//     }
//   ];

//   const contract = new web3.eth.Contract(TokenSwapABI, contractAddress);

//   const connectWallet = async () => {
//     try {
//       setErrorMessage(""); // Reset error message
//       const accounts = await web3.eth.requestAccounts();
//       setWalletAddress(accounts[0]);
//     } catch (error) {
//       console.error("Failed to connect wallet:", error);
//       setErrorMessage("Could not connect wallet. Make sure MetaMask is installed.");
//     }
//   };

//   const handleSwap = async () => {
//     if (fromCurrency === toCurrency) {
//       alert("You cannot swap the same currency!");
//       return;
//     }

//     if (!walletAddress) {
//       alert("Please connect your wallet first!");
//       return;
//     }

//     if (!amount || parseFloat(amount) <= 0) {
//       alert("Please enter a valid amount!");
//       return;
//     }

//     try {
//       setIsLoading(true);

//       const amountInWei = web3.utils.toWei(amount, "ether");

//       const receipt = await contract.methods
//         .swapTokens(amountInWei, fromCurrency, toCurrency)
//         .send({ from: walletAddress });

//       alert("Transaction successful!");
//       console.log("Transaction details:", receipt);

//       // Save transaction in API (Database)
//       await saveTransaction({
//         from: walletAddress,
//         amount,
//         fromCurrency,
//         toCurrency,
//         transactionHash: receipt.transactionHash,
//       });

//     } catch (error) {
//       console.error("Transaction Failed:", error);
//       alert("Transaction failed!");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Function to fetch real-time price from CoinGecko with CORS proxy
//   const fetchRealTimePrice = async (currency) => {
//     const url = `https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/simple/price?ids=${currency.toLowerCase()}&vs_currencies=usd`;
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       return data[currency.toLowerCase()]?.usd;
//     } catch (error) {
//       console.error("Error fetching price:", error);
//       return null;
//     }
//   };

//   // Fetch prices when either the from or to currency changes
//   useEffect(() => {
//     const fetchPrices = async () => {
//       const fromCurrencyPrice = await fetchRealTimePrice(fromCurrency);
//       const toCurrencyPrice = await fetchRealTimePrice(toCurrency);
//       setFromPrice(fromCurrencyPrice);
//       setToPrice(toCurrencyPrice);

//       if (fromCurrencyPrice && amount) {
//         const calculatedAmount = (parseFloat(amount) * fromCurrencyPrice).toFixed(2);
//         setConvertedAmount(calculatedAmount); // Update converted amount
//       }
//     };

//     const debouncedFetch = setTimeout(fetchPrices, 500); // Debounce with a 500ms delay

//     return () => clearTimeout(debouncedFetch); // Clean up timeout on every re-render
//   }, [fromCurrency, toCurrency, amount]);

//   // Handle changes to the fromCurrency and toCurrency
//   const handleCurrencyChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "fromCurrency") {
//       setFromCurrency(value);
//       setAmount(""); // Clear the amount when the currency is changed
//     } else if (name === "toCurrency") {
//       setToCurrency(value);
//     }
//   };

//   return (
//     <div className="bg-gray-900 text-white min-h-screen p-8 space-y-8">
//       {walletAddress && (
//         <div className="absolute top-4 right-4 text-white bg-blue-600 px-4 py-2 rounded-lg text-sm">
//           Connected Wallet: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
//         </div>
//       )}
//       <div className="text-right">
//         {!walletAddress ? (
//           <button
//             className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
//             onClick={connectWallet}
//           >
//             Connect Wallet
//           </button>
//         ) : (
//           <p className="text-sm text-gray-400">Connected Wallet: {walletAddress}</p>
//         )}
//       </div>

//       <div className="bg-gray-800 p-6 rounded-lg w-96 mx-auto">
//         <div className="flex justify-between items-center mb-4">
//           <span className="text-lg font-semibold">Swap</span>
//         </div>
//         <div className="space-y-6">
//           <div className="relative">
//             <select
//               name="fromCurrency"
//               value={fromCurrency}
//               onChange={handleCurrencyChange}
//               className="w-full bg-gray-700 p-4 rounded-lg text-white outline-none"
//             >
//               {currencyOptions.map((currency, idx) => (
//                 <option key={idx} value={currency} disabled={currency === toCurrency}>
//                   {currency}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex justify-center items-center space-x-4">
//             <div
//               className="bg-gray-700 rounded-full p-2 text-white cursor-pointer"
//               onClick={() => {
//                 setFromCurrency(toCurrency);
//                 setToCurrency(fromCurrency);
//               }}
//             >
//               <IoMdSwap size={24} />
//             </div>
//           </div>

//           <div className="relative">
//             <select
//               name="toCurrency"
//               value={toCurrency}
//               onChange={handleCurrencyChange}
//               className="w-full bg-gray-700 p-4 rounded-lg text-white outline-none"
//             >
//               {currencyOptions
//                 .filter((currency) => currency !== fromCurrency)
//                 .map((currency, idx) => (
//                   <option key={idx} value={currency}>
//                     {currency}
//                   </option>
//                 ))}
//             </select>
//           </div>

//           <div className="relative">
//             <input
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               className="w-full bg-gray-700 p-4 rounded-lg text-white outline-none"
//               placeholder={`Enter ${fromCurrency} amount`}
//             />
//             {fromPrice && (
//               <p className="text-sm text-gray-400 mt-2">
//                 1 {fromCurrency} = ${fromPrice} USD
//               </p>
//             )}
//           </div>

//           <div className="relative">
//             <input
//               type="text"
//               value={convertedAmount ? `${convertedAmount} ${toCurrency}` : ""}
//               readOnly
//               className="w-full bg-gray-700 p-4 rounded-lg text-white outline-none"
//               placeholder={`Converted amount in ${toCurrency}`}
//             />
//             {toPrice && (
//               <p className="text-sm text-gray-400 mt-2">
//                 1 {toCurrency} = ${toPrice} USD
//               </p>
//             )}
//           </div>

//           <button
//             className={`w-full py-4 rounded-lg font-semibold ${isLoading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"} text-white`}
//             onClick={handleSwap}
//             disabled={isLoading}
//           >
//             {isLoading ? "Swapping..." : "Swap Now"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Wallet;

//fourth code

import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { IoMdSwap } from "react-icons/io";
import { saveTransaction, fetchKucoinTokens, fetchKucoinPrice } from "../../services/api";

export function Wallet() {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("ETH");
  const [toCurrency, setToCurrency] = useState("USDT");
  const [isLoading, setIsLoading] = useState(false);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const web3 = new Web3(window.ethereum);
  const contractAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";

  const TokenSwapABI = [
    {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: "address", name: "user", type: "address" },
        { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
        { indexed: false, internalType: "string", name: "fromToken", type: "string" },
        { indexed: false, internalType: "string", name: "toToken", type: "string" },
      ],
      name: "Swap",
      type: "event",
    },
    {
      inputs: [
        { internalType: "uint256", name: "amount", type: "uint256" },
        { internalType: "string", name: "fromToken", type: "string" },
        { internalType: "string", name: "toToken", type: "string" },
      ],
      name: "swapTokens",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const contract = new web3.eth.Contract(TokenSwapABI, contractAddress);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const tokens = await fetchKucoinTokens();
        if (tokens && tokens.data) {
          const tokenList = tokens.data.map((token) => ({
            id: token.currency,
            symbol: token.currency,
          }));
          setCurrencyOptions(tokenList);
        }
      } catch (error) {
        console.error("Error fetching tokens:", error);
        setErrorMessage("Failed to load token data.");
      }
    };
    fetchTokens();
  }, []);

  const connectWallet = async () => {
    try {
      const accounts = await web3.eth.requestAccounts();
      setWalletAddress(accounts[0]);
    } catch (error) {
      console.error("Wallet connection error:", error);
      setErrorMessage("Unable to connect wallet. Ensure MetaMask is installed.");
    }
  };

  const handleSwap = async () => {
    if (fromCurrency === toCurrency) {
      alert("From and To currencies cannot be the same!");
      return;
    }

    if (!walletAddress) {
      alert("Please connect your wallet first!");
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount!");
      return;
    }

    try {
      setIsLoading(true);

      const amountInWei = web3.utils.toWei(amount, "ether");
      const receipt = await contract.methods
        .swapTokens(amountInWei, fromCurrency, toCurrency)
        .send({ from: walletAddress });

      alert("Swap successful!");
      console.log("Transaction:", receipt);

      await saveTransaction({
        walletAddress,
        amount,
        fromCurrency,
        toCurrency,
        transactionHash: receipt.transactionHash,
      });
    } catch (error) {
      console.error("Swap error:", error);
      alert("Swap failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to fetch prices and calculate the converted amount
  const fetchPrices = async () => {
    try {
      // Skip if fromCurrency and toCurrency are the same
      if (fromCurrency === toCurrency) {
        setConvertedAmount(amount);  // No conversion needed
        return;
      }

      const fromPrice = await fetchKucoinPrice(fromCurrency);  // Fetch price for fromCurrency
      const toPrice = await fetchKucoinPrice(toCurrency);  // Fetch price for toCurrency

      if (fromPrice && toPrice && amount) {
        const calculatedAmount = ((amount * fromPrice) / toPrice).toFixed(6);
        setConvertedAmount(calculatedAmount);
      } else {
        throw new Error("Unable to fetch valid price data.");
      }
    } catch (error) {
      setErrorMessage("Failed to fetch price data.");
    }
  };

  useEffect(() => {
    if (amount && fromCurrency && toCurrency) {
      fetchPrices();
    }
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "1.5rem", marginBottom: "20px" }}>
        Currency Swap
      </h1>
      <button
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={connectWallet}
      >
        {walletAddress
          ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
          : "Connect Wallet"}
      </button>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label>From:</label>
          <select
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencyOptions.map((token) => (
              <option key={token.id} value={token.symbol}>
                {token.symbol}
              </option>
            ))}
          </select>
          <input
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />
        </div>
        <IoMdSwap
          style={{
            fontSize: "1.5rem",
            color: "#007bff",
            cursor: "pointer",
            alignSelf: "center",
          }}
          onClick={() => {
            const temp = fromCurrency;
            setFromCurrency(toCurrency);
            setToCurrency(temp);
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label>To:</label>
          <select
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencyOptions.map((token) => (
              <option key={token.id} value={token.symbol}>
                {token.symbol}
              </option>
            ))}
          </select>
          <input
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            value={convertedAmount}
            placeholder="Converted Amount"
            readOnly
          />
        </div>
      </div>
      <button
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleSwap}
        disabled={isLoading}
      >
        {isLoading ? "Swapping..." : "Swap"}
      </button>
    </div>
  );
}

export default Wallet;
