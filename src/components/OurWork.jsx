
import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {
    const workData=[
        {
            title:'Mobile App Marketing',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corporis voluptate sapiente.',
            image:assets.work_mobile_app
        },
         {
            title:'Dashbord Management',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            image:assets.work_dashboard_management
        },
         {
            title:'Fitness App Promotion',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis corporis voluptate sapiente.',
            image:assets.work_fitness_app
        }
    ]
  return (
    <div className=' flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Our latest work' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam non officia nihil distinctio amet inventore facere temporibus eius dolore corrupti.' />
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full max-w-5xl '>
            {
                workData.map((work,index)=>(
                   <div className='hover:scale-105 transition-all duration-500 cursor-pointer' key={index}>
                    <img className='w-full rounded-xl' src={work.image} alt="" />
                    <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                    <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                   </div>
                ))
            }

        </div>
        

    </div>
  )
}

export default OurWork