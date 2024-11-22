// import React, { useState, useEffect } from "react";
// import {
//   Card,
//   CardBody,
//   Typography,
//   Button,
//   Input,
//   Select,
//   Option,
// } from "@material-tailwind/react";
// import QRCode from "react-qr-code";
// import axios from "axios";
// import { fetchWalletAddress } from "../../services/api";

// export function Deposit() {
//   const [step, setStep] = useState(1);
//   const [selectedCoin, setSelectedCoin] = useState("ETH");
//   const [selectedChain, setSelectedChain] = useState("ERC20");
//   const [depositAddress, setDepositAddress] = useState("");

//   const steps = ["Choose Coin to Deposit", "Choose a Chain", "Confirm Deposit Details"];

//   // Fetch wallet address from backend
//   useEffect(() => {
//     (async () => {
//       try {
//         const response = await axios.get(
//           `/api/wallets?coin=${selectedCoin}&chain=${selectedChain}`
//         );
//         if (response.data && response.data.length > 0) {
//           setDepositAddress(response.data[0].wallet_address);
//         } else {
//           setDepositAddress("Address not available");
//         }
//       } catch (error) {
//         console.error("Error fetching wallet address:", error);
//         setDepositAddress("Error fetching address");
//       }
//     })();
//   }, [selectedCoin, selectedChain]);
  
//   return (
//     <div className="mt-12 mb-8 flex flex-col items-center gap-8">
//       <Card className="w-full max-w-lg">
//         <CardBody>
//           {/* Stepper */}
//           <div className="mb-8 flex items-center justify-between">
//             {steps.map((label, index) => (
//               <div key={index} className="flex items-center">
//                 <div
//                   className={`h-8 w-8 flex items-center justify-center rounded-full text-white ${
//                     step === index + 1 ? "bg-blue-500" : "bg-gray-300"
//                   }`}
//                 >
//                   {index + 1}
//                 </div>
//                 {index < steps.length - 1 && (
//                   <div className="h-1 w-10 bg-gray-300"></div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Step Content */}
//           {step === 1 && (
//             <div className="flex flex-col gap-4">
//               <Typography variant="h6" className="text-gray-700">
//                 Choose Coin to Deposit
//               </Typography>
//               <Select
//                 label="Select Coin"
//                 value={selectedCoin}
//                 onChange={(value) => setSelectedCoin(value)}
//               >
//                 <Option value="ETH">ETH Ethereum</Option>
//                 <Option value="BTC">BTC Bitcoin</Option>
//                 <Option value="USDT">USDT Tether</Option>
//               </Select>
//               <Button
//                 onClick={() => setStep(2)}
//                 className="mt-4"
//                 color="blue"
//               >
//                 Next
//               </Button>
//             </div>
//           )}

//           {step === 2 && (
//             <div className="flex flex-col gap-4">
//               <Typography variant="h6" className="text-gray-700">
//                 Choose a Chain
//               </Typography>
//               <Select
//                 label="Select Chain"
//                 value={selectedChain}
//                 onChange={(value) => setSelectedChain(value)}
//               >
//                 <Option value="ERC20">ERC20</Option>
//                 <Option value="BEP20">BEP20</Option>
//                 <Option value="TRC20">TRC20</Option>
//               </Select>
//               <div className="flex justify-between">
//                 <Button onClick={() => setStep(1)} color="gray">
//                   Back
//                 </Button>
//                 <Button onClick={() => setStep(3)} color="blue">
//                   Next
//                 </Button>
//               </div>
//             </div>
//           )}

