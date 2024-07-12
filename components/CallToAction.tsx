"use client"
import React from 'react'
import { useRecoilState } from 'recoil';
import { formAtom } from '@/lib/store/atoms/formAtom';


const CallToAction = () => {
  const [formOpen, setFormOpen] = useRecoilState(formAtom);
  return (
    <div className="bg-sky-100 w-screen h-auto py-8 px-10 flex flex-row items-center justify-center gap-10">
      <h1 className="font-normal text-black text-4xl">Have a project to discuss?</h1>
      <button onClick={()=>{setFormOpen(!formOpen)}}
      className="bg-white px-4 py-2 max-sm:p-1 max-sm:w-full max-sm:text-lg text-xl font-normal rounded-full hover:bg-black hover:text-white text-black">Reach out</button>
    </div>
  )
}

export default CallToAction