// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;
import {ERC20} from "openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract ProposalContract {
  mapping(address => mapping(uint256 => bool)) public exerciceProgression;
    struct Proposal {
        bytes32 id;
        uint256 createdDate;
        uint256 deadline;
        string description;
        address createdBy;    
        uint256 voterCount;
        mapping(address => bool) hasVoted;
    }

    struct ProposalDto {
        bytes32 id;
        uint256 createdDate;
        uint256 deadline;
        string description;
        address createdBy;
        uint256 voterCount;
        bool senderVoted;        
    }

    Proposal[] public proposals;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function createProposal(uint256 _deadline, string memory _description) public {
        require(_deadline > block.timestamp, "Deadline must be in the future");    
        Proposal storage newProposal = proposals.push();
        newProposal.id = keccak256(abi.encodePacked(_description, msg.sender, block.timestamp));
        newProposal.createdDate = block.timestamp;
        newProposal.deadline = _deadline;
        newProposal.description = _description;
        newProposal.createdBy = msg.sender;        
        newProposal.voterCount = 0;
    }

    function vote(bytes32 proposalId) public {
        require(proposals.length > 0, "No Proposals exist");
        require(proposalsContainId(proposalId), "This Proposal does not exist");
        for (uint256 i = 0; i < proposals.length; i++) {
            if (proposals[i].id == proposalId) {
                Proposal storage proposal = proposals[i];
                require(block.timestamp < proposal.deadline, "Voting is closed");
                require(!proposal.hasVoted[msg.sender], "You have already voted for this proposal");
                proposal.hasVoted[msg.sender] = true;
                proposal.voterCount++;
            }
        }  
    }

    function getProposalCount() public view returns (uint256) {
        return proposals.length;
    }

    function getProposal(uint256 proposalIndex) public view returns (ProposalDto memory) {
        require(proposalIndex < proposals.length, "Invalid proposal index");
        Proposal storage proposal = proposals[proposalIndex];
        bool senderVoted = proposal.hasVoted[msg.sender];
        ProposalDto memory proposalDto = ProposalDto(
          proposal.id,
          proposal.createdDate,
          proposal.deadline,
          proposal.description,
          proposal.createdBy,
          proposal.voterCount,
          senderVoted
        );
        return proposalDto;
    }

    function getProposalById(bytes32 proposalId) public {
        require(proposals.length > 0, "No Proposals exist");
        require(proposalsContainId(proposalId), "This Proposal does not exist");
        for (uint256 i = 0; i < proposals.length; i++) {
            if (proposals[i].id == proposalId) {
                Proposal storage proposal = proposals[i];
                require(block.timestamp < proposal.deadline, "Voting is closed");
                require(!proposal.hasVoted[msg.sender], "You have already voted for this proposal");
                proposal.hasVoted[msg.sender] = true;
                proposal.voterCount++;
            }
        }  
    }


    function proposalsContainId(bytes32 _id) public view returns (bool) {
        for (uint256 i = 0; i < proposals.length; i++) {
            if (proposals[i].id == _id) {
                return true; // Found an object with the specified ID
            }
        }
        return false; // No object with the specified ID was found
    }
}
