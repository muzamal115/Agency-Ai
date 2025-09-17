
import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

const Teams = () => {
  return (
    <div className=' flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Meet the Team' desc=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea illum aperiam.'/>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {
            teamData.map((team,index)=>(
            <div key={index} className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400' >
               <img className='w-12 h-12 rounded-full' src={team.image} alt="" />
               <div className='flex-1'>
                <h3 className='font-bold text-sm'>{team.name}</h3>
                <p className='text-xs opacity-60'>{team.title}</p>
               </div>
            </div>
            ))
        }
       </div>

    </div>
  )
}

export default Teams