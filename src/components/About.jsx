import React from 'react'
import photo from '../assets/photo.png'

const About = () => {
  return (
    <div className='flex justify-center pt-5'>
        <div className='m-10 h-[110px] w-[900px]'>
           <div>
            <img src={photo} width={'500px'} height={'500px'}  alt="" />
           </div>
        </div>
        <div className='text-gray-400/90 text-left m-10'>
        Driven by a commitment to precision and software excellence, I am an RPA Test Automation Enthusiast with a keen eye for detail. I have identified over 120 bugs across diverse projects and ensure product reliability through rigorous regression testing. Proficient in manual testing and skilled in Java, I create robust automated test scripts using Selenium and MySQL, improving testing efficiency. At Wipro, I've honed my skills with tools like Selenium, TestNG, JUnit, Cucumber, Jenkins, and GitLab. My HackerRank certifications in problem-solving, Java, Python, and CSS demonstrate my dedication to excellence. I am constantly learning and expanding my expertise in automation tools like JUnit, Jenkins, JMeter, and Playwright. Eager to leverage my technical and analytical skills, I aim to contribute to your organization's success and elevate its software quality.
        </div>
    </div>
  )
}

export default About