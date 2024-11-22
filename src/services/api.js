import axios from "axios";

// Create an Axios instance with base configuration
const api = axios.create({
  baseURL: "http://localhost:1337/api", 
  timeout: 10000, 
  headers: {
    "Content-Type": "application/json",
  },
});

// User registration function
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/local/register", userData); 
    return response.data;
  } catch (error) {
    const message = error?.response?.data?.message || error.message;
    throw new Error(message);
  }
};

// User login function
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/auth/local", credentials); 
    return response.data;
  } catch (error) {
    const message = error?.response?.data?.message || error.message;
    throw new Error(message);
  }
};

// Fetch wallet address function
export const fetchWalletAddress = async (coin, chain) => {
  try {
    const response = await api.get(`/wallets`, {
      params: { coin, chain }, // Pass query parameters for coin and chain
    });
    return response.data;
  } catch (error) {
    const message = error?.response?.data?.error?.message || error.message;
    throw new Error(message);
  }
};

// Fetch Kucoin tokens function
export const fetchKucoinTokens = async () => {
  try {
    const response = await axios.get("https://cors-anywhere.herokuapp.com/https://api.kucoin.com/api/v1/currencies");
    return response.data;
  } catch (error) {
    console.error("Error fetching KuCoin tokens:", error);
    throw error;
  }
};

// // Fetch Kucoin price for a currency pair (e.g., ETH-USDT)
// export const fetchKucoinPrice = async (currency) => {
//   try {
//     console.log(`Fetching price for ${currency}-USDT`);

//     // Request price from KuCoin API using a CORS proxy
//     const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=${currency}-USDT`);
    
//     // Log API response for debugging
//     console.log('API Response Status:', response.status);
//     console.log('API Response Data:', response.data);

//     // Check if the API response is valid and contains the expected data
//     if (response.status === 200 && response.data.code === "200000" && response.data.data) {
//       const { price } = response.data.data;
//       if (price) {
//         return parseFloat(price);  // Parse and return the price as a float
//       } else {
//         throw new Error(`Price data missing for ${currency}-USDT.`);
//       }
//     } else {
//       throw new Error("Invalid response structure from KuCoin API");
//     }
//   } catch (error) {
//     console.error(`Error fetching price for ${currency}:`, error);
//     throw error;  // Re-throw error to be handled in the calling function
//   }
// };

// Fetch Kucoin price for a currency pair (e.g., ETH-USDT)
export const fetchKucoinPrice = async (currency) => {
  try {
    // If the currency is USDT, return a price of 1 (since USDT is the base currency)
    if (currency === 'USDT') {
      return 1;
    }

    console.log(`Fetching price for ${currency}-USDT`);

    // Request price from KuCoin API using a CORS proxy
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=${currency}-USDT`);
    
    // Log API response for debugging
    console.log('API Response Status:', response.status);
    console.log('API Response Data:', response.data);

    // Check if the API response is valid and contains the expected data
    if (response.status === 200 && response.data.code === "200000" && response.data.data) {
      const { price } = response.data.data;
      if (price) {
        return parseFloat(price);  // Parse and return the price as a float
      } else {
        throw new Error(`Price data missing for ${currency}-USDT.`);
      }
    } else {
      throw new Error("Invalid response structure from KuCoin API");
    }
  } catch (error) {
    console.error(`Error fetching price for ${currency}:`, error);
    throw error;  // Re-throw error to be handled in the calling function
  }
};


// Save transaction to Strapi (if required)
export const saveTransaction = async (transactionData) => {
  try {
    const response = await axios.post("http://localhost:1337/transactions", transactionData); 
    return response.data;
  } catch (error) {
    console.error("Error saving transaction:", error);
    throw new Error("Failed to save transaction.");
  }
};

export default api;

