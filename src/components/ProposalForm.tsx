'use client'
import * as React from 'react'
import { useDebounce } from 'use-debounce'
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import { Address, BaseError, stringify } from 'viem';
import { domContractConfig } from './contracts';
import { useContractWrite, useWaitForTransaction } from 'wagmi';
 

export function ProposalForm() {
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
      if (description.length == 0) {
        return;
      }
      startDate.setHours(0,0,0,0)
      write({
        args: [BigInt(startDate.getTime()  /1000), description],
      })
    }}
  >
      <div className='mb-4 text-gray-700 font-bold'>Create Proposal</div>
      <div className=''>              
      <div>
        Description&nbsp;&nbsp;&nbsp;&nbsp;
      <input
      className='mr-10 w-6/12'
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
          <button className='w-64 h-12 bg-green-500 text-white px-4 py-2 rounded-md' type="submit" disabled={isLoading}>
            Create Proposal
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
      {isError && <div className='text-red-700'>{(error as BaseError)?.shortMessage}</div>}
        </div>    
      </div>
    </form>
  )
}

