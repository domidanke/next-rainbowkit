'use client'
import * as React from 'react'

import "react-datepicker/dist/react-datepicker.css";
import { Address, BaseError, stringify } from 'viem';
import { domContractConfig } from './contracts';
import { useContractRead, useContractWrite, useWaitForTransaction } from 'wagmi';
 

export function AllProposals() {  

  const [numOfProposals, setNumOfProposals] = React.useState(0)
  var names = ['Jake', 'Jon', 'Thruster'];
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
  
    return (
      <div>      
        Number of proposals: {isSuccess && data?.toString()}      
        <button className='ml-4 bg-blue-300 border-2 border-black rounded-2xl w-20' onClick={() => refetch}>
          {isLoading ? 'refetching...' : 'refetch'}
        </button>
        {error && <div>{(error as BaseError).shortMessage}</div>}
      </div>
    )
  }

  function ProposalDetails() {
    const { data, error, isLoading, isSuccess, refetch } = useContractRead({
      ...domContractConfig,
      functionName: 'getProposal',
      args: [BigInt(0)],
      enabled: Boolean('0x105a1E605d5D34FB096c6f35Ceb34f66e64c7710'),
    })  

    // const { write, data, error, isLoading, isError } = useContractWrite({
    //   ...domContractConfig,
    //   functionName: 'createProposal',
    //   args: [BigInt(startDate.getTime()), description],    
    // })
  
    // const {
    //   data: receipt,
    //   isLoading: isPending,
    //   isSuccess,
    // } = useWaitForTransaction({ hash: data?.hash })
  
    return (
      <div>      
        Proposal 1:
        <div>Id: {isSuccess && data?.id}</div>
        <div>Created By: {isSuccess && data?.createdBy}</div>
        <div>Created By: {isSuccess && data?.description}</div>
        <div>Deadline: {isSuccess ? new Date(Number(data?.deadline)).toISOString() : ''}</div>
        <div>Number of Votes: {isSuccess ? Number(data?.voterCount): ''}</div>
        <button className='mt-4 bg-emerald-200 border-2 border-black rounded-2xl w-20' onClick={() => {
          
          refetch;
        }}>
          {isLoading ? 'voting...' : 'Vote'}
        </button>
        {error && <div>{(error as BaseError).shortMessage}</div>}
      </div>
    )
  }  
}

