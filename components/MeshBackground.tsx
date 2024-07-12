import * as React from 'react'

const MeshBackground = () => {
  return <div className='fixed w-screen'>
    <div className='relative'>
      <div className='w-[500px] h-[500px] max-sm:w-[200px] max-sm:h-[200px] bg-red-400 absolute top-44 blur-3xl rounded-full z-0 lg:glass'></div>
      <div className='w-[500px] h-[500px] max-sm:w-[200px] max-sm:h-[200px] bg-blue-400 absolute left-52 blur-3xl rounded-full z-0 lg:glass'></div>
      <div className='w-[500px] h-[500px] max-sm:w-[200px] max-sm:h-[200px] bg-purple-400 absolute top-72 left-72 blur-3xl rounded-full z-0 lg:glass'></div>
      <div className='w-[500px] h-[500px] max-sm:w-[200px] max-sm:h-[200px] bg-cyan-400 absolute top-72 left-96 blur-3xl rounded-full z-0 lg:glass'></div>
      <div className='w-[500px] h-[500px] max-sm:w-[200px] max-sm:h-[200px] bg-purple-400 absolute top-72 left-52 blur-3xl rounded-full z-0 lg:glass'></div>

      <div className='w-[500px] h-[500px] max-sm:w-[200px] max-sm:h-[200px] bg-red-400 absolute top-44 right-0 blur-3xl rounded-full z-0 lg:glass'></div>
      <div className='w-[500px] h-[500px] max-sm:w-[200px] max-sm:h-[200px] bg-blue-400 absolute right-52 blur-3xl rounded-full z-0 lg:glass'></div>
      <div className='w-[500px] h-[500px] max-sm:w-[200px] max-sm:h-[200px] bg-purple-400 absolute top-72 right-72 blur-3xl rounded-full z-0 lg:glass'></div>
      <div className='w-[500px] h-[500px] max-sm:w-[200px] max-sm:h-[200px] bg-cyan-400 absolute top-72 right-96 blur-3xl rounded-full z-0 lg:glass'></div>
      <div className='w-[500px] h-[500px] max-sm:w-[200px] max-sm:h-[200px] bg-purple-400 absolute top-72 right-52 blur-3xl rounded-full z-0 lg:glass'></div>


    </div>
  </div>
    
}

export default MeshBackground