import { erc20ABI } from 'wagmi';

export const wagmiContractConfig = {
	address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
	abi: [
		{ inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					name: 'owner',
					type: 'address',
				},
				{
					indexed: true,
					name: 'approved',
					type: 'address',
				},
				{
					indexed: true,
					name: 'tokenId',
					type: 'uint256',
				},
			],
			name: 'Approval',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					name: 'owner',
					type: 'address',
				},
				{
					indexed: true,
					name: 'operator',
					type: 'address',
				},
				{
					indexed: false,
					name: 'approved',
					type: 'bool',
				},
			],
			name: 'ApprovalForAll',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					name: 'from',
					type: 'address',
				},
				{ indexed: true, name: 'to', type: 'address' },
				{
					indexed: true,
					name: 'tokenId',
					type: 'uint256',
				},
			],
			name: 'Transfer',
			type: 'event',
		},
		{
			inputs: [
				{ name: 'to', type: 'address' },
				{ name: 'tokenId', type: 'uint256' },
			],
			name: 'approve',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ name: 'owner', type: 'address' }],
			name: 'balanceOf',
			outputs: [{ name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [{ name: 'tokenId', type: 'uint256' }],
			name: 'getApproved',
			outputs: [{ name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ name: 'owner', type: 'address' },
				{ name: 'operator', type: 'address' },
			],
			name: 'isApprovedForAll',
			outputs: [{ name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'mint',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
			name: 'mint',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'name',
			outputs: [{ name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [{ name: 'tokenId', type: 'uint256' }],
			name: 'ownerOf',
			outputs: [{ name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ name: 'from', type: 'address' },
				{ name: 'to', type: 'address' },
				{ name: 'tokenId', type: 'uint256' },
			],
			name: 'safeTransferFrom',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{ name: 'from', type: 'address' },
				{ name: 'to', type: 'address' },
				{ name: 'tokenId', type: 'uint256' },
				{ name: '_data', type: 'bytes' },
			],
			name: 'safeTransferFrom',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{ name: 'operator', type: 'address' },
				{ name: 'approved', type: 'bool' },
			],
			name: 'setApprovalForAll',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ name: 'interfaceId', type: 'bytes4' }],
			name: 'supportsInterface',
			outputs: [{ name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'symbol',
			outputs: [{ name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [{ name: 'tokenId', type: 'uint256' }],
			name: 'tokenURI',
			outputs: [{ name: '', type: 'string' }],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [],
			name: 'totalSupply',
			outputs: [{ name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ name: 'from', type: 'address' },
				{ name: 'to', type: 'address' },
				{ name: 'tokenId', type: 'uint256' },
			],
			name: 'transferFrom',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
} as const;

export const usdcContractConfig = {
	address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
	abi: erc20ABI,
} as const;

export const domContractConfig = {
	address: '0xf80c9Ef60B9b88b2129A6B9af77ceAB330345f57',
	abi: [
		{
			inputs: [],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_deadline',
					type: 'uint256',
				},
				{
					internalType: 'string',
					name: '_description',
					type: 'string',
				},
			],
			name: 'createProposal',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'exerciceProgression',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'proposalIndex',
					type: 'uint256',
				},
			],
			name: 'getProposal',
			outputs: [
				{
					components: [
						{
							internalType: 'bytes32',
							name: 'id',
							type: 'bytes32',
						},
						{
							internalType: 'uint256',
							name: 'createdDate',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'deadline',
							type: 'uint256',
						},
						{
							internalType: 'string',
							name: 'description',
							type: 'string',
						},
						{
							internalType: 'address',
							name: 'createdBy',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'voterCount',
							type: 'uint256',
						},
						{
							internalType: 'bool',
							name: 'senderVoted',
							type: 'bool',
						},
					],
					internalType: 'struct ProposalContract.ProposalDto',
					name: '',
					type: 'tuple',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'proposalId',
					type: 'bytes32',
				},
			],
			name: 'getProposalById',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getProposalCount',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'owner',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'proposals',
			outputs: [
				{
					internalType: 'bytes32',
					name: 'id',
					type: 'bytes32',
				},
				{
					internalType: 'uint256',
					name: 'createdDate',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
				{
					internalType: 'string',
					name: 'description',
					type: 'string',
				},
				{
					internalType: 'address',
					name: 'createdBy',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'voterCount',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: '_id',
					type: 'bytes32',
				},
			],
			name: 'proposalsContainId',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'proposalId',
					type: 'bytes32',
				},
			],
			name: 'vote',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
} as const;
