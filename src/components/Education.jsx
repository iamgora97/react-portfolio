import React from 'react'

const Education = () => {
  return (
    <div className='mx-10 pt-12'>
        <h2 className='font-titleFont text-2xl font-semibold flex items-center'>
        <span className='text-2xl text-[#B5C18E] mr-2'>Education</span>
        <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-slate-700 ml-6'></span>
        </h2>

        <div className='pt-8'>
        <p className='text-gray-400 text-3xl'>B.Tech, KIIT University, Electronics and Electrical Engineering, 2020</p>
        <p className='text-gray-400 text-3xl pt-2'>WBCHSE, Vivekananda Siksha Niketan High School, 2016</p>
        <p className='text-gray-400 text-3xl pt-2'>WBBSE, Vivekananda Siksha Niketan High School, 2013</p>
        </div>
    </div>
  )
}

export default Education