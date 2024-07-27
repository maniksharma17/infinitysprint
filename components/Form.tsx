"use client"
import React from 'react'
import { Button } from './ui/button'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { formAtom } from '@/lib/store/atoms/formAtom';


const Form = () => {
  const [formOpen, setFormOpen] = useRecoilState(formAtom);
  if(!formOpen) return <></>

  return <div className='bg-white border border-purple-800 shadow-2xl rounded-xl z-50 flex justify-center w-fit gap-6 fixed top-0 m-auto max-md:translate-y-1/4 max-md:translate-x-0 max-md:w-full translate-x-[63%] translate-y-20'> 
      <Button className='absolute top-2 bg-purple-800 right-2' onClick={()=>{setFormOpen(!formOpen)}}>Close</Button>
      <iframe className='max-md:hidden' src="https://docs.google.com/forms/d/e/1FAIpQLSenr-YhcNRdihAzyB30U2IQcw6oYTPi9qX2cv5twMJ3RJhYhw/viewform?embedded=true" width="640" height="640">Loading…</iframe>
      <iframe className='md:hidden' src="https://docs.google.com/forms/d/e/1FAIpQLSenr-YhcNRdihAzyB30U2IQcw6oYTPi9qX2cv5twMJ3RJhYhw/viewform?embedded=true" width="350" height="450">Loading…</iframe>    </div>
}

const FormItem = ({label}: {label: string}) => {
  return <div className='flex flex-col mb-6'>
    <input placeholder={label} className='border-b max-sm:placeholder:text-sm placeholder:text-gray-800 border-black bg-transparent max-sm:text-sm outline-none'></input>
</div>
}

export default Form