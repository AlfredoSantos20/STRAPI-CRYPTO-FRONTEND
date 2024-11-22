import { ethers } from "ethers";

// Initialize provider and contract instance
export const initializeContract = (contractAddress, abi) => {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed.");
  }
  
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);

  return { provider, signer, contract };
};

// Deposit to contract
export const depositToContract = async (contract, amount) => {
  try {
    const tx = await contract.deposit({
      value: ethers.utils.parseEther(amount),
    });
    await tx.wait();
    return { success: true, txHash: tx.hash };
  } catch (error) {
    console.error("Deposit error:", error);
    throw error;
  }
};

// Get user's contract balance
export const getBalance = async (contract, userAddress) => {
  try {
    const balance = await contract.getBalance(userAddress);
    return ethers.utils.formatEther(balance);
  } catch (error) {
    console.error("Error fetching balance:", error);
    throw error;
  }
};
