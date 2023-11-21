'use client'
import * as React from 'react'

import "react-datepicker/dist/react-datepicker.css";
import { Address, BaseError, stringify } from 'viem';
import { domContractConfig } from './contracts';
import { useContractRead, useContractReads, useContractWrite, useWaitForTransaction } from 'wagmi';
 

export function AllProposals() {  

  const [numOfProposals, setNumOfProposals] = React.useState(0)  
  return (
    <div>
      <div>
        <TotalAndFetch />
        <br />
        <ProposalDetails/>
      </div>
    </div>
  )


  function TotalAndFetch() {
    const { data, error, isLoading, isSuccess, refetch } = useContractRead({
      ...domContractConfig,
      functionName: 'getProposalCount',    
      enabled: Boolean('0x105a1E605d5D34FB096c6f35Ceb34f66e64c7710'),
    })
    
    setNumOfProposals(parseInt(data!.toString()));
  
    return (
      <div className='text-xl font-bold'>      
        Number of proposals: {numOfProposals}              
        {error && <div>{(error as BaseError).shortMessage}</div>}
      </div>
    )
  }

  function ProposalDetails() {
    const now = new Date();
    const endpoints = [];
    for (let i = 0; i < numOfProposals; i++) {
      endpoints.push({
        ...domContractConfig,
      functionName: 'getProposal',
      args: [BigInt(i)],
      enabled: Boolean('0x105a1E605d5D34FB096c6f35Ceb34f66e64c7710'),
      },);
    }
    
    const { data } = useContractReads({
      contracts: endpoints,
    })

    const { write, error, isLoading, isError } = useContractWrite({
      ...domContractConfig,
      functionName: 'vote',
      args: [`0xplaceholder`],    
    })
  
    return (
      <div>
        {data?.map((proposal, index) => (
          <div key={index} className="bg-white p-6 m-6 rounded-lg shadow-md max-w">
          {/* Vote Button Row */}
          <div className="flex items-center mb-4">            
            {/* Item Description */}
          <p className="text-xl font-bold mb-4">{proposal.result.description} (Votes: {proposal.result.voterCount.toString()})</p>          
          </div>            
    
          {/* Additional Details */}
          <div className="text-gray-700">
            <p>Created By: {proposal.result.createdBy}</p>
            <p>Deadline: {new Date(Number(proposal.result.deadline)).toISOString()}</p>
            {/* Add more details as needed */}
          </div>          
          <div className='flex items-center mt-8 h-16'>

          <div  className='flex-grow mt-3'>
            <p className='text-red-700 text-xs '>{isError ? `${error?.message}` : ''}</p>
          </div>
          {now > new Date(Number(proposal.result.deadline)) ? (
        <p className='text-orange-700'>This deadline has been reached.</p>
      ) : (
        <button className="w-24 h-12 bg-green-500 text-white px-4 py-2 rounded-md flex-shrink-0 mr-2" onClick={() => {
          write({
            args: [proposal.result.id.toString()],
          })
        }}>{isLoading ? 'Voting...' : 'Vote'}</button>
      )}                                    
            </div>            
        </div>         
        ))}             
      </div>
    )
  }  
}

