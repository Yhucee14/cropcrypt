import React from 'react'
import coin from '../assets/coin.png'
import track from '../assets/track.png'
import harvest from '../assets/harvest.png'
import bigLogo from '../assets/bigLogo.png'

const GetStarted = () => {
  return (
    <div className='flex border py-8 relative flex-col justify-center items-center'>
        <div className='absolute top-[-80px] left-[-150px]'>
        <img src={bigLogo} alt="home" className=" z-20" />
        </div>
       <div className='flex flex-row font-bold text-4xl py-5'>
        <p className='px-1 '>Get Started with</p>
        <p className='text-[#1B6909] '>Cropcrypt</p>
        </div> 

        <div className='flex gap-6 flex-row py-3'>
            <div className='flex mt-12 mb-[-40px] flex-col  px-10 py-2 justify-center items-center bg-gray-100 rounded-2xl border border-gray-400'>
            <img src={coin} alt="home" className="w-38 h-38 z-20" />
            <p className='py-2 font-bold text-xl mt-6'>Invest</p>
            </div>

            <div className='flex flex-col  px-10 py-1 justify-center items-center bg-gray-100 rounded-2xl border border-gray-400'>
            <img src={track} alt="home" className="w-38  z-20" />
            <p className='py-2 font-bold text-xl'>Track</p>
            </div>

            <div className='flex flex-col mt-12 mb-[-40px] px-10 py-2 justify-center items-center bg-gray-100 rounded-2xl border border-gray-400'>
            <img src={harvest} alt="home" className="w-38 z-20" />
            <p className='py-2 font-bold mt-[-10px] text-xl'>Harvest</p>
            </div>
        </div>
    </div>
  )
}

export default GetStarted