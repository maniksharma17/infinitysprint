"use client"
import React from 'react'
import { useRecoilState } from 'recoil';
import { formAtom } from '@/lib/store/atoms/formAtom';
import Image from 'next/image';
import { Button } from './ui/button';

const HomeBanner = () => {
  const [formOpen, setFormOpen] = useRecoilState(formAtom)
  return (
    <div className='flex flex-col max-lg:gap-4 z-0 max-md:h-[85vh] max-md:justify-evenly max-lg:flex-col gap-20 justify-center h-auto max-md:mt-0 mt-32 w-screen items-center'>
      
      <div className="max-xl:w-[90%] w-2/3 m-auto flex flex-col gap-5 relative">

        <ul className="flex flex-row w-full justify-evenly list-disc font-semibold text-cyan-300 font-mono">
          <li>Ideas</li>
          <li>Growth</li>
          <li>Development</li>
        </ul>
      
        <div>
          <h1 className='text-7xl max-sm:text-3xl typewriter-animation max-md:text-4xl text-center'>Limitless Innovation,</h1>
          <h1 className='text-7xl max-sm:text-3xl typewriter-animation max-md:text-4xl text-center'>Endless Solution.</h1>

        </div>
        

        <div className='max-md:w-[75%] max-md:m-auto w-2/3 m-auto max-md:text-lg text-xl font-light text-center'>
          <p>At <span className='inconsolata-heading'>InfinitySprint</span>, we specialize in delivering <span className="font-bold">cutting-edge solutions that propel businesses forward in the digital age.</span></p>
        </div>

        <div className="flex flex-row gap-5 mt-10 justify-center">
          <Button variant={'ghost'} onClick={()=>{setFormOpen(!formOpen)}} className='p-5 text-xl max-md:p-2 max-md:text-lg bg-white bg-opacity-30 font-light cursor-pointer'>Get in touch</Button>
          <Button variant={'ghost'} className='p-5 text-xl bg-white bg-opacity-30 font-light max-md:p-2 max-md:text-lg cursor-pointer'>About us</Button>
        </div>
      </div>

      <Image
      className='max-sm:p-2'
      src={'https://infinitysprint.s3.ap-south-1.amazonaws.com/austin-distel-rxpThOwuVgE-unsplash.jpg'}
      alt={"Home Image"}
      width={1000}
      height={1000}
      ></Image>

    </div>

  )
}


export default HomeBanner