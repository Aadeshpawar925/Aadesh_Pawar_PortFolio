import React from 'react'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import JavaLogo from '../assets/JavaLogo.png'
import csharp from '../assets/csharp.png'

const About = () => {
    return (
        <div className='relative' id='about'>
            <div className='bg-gray-100 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>About Me</h2>
                        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Hi, I'm Aadesh Pawar</p>
                        <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                            A Full-Stack Developer with expertise in HTML, CSS, JavaScript, React, Java, C# .
                        </p>
                    </div>
                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                            <div>
                                <h3 className='text-2xl font-semibold text-gray-900'>About Me</h3>
                                <p className='mt-4 text-lg text-gray-600'>
                                I am a passionate Full-Stack Developer with expertise in HTML, CSS, JavaScript, React, Java, C#, and MySQL. I hold a Post Graduate Diploma from IET CDAC (August 2024 batch) and a degree in Electrical Engineering from Savitribai Phule Pune University, where I also completed my diploma in the same field.

Throughout my academic and professional journey, I have developed a deep interest in solving complex problems and creating impactful solutions. As a group leader for the SalonIt project, I led the development of an online booking system for salon services, which included features like online payment integration and database management.

I am motivated by the challenge of turning ideas into functional products and am committed to continually improving my skills by working with new technologies. My long-term goal is to become a well-rounded full-stack developer, gaining expertise in both frontend and backend technologies, while contributing to innovative projects and sharing my knowledge within the tech community.


                                </p>
                               
                            </div>
                            <div className='border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300'>
                                <h3 className='text-2xl font-semibold text-red-600'>Skills & Expertise</h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Html} alt="" className='w-10' />
                                        <span className='font-semibold'>HTML</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Css} alt="" className='w-8' />
                                        <span className='font-semibold'>CSS</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={Javascript} alt="" className='w-10' />
                                        <span className='font-semibold'>Javascript</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={ReactLogo} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>React</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={JavaLogo} alt="" className='w-8' />
                                        <span className='font-semibold'>Java</span>
                                    </div>
                                    <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                                        <img src={csharp} alt="" className='w-8 rounded-full' />
                                        <span className='font-semibold'>Csharp</span>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <h3 className='text-2xl font-semibold text-gray-900'>More About Me</h3>
                        <p className='mt-4 text-lg text-gray-600'>
                        Beyond technical skills, I pride myself on strong communication, office etiquette, and problem-solving abilities, all of which help me excel in collaborative environments and deliver quality work efficiently.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
