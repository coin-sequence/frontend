import React from 'react'
import {SwapComponent} from "@/components/swap"

function DepositPage() {
  return (
    <div className='mt-28 sm:mt-28 md:mt-28 lg:mt-10'>
      <div className=' h-1/3 w-2/12 rounded-full bottom-1/4 left-[30%] blur-[200px] bg-[#800080] absolute'></div>
      <div className=' h-1/3 w-2/12 rounded-full top-1/4 right-[30%] blur-[200px] bg-[#004d4d] absolute'></div>
      <SwapComponent />
    </div>
  )
}

export default DepositPage