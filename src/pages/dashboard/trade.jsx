import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Progress,
} from "@material-tailwind/react";
import { PieChart } from "react-minimal-pie-chart";

export function Trade() {
  const [activeTab, setActiveTab] = useState("Summary");
  const [timeFilter, setTimeFilter] = useState("1D");
  

  const dataMock = [
    { title: "Ethereum", value: 60, color: "#4a90e2" },
    { title: "BNB Chain", value: 15, color: "#f5a623" },
    { title: "Polygon", value: 10, color: "#9b59b6" },
    { title: "Arbitrum", value: 10, color: "#f8e71c" },
    { title: "Other", value: 5, color: "#7f8c8d" },
  ];

  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-900 text-white min-h-screen">
      {/* Wallet Header */}
      <div className="text-2xl font-semibold">Wallet Overview</div>
      <Card className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <Typography variant="h5" color="white">
              Total Net USD Value
            </Typography>
            <Typography variant="h3" color="white">
              $51,696.56
            </Typography>
          </div>
          <div className="text-right">
            <div>Credit Limit: $250,000.00</div>
            <div>Credit Used: $109,126.59</div>
            <div>Credit Available: $140,874.41</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 mt-6 border-b-2 border-gray-700">
          {["Summary", "Crypto", "NFTs", "DeFi", "History"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-400"
              } text-lg font-medium p-2`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Summary Tab */}
        {activeTab === "Summary" && (
          <div className="grid grid-cols-3 gap-4 mt-6">
            <CardBody className="col-span-2 bg-gray-900 p-4 rounded-lg shadow-md">
              <div className="flex justify-between">
                <Typography variant="h6" color="white">
                  Performance
                </Typography>
                <div className="flex gap-2">
                  {["1D", "7D", "30D"].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setTimeFilter(filter)}
                      className={`${
                        timeFilter === filter ? "text-blue-500" : "text-gray-400"
                      } text-xs font-medium`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
              <Typography variant="h4" color="white" className="mt-2">
                $23,449.85
              </Typography>
              <Typography color="white" className="text-xs mt-1">
                14/11/2024
              </Typography>
              {/* Placeholder for Performance Chart */}
              <div className="flex justify-center items-center bg-gray-700 h-40 mt-4 rounded-lg shadow-md">
                <Typography color="white" className="text-sm">
                  {timeFilter} Chart (Placeholder)
                </Typography>
              </div>
            </CardBody>

            {/* Network Allocation Pie Chart */}
            <CardBody className="bg-gray-900 p-4 rounded-lg shadow-md">
              <Typography variant="h6" color="white">
                Network Allocation
              </Typography>
              <PieChart
                data={dataMock}
                radius={30}
                lineWidth={15}
                label={({ dataEntry }) => `${dataEntry.value}%`}
                labelStyle={{ fontSize: "6px", fill: "#fff" }}
              />
              <div className="mt-4 text-xs">
                {dataMock.map((entry) => (
                  <div key={entry.title} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    />
                    <span>{entry.title}</span>
                  </div>
                ))}
              </div>
            </CardBody>
          </div>
        )}

        {/* Crypto Tab */}
        {activeTab === "Crypto" && (
          <div className="mt-6 grid gap-4">
            <Typography variant="h6" color="white">
              Asset Breakdown
            </Typography>
            {[ 
              { asset: "Ethereum", balance: "$285", proportion: 60 },
              { asset: "BNB", balance: "$818", proportion: 25 },
              { asset: "Tether", balance: "$569", proportion: 40 },
            ].map((crypto) => (
              <CardBody key={crypto.asset} className="bg-gray-900 p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <Typography variant="h6" color="white">
                    {crypto.asset}
                  </Typography>
                  <Typography variant="h5" color="white">
                    {crypto.balance}
                  </Typography>
                </div>
                <Progress value={crypto.proportion} className="mt-2" color="blue" />
              </CardBody>
            ))}
          </div>
        )}

        {/* NFTs Tab */}
        {activeTab === "NFTs" && (
          <div className="mt-6 grid gap-4">
            <Typography variant="h6" color="white">
              NFT Portfolio
            </Typography>
            {[ 
              { name: "CryptoPunk #123", value: "$1,000" },
              { name: "Bored Ape #456", value: "$2,500" },
            ].map((nft) => (
              <CardBody key={nft.name} className="bg-gray-900 p-4 rounded-lg shadow-md">
                <Typography variant="h6" color="white">
                  {nft.name}
                </Typography>
                <Typography variant="h5" color="white">
                  {nft.value}
                </Typography>
              </CardBody>
            ))}
          </div>
        )}

        {/* DeFi Tab */}
        {activeTab === "DeFi" && (
          <div className="mt-6 grid gap-4">
            <Typography variant="h6" color="white">
              DeFi Investments
            </Typography>
            {[ 
              { protocol: "Aave", investment: "$500", returns: "5%" },
              { protocol: "Compound", investment: "$800", returns: "7%" },
            ].map((defi) => (
              <CardBody key={defi.protocol} className="bg-gray-900 p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <Typography variant="h6" color="white">
                    {defi.protocol}
                  </Typography>
                  <Typography variant="h5" color="white">
                    {defi.investment}
                  </Typography>
                </div>
                <Typography color="white" className="text-xs">
                  Returns: {defi.returns}
                </Typography>
              </CardBody>
            ))}
          </div>
        )}

        {/* History Tab */}
        {activeTab === "History" && (
          <div className="mt-6 grid gap-4">
            <Typography variant="h6" color="white">
              Transaction History
            </Typography>
            {[ 
              { date: "2024-11-14", action: "Deposit", amount: "$500" },
              { date: "2024-11-13", action: "Withdraw", amount: "$200" },
            ].map((tx) => (
              <CardBody key={tx.date} className="bg-gray-900 p-4 rounded-lg shadow-md">
                <div className="flex justify-between">
                  <Typography variant="body2" color="white">
                    {tx.date}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {tx.action}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {tx.amount}
                  </Typography>
                </div>
              </CardBody>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

export default Trade;