//           {step === 3 && (
//             <div className="flex flex-col gap-4">
//               <Typography variant="h6" className="text-gray-700">
//                 Confirm Deposit Details
//               </Typography>
//               <div className="flex flex-col items-center gap-4">
//                 <QRCode value={depositAddress} size={128} />
//                 <Typography className="text-gray-700">
//                   {selectedCoin} Address ({selectedChain})
//                 </Typography>
//                 <div className="flex items-center gap-2">
//                   <Input
//                     readOnly
//                     value={depositAddress}
//                     className="w-full"
//                   />
//                   <Button
//                     color="blue"
//                     onClick={() => navigator.clipboard.writeText(depositAddress)}
//                   >
//                     Copy
//                   </Button>
//                 </div>
//               </div>
//               <div className="text-sm text-gray-500">
//                 <p>Minimum Deposit Amount: 0 {selectedCoin}</p>
//                 <p>Deposit Arrival: 6 confirmations</p>
//                 <p>Withdrawal Unlocked: 64 confirmations</p>
//               </div>
//               <div className="flex justify-between">
//                 <Button onClick={() => setStep(2)} color="gray">
//                   Back
//                 </Button>
//                 <Button color="blue">Finish</Button>
//               </div>
//             </div>
//           )}
//         </CardBody>
//       </Card>
//     </div>
//   );
// }

// export default Deposit;

import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import axios from "axios";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";

import { initializeContract, depositToContract } from "../../services/smartContract";

const contractAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
const abi = [
  {
    "inputs": [],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Deposit",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "balances",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

export function Deposit() {
  const [step, setStep] = useState(1);
  const [selectedCoin, setSelectedCoin] = useState("ETH");
  const [selectedChain, setSelectedChain] = useState("ERC20");
  const [depositAddress, setDepositAddress] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `/api/wallets?coin=${selectedCoin}&chain=${selectedChain}`
        );
        if (response.data && response.data[0]?.wallet_address) {
          setDepositAddress(response.data[0].wallet_address);
        } else {
          setDepositAddress("Address not available");
        }
      } catch (error) {
        console.error("Error fetching wallet address:", error);
        setDepositAddress("Error fetching address");
      }
    })();
  }, [selectedCoin, selectedChain]);

  // Validation for deposit amount
  const handleDeposit = async () => {
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      alert("Please enter a valid deposit amount.");
      return;
    }
    try {
      const { contract } = initializeContract(contractAddress, abi);
      const result = await depositToContract(contract, amount);
      alert(`Deposit successful! Transaction Hash: ${result.txHash}`);
    } catch (error) {
      console.error("Deposit error:", error);
      alert("Deposit failed.");
    }
  };

  return (
    <div className="mt-12 mb-8 flex flex-col items-center gap-8">
      <Card className="w-full max-w-lg">
        <CardBody>
          <div className="mb-8 flex items-center justify-between">
            {/* Stepper */}
            {["Choose Coin", "Choose Chain", "Confirm"].map((label, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`h-8 w-8 flex items-center justify-center rounded-full text-white ${
                    step === index + 1 ? "bg-blue-500" : "bg-gray-300"
                  }`}
                >
                  {index + 1}
                </div>
                {index < 2 && <div className="h-1 w-10 bg-gray-300"></div>}
              </div>
            ))}
          </div>

          {/* Step Content */}
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <Typography variant="h6">Choose Coin to Deposit</Typography>
              <Select
                label="Select Coin"
                value={selectedCoin}
                onChange={(value) => setSelectedCoin(value)}
              >
                <Option value="ETH">ETH Ethereum</Option>
                <Option value="BTC">BTC Bitcoin</Option>
                <Option value="USDT">USDT Tether</Option>
              </Select>
              <Button onClick={() => setStep(2)}>Next</Button>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-4">
              <Typography variant="h6">Choose a Chain</Typography>
              <Select
                label="Select Chain"
                value={selectedChain}
                onChange={(value) => setSelectedChain(value)}
              >
                <Option value="ERC20">ERC20</Option>
                <Option value="BEP20">BEP20</Option>
                <Option value="TRC20">TRC20</Option>
              </Select>
              <div className="flex justify-between">
                <Button onClick={() => setStep(1)}>Back</Button>
                <Button onClick={() => setStep(3)}>Next</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col items-center gap-4">
              <Typography variant="h6">Confirm Deposit Details</Typography>
              <QRCode value={depositAddress} size={100} />
              <Typography>Deposit Address: {depositAddress}</Typography>
              <Input
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <Button onClick={handleDeposit}>Deposit</Button>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}

export default Deposit;
