import React from 'react'
import Cards from './Cards'
import AadiPortFolio from '../assets/AadiPortFolio.png'
import SalonIt from '../assets/SalonIt.png' 

const Projects = () => {

    const projectJson = [
        {
          title: 'Portfolio',
          desc: "This portfolio showcases my journey as a Full-Stack Developer, highlighting my skills in creating dynamic, user-centric web applications. Explore my projects, achievements, and expertise in technologies like React, Java, and MySQL, reflecting my passion for solving real-world challenges through code.",
          image: AadiPortFolio,
          live: "",
          github: ""
        },
       {
        title: 'SalonIt',
        desc: "SalonIT is a web-based platform enabling users to book salon services like hairstyling and beard trimming online, featuring secure payment and efficient database integration. Leading this project, I focused on creating a seamless experience for both customers and salon owners, streamlining service management and enhancing user satisfaction.",
        image:SalonIt,
        live:" " ,
         github:"https://github.com/Aadeshpawar925/SalonIt" ,
       }
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Project</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
