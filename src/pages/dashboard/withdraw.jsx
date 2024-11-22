import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  Select,
  Option,
  Radio,
} from "@material-tailwind/react";

export function Withdraw() {
  const [selectedCoin, setSelectedCoin] = useState("BTC");
  const [withdrawType, setWithdrawType] = useState("on-chain"); // "on-chain" or "internal"
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionFee, setTransactionFee] = useState(0.0005); // Example fee
  const [balance, setBalance] = useState({ spot: 0.5, funding: 0.2 }); // Example balances
  const [selectedBalance, setSelectedBalance] = useState("spot"); // Default to "spot"

  const calculateReceivedAmount = () => {
    const withdrawalAmount = parseFloat(amount) || 0;
    return Math.max(withdrawalAmount - transactionFee, 0).toFixed(8);
  };

  const getAvailableBalance = () => {
    return selectedBalance === "spot" ? balance.spot : balance.funding;
  };

  return (
    <div className="mt-12 mb-8 flex flex-col items-center gap-8">
      <Card className="w-full max-w-lg">
        <CardBody>
          {/* Coin Selection */}
          <Typography variant="h6" className="text-gray-700 mb-4">
            Select Coin
          </Typography>
          <Select
            label="Coin"
            value={selectedCoin}
            onChange={(value) => setSelectedCoin(value)}
          >
            <Option value="BTC">BTC Bitcoin</Option>
            <Option value="ETH">ETH Ethereum</Option>
            <Option value="USDT">USDT Tether</Option>
          </Select>

          {/* Withdrawal Type Tabs */}
          <Typography variant="h6" className="text-gray-700 mt-6 mb-4">
            Withdraw To
          </Typography>
          <div className="flex">
            <Button
              className={`w-1/2 ${
                withdrawType === "on-chain" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setWithdrawType("on-chain")}
            >
              On-chain Withdrawal
            </Button>
            <Button
              className={`w-1/2 ${
                withdrawType === "internal" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setWithdrawType("internal")}
            >
              Internal Transfer
            </Button>
          </div>

          {/* Form for On-chain Withdrawal */}
          {withdrawType === "on-chain" && (
            <>
              <Typography variant="h6" className="text-gray-700 mt-6 mb-4">
                Wallet Address
              </Typography>
              <Input
                placeholder="Enter wallet address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />
            </>
          )}

          {/* Form for Internal Transfer */}
          {withdrawType === "internal" && (
            <>
              <Typography variant="h6" className="text-gray-700 mt-6 mb-4">
                Recipient Email
              </Typography>
              <Input
                placeholder="Enter recipient's email address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />
            </>
          )}

          {/* Withdrawal Amount */}
          <Typography variant="h6" className="text-gray-700 mt-6 mb-4">
            Withdrawal Amount
          </Typography>
          <Input
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="mt-4">
            <Typography variant="small" className="text-gray-700 mb-2">
              Choose Balance
            </Typography>
            <div className="flex gap-4">
              <Radio
                id="spot"
                name="balance"
                label={`Spot: ${balance.spot} ${selectedCoin}`}
                checked={selectedBalance === "spot"}
                onChange={() => setSelectedBalance("spot")}
              />
              <Radio
                id="funding"
                name="balance"
                label={`Funding: ${balance.funding} ${selectedCoin}`}
                checked={selectedBalance === "funding"}
                onChange={() => setSelectedBalance("funding")}
              />
            </div>
          </div>

          {/* Transaction Fee and Received Amount */}
          <div className="mt-6 flex justify-between">
            <Typography className="text-gray-700">Transaction Fee:</Typography>
            <Typography className="text-gray-700">
              {transactionFee} {selectedCoin}
            </Typography>
          </div>
          <div className="mt-2 flex justify-between">
            <Typography className="text-gray-700">Amount Received:</Typography>
            <Typography className="text-gray-700">
              {calculateReceivedAmount()} {selectedCoin}
            </Typography>
          </div>

          {/* Confirm Button */}
          <Button
            className="mt-6"
            color="blue"
            fullWidth
            onClick={() => {
              const availableBalance = getAvailableBalance();
              if (parseFloat(amount) > availableBalance) {
                alert("Withdrawal amount exceeds available balance!");
              } else {
                alert(
                  withdrawType === "on-chain"
                    ? "On-chain Withdrawal Confirmed"
                    : "Internal Transfer Confirmed"
                );
              }
            }}
          >
            Confirm
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Withdraw;
