# CloudSafe - Decentralized Image Storage & Sharing

CloudSafe is a decentralized application (DApp) that enables secure image storage and sharing using blockchain technology. It combines the power of Ethereum smart contracts for access control with IPFS for decentralized storage.

<img width="1470" alt="Screenshot 2025-02-17 at 6 55 45 PM" src="https://github.com/user-attachments/assets/4b5d074b-8adb-4369-b801-e7c157de20bb" />


## 🌟 Features

### 1. Decentralized Storage
- Store images on IPFS (InterPlanetary File System)
- Permanent and immutable storage
- Content-addressed storage ensuring data integrity
- Powered by Pinata IPFS pinning service

### 2. Secure Access Control
- Ethereum-based access management
- Grant and revoke access to specific addresses
- View access history and current permissions
- Smart contract-powered security

### 3. User-Friendly Interface
- Modern, responsive design
- Seamless MetaMask integration
- Real-time updates and status
- Intuitive image upload and sharing

### 4. Image Management
- Upload multiple image formats
- View all your uploaded images
- Share images with other users
- Access shared images from other users

## 🚀 Getting Started

### Prerequisites
1. **Node.js** - [Download & Install Node.js](https://nodejs.org/)
2. **MetaMask** - [Install MetaMask Browser Extension](https://metamask.io/)
3. **Pinata Account** - [Sign up for Pinata](https://app.pinata.cloud/)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd cloudsafe
```

2. Install dependencies:
   
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
```

3. Configure environment variables:
   
Create a `.env` file in the client directory:

```env
REACT_APP_PINATA_API_KEY=your_pinata_api_key
REACT_APP_PINATA_API_SECRET=your_pinata_secret_key
```

5. Start the local blockchain:
```bash
# In the root directory
npx hardhat node
```

5. Deploy the smart contract:
```bash
# In a new terminal
npx hardhat run scripts/deploy.js --network localhost
```

6. Start the application:

```bash
# In the client directory
npm start
```

## 💡 Usage Guide

### Connecting Your Wallet
1. Install MetaMask if you haven't already
2. Connect MetaMask to the local network:
   - Network Name: Hardhat Local
   - RPC URL: http://127.0.0.1:8545/
   - Chain ID: 31337
   - Currency Symbol: ETH

### Uploading Images
1. Click the "Choose Image" button
2. Select an image file from your device
3. Confirm the upload in MetaMask
4. Wait for the transaction to be confirmed
5. Your image will be stored on IPFS and linked to your address

### Viewing Images
1. Your uploaded images appear automatically
2. Click "Get Data" to refresh the image list
3. Images are displayed in a responsive grid
4. Click any image to view it in full size

### Sharing Access
1. Click the "Share Access" button
2. Enter the Ethereum address of the recipient
3. Click "Share" and confirm the transaction
4. The recipient can now view your images
5. View current access permissions in the dropdown

### Managing Access
1. View all addresses with access in the sharing modal
2. Revoke access by using the smart contract directly
3. Track all access changes on the blockchain

## 🔒 Security Features

### Smart Contract Security
- Access control through Ethereum smart contracts
- Permissioned access to image URLs
- Immutable access records
- Transparent permission management

### Data Privacy
- Images stored on IPFS
- Access controlled through blockchain
- Encrypted metadata
- Decentralized storage

### Wallet Integration
- Secure MetaMask integration
- Transaction signing for all operations
- Network and account state management
- Automatic network detection

## 🛠 Technical Stack

- **Frontend**: React.js
- **Smart Contracts**: Solidity
- **Blockchain**: Ethereum (Hardhat)
- **Storage**: IPFS (Pinata)
- **Web3**: ethers.js
- **Styling**: Modern CSS3

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop browsers
- Tablets
- Mobile devices
- Different screen sizes and orientations

## ⚠️ Important Notes

1. **MetaMask Required**
   - Must be installed and connected
   - Local network must be configured
   - Sufficient ETH needed for transactions

2. **IPFS Storage**
   - Images are stored permanently
   - Pinata credentials required
   - Storage costs may apply

3. **Network Requirements**
   - Local Hardhat network for development
   - Can be deployed to testnets/mainnet
   - Gas fees apply on public networks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

