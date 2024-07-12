"use client"
import React from 'react'
import { Button } from './ui/button'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { formAtom } from '@/lib/store/atoms/formAtom';


const Form = () => {
  const [formOpen, setFormOpen] = useRecoilState(formAtom);
  if(!formOpen) return <></>

  return <div className='bg-amber-100 text-gray-800 shadow-2xl z-50 w-2/3 py-16 px-4 gap-6 fixed top-0 m-auto translate-x-1/4 translate-y-1/4'> 
      <h1 onClick={()=>{setFormOpen(!formOpen)}}
      className='absolute cursor-pointer right-5 top-5 max-sm:right-1 max-sm:top-1 text-2xl max-sm:text-lg'>X</h1>
      <h1 className='font-light text-2xl text-center max-sm:text-left mb-4 max-sm:text-lg'>Reach out. We will contact you shortly!</h1>
      <FormItem label={'Name'}></FormItem>
      <FormItem label={'Mail'}></FormItem>
      <FormItem label={'Phone'}></FormItem>
      <FormItem label={'Company Name'}></FormItem>
      
      <div className='flex flex-col'>
        <textarea placeholder='Product Description' className='max-sm:placeholder:text-sm border-b placeholder:text-gray-800 bg-transparent max-sm:text-sm border-black outline-none p-1' rows={1}></textarea>
      </div>

      <Button variant={'default'} className='py-4 text-xl border rounded-full border-gray-600 hover:text-amber-100 bg-transparent text-gray-600 font-light mt-8'>Send</Button>
    </div>
}

const FormItem = ({label}: {label: string}) => {
  return <div className='flex flex-col mb-6'>
    <input placeholder={label} className='border-b max-sm:placeholder:text-sm placeholder:text-gray-800 border-black bg-transparent max-sm:text-sm outline-none'></input>
</div>
}

export default Form