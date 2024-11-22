import axios from "axios";

// Create an Axios instance with base configuration
const api = axios.create({
  baseURL: "https://api.kucoin.com/api/v1",
});

// Fetch the list of tokens from KuCoin
export const fetchKucoinTokens = async () => {
  try {
    const response = await api.get("/markets");
    if (response.data.code === "200000") {
      return response.data.data.map((market) => ({
        id: market.symbol,
        symbol: market.symbol.split("-")[0], // e.g., ETH, BTC
      }));
    } else {
      throw new Error("Failed to fetch tokens");
    }
  } catch (error) {
    console.error("Error fetching tokens:", error);
    throw error;
  }
};

// Fetch the real-time price of a token from KuCoin
export const fetchKucoinPrice = async (currency) => {
  try {
    const response = await api.get(`/market/orderbook/level1?symbol=${currency}-USDT`);
    if (response.data.code === "200000") {
      return parseFloat(response.data.data.price);
    } else {
      throw new Error("Failed to fetch price");
    }
  } catch (error) {
    console.error(`Error fetching price for ${currency}:`, error);
    throw error;
  }
};

// Function to save transaction details to the backend (Placeholder)
export const saveTransaction = async (transaction) => {
  try {
    // Here you can save the transaction to your backend
    console.log("Transaction details:", transaction);
  } catch (error) {
    console.error("Error saving transaction:", error);
  }
};
