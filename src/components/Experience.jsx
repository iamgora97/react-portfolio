import React from 'react'

const Experience = () => {
  return (
    <div className='mx-10 pt-24'>
        <h2 className='font-titleFont text-2xl font-semibold flex items-center'>
        <span className='text-2xl text-[#B5C18E] mr-2'>Work Experience</span>
        <span className='hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-slate-700 ml-6'></span>
        </h2>
        

        <div>
            <p className='text-3xl text-[#D7E4C0]/50 pt-5'>Project Engineer | Test Engineer L1 | Quality Assurance | RPA Tester | DOP- EOT</p>
            <p className='text-2xl text-[#E7F0DC]/40 pt-2 pb-7'>Aug 2022- Present</p>

            <ul className='text-gray-400 py-4 space-y-3 list-disc pl-3'>
                <li>Developed and maintained comprehensive test cases and test data to support testing activities.</li>
                <li>Proficiently identified and documented over 120 bugs across diverse projects, demonstrating strong bug-reporting skills.</li>
                <li>Conducted meticulous high-level regression tests to ensure unwavering product quality and reliability.</li>
                <li>Developed robust test scenarios, aided in test data preparation, and delivered comprehensive test reports.</li>
                <li>Created detailed Change Requests (CRs) to document project alterations and maintain records accurately.</li>
                <li>Communicated effectively with developers, stakeholders, and testing team members to ensure clear understanding and collaboration.</li>
                <li>Acquired fundamental knowledge of software testing types, techniques, and test case development.</li>
                <li>Continuously learned and implemented new technologies and tools to stay updated with industry trends and improve testing practices.</li>
            </ul>



            <p className='text-3xl text-[#D7E4C0]/50 pt-9'>Project Engineer | Test Engineer Trainee | Website Testing | DOP - EOT</p>
            <p className='text-2xl text-[#E7F0DC]/40 pt-2 pb-7'>Arp 2022- Aug 2022</p>
            <ul className='text-gray-400 py-4 space-y-3 list-disc pl-3'>
                <li>Comprehensive Understanding: Acquired fundamental knowledge encompassing various software testing types, techniques, test case development, and proficient bug reporting methodologies during an intensive training period.</li>
                <li>Java Proficiency: Mastered the Java programming language, a pivotal skill for crafting robust automated test scripts essential for efficient testing processes.</li>
                <li>Automation Tools Exposure: Introduced to a suite of automation testing tools, including Selenium, Appium, TestNG, JUnit, and Cucumber, priming skills to automate diverse testing aspects and enhance testing efficiency.</li>
                <li>CI/CD Integration: Gained insights into vital CI/CD tools like Jenkins and GitLab, crucial for seamlessly integrating automated testing scripts into the development pipeline, optimizing testing workflows.</li>
            </ul>
        </div>
    </div>
  )
}

export default Experience