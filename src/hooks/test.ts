const Web3 = require('web3');

async function handleRpcButtonClick() {
	// Your async logic here
	try {
		const rpcURL = 'https://mainnet.infura.io/v3/ca12770881944c789fda256bba2a2939';
		const web3 = new Web3(rpcURL);
		const address = '0x90e63c3d53E0Ea496845b7a03ec7548B70014A91';
		web3.eth.getBalance(address, (err: any, wei: any) => {
			console.log(web3.utils.fromWei(wei, 'ether'));
		});
	} catch (error) {
		console.error('Error:', error);
	}
}

export { handleRpcButtonClick }; // Export the async function
