import { getContract } from 'viem'
import { Account } from '../components/Account'
import { Balance } from '../components/Balance'
import { BlockNumber } from '../components/BlockNumber'
import { ConnectButton } from '../components/ConnectButton'
import { Connected } from '../components/Connected'
import { ReadContract } from '../components/ReadContract'
import { ReadContracts } from '../components/ReadContracts'
import { ReadContractsInfinite } from '../components/ReadContractsInfinite'
import { SendTransaction } from '../components/SendTransaction'
import { SendTransactionPrepared } from '../components/SendTransactionPrepared'
import { SignMessage } from '../components/SignMessage'
import { SignTypedData } from '../components/SignTypedData'
import { Token } from '../components/Token'
import { WatchContractEvents } from '../components/WatchContractEvents'
import { WatchPendingTransactions } from '../components/WatchPendingTransactions'
import abi from '../../ProposalContract.json'
import { ProposalForm } from '../components/ProposalForm'
import { AllProposals } from '../components/AllProposals'

export function Page() {
  return (
    <>
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg mb-5">
      wagmi + RainbowKit + Next.js
      </p>      
    <ConnectButton/>    
    </div>      
    <div className="container mx-auto bg-gray-100 rounded-xl shadow border p-8 m-10">
      <AllProposals></AllProposals>
    </div>
    <div className="container mx-auto bg-gray-100 rounded-xl shadow border p-8 m-10">
      <ProposalForm></ProposalForm>
    </div>       
    </>
  )
}

export default Page
