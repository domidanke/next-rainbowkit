'use client'
import * as React from 'react'
import { useDebounce } from 'use-debounce'
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import { Address, BaseError, stringify } from 'viem';
import { domContractConfig } from './contracts';
import { useContractWrite, useWaitForTransaction } from 'wagmi';
 

export function ProposalForm() {

  const [address, setAddress] = React.useState<Address>(
    '0x105a1E605d5D34FB096c6f35Ceb34f66e64c7710',
  )
  // const { data, error, isLoading, isSuccess } = useContractRead({
  //   ...domContractConfig,
  //   functionName: 'getProposalCount',    
  //   enabled: Boolean(address),
  // })




  const [description, setTo] = React.useState('')
  const [debouncedDescription] = useDebounce(description, 500)  

  const [startDate, setStartDate] = React.useState(new Date());  

  const { write, data, error, isLoading, isError } = useContractWrite({
    ...domContractConfig,
    functionName: 'createProposal',
    args: [BigInt(startDate.getTime()), description],    
  })

  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: data?.hash })
 
  return (
    
    <form
    onSubmit={(e) => {
      e.preventDefault()            
      startDate.setHours(0,0,0,0)
      write({
        args: [BigInt(startDate.getTime()), description],
      })
    }}
  >
      <div className='mb-4 text-gray-700 font-bold'>Create Proposal</div>
      <div className=''>              
      <div>
        Description&nbsp;&nbsp;&nbsp;&nbsp;
      <input
      className='mr-10'
        aria-label="Description"
        onChange={(e) => setTo(e.target.value)}        
        value={description}
      />      
      </div>      
      <div className='mt-4'>
        Deadline&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <DatePicker
      showIcon
                dateFormat="dd/MM/yyyy"
                className='mr-10'                
                selected={startDate} 
                onChange={(date) => setStartDate(date!)}
            />
      </div>      
      <div className='columns-1'>
          <div>&nbsp;</div>
          <button className='bg-emerald-200 border-2 border-black rounded-2xl w-40' type="submit" disabled={isLoading}>
            Send Proposal
          </button>
          {isLoading && <div>Sending...</div>}
      {isPending && <div>Transaction pending...</div>}
      {isSuccess && (
        <>
          <div>Transaction Hash: {data?.hash}</div>
          <div>
            Transaction Receipt: <pre>{stringify(receipt, null, 2)}</pre>
          </div>
        </>
      )}
      {isError && <div>{(error as BaseError)?.shortMessage}</div>}
        </div>    
      </div>
    </form>
  )
}

