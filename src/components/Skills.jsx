import React from 'react'

const Skills = () => {
  return (
    <div className='mx-10 pt-10'>
        <h2 className='text-2xl font-semibold flex items-center'>
        <span className='text-2xl text-[#B5C18E] mr-2'>Skills</span>
        <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-slate-700 ml-6'></span>
        </h2>
        <div className='grid grid-cols-6 gap-y-2 text-gray-400 pt-8 font-semibold'>
            
                <p>Java</p>
                <p>C++</p>
                <p>Python</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>MySQL</p>
                <p>Selenium</p>
                <p>GitLab</p>
                <p>Toad for MySQL</p>
                <p>MS Office</p>
                <p>Eclipse</p>
                <p>WinSCP</p>
                <p>Test Data Preparation</p>
                <p>Software Testing</p>
                <p>Test Case Writing</p>
            
        </div>
    </div>
  )
}

export default Skills