import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const loadProvider = async () => {
      try {
        // Check if MetaMask is installed
        if (!window.ethereum) {
          alert("Please install MetaMask!");
          return;
        }

        // Request account access
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
          if (error.code === 4001) {
            alert("Please connect your MetaMask wallet!");
            return;
          }
          throw error;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
        const contractABI = require("./artifacts/contracts/Upload.sol/Upload.json").abi;

        // Setup network change listener
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        // Setup account change listener
        window.ethereum.on("accountsChanged", (accounts) => {
          if (accounts.length === 0) {
            // User has disconnected their wallet
            setAccount("");
            setContract(null);
          } else {
            // User has switched accounts
            setAccount(accounts[0]);
          }
        });

        const signer = provider.getSigner();
        const address = await signer.getAddress();
        
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        
        setAccount(address);
        setContract(contract);
        setProvider(provider);
      } catch (error) {
        console.error("Error initializing app:", error);
        if (error.code === -32002) {
          alert("Please open MetaMask and accept the connection request");
        } else {
          alert("Error connecting to MetaMask. Please try again.");
        }
      }
    };

    loadProvider();

    // Cleanup listeners when component unmounts
    return () => {
      if (window.ethereum) {
        window.ethereum.removeAllListeners("chainChanged");
        window.ethereum.removeAllListeners("accountsChanged");
      }
    };
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">CloudSafe</h1>
        <div className="account-info">
          <span>Connected Account:</span>
          <span className="account-address">
            {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : "Not connected"}
          </span>
        </div>
      </header>

      <main className="main-content">
        <div className="upload-container">
          <FileUpload account={account} provider={provider} contract={contract} />
        </div>
        
        <div className="display-container">
          <Display contract={contract} account={account} />
        </div>
      </main>

      <button 
        className="share-button" 
        onClick={() => setModalOpen(true)}
        disabled={!account}
      >
        Share Access
      </button>

      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract} />
      )}
    </div>
  );
}

export default App;
