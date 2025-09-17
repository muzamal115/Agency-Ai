import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {
    const servicesData=[
        {
            title:'Advertising',
            description:'We turn bold ideas into powerful digital solution that connect engage...',
            icon:assets.ads_icon
        },
         {
            title:'Content Marketing',
            description:'We turn bold ideas into powerful digital solution that connect engage...',
            icon:assets.marketing_icon
        } ,
        {
            title:'Content Writing',
            description:'We turn bold ideas into powerful digital solution that connect engage...',
            icon:assets.content_icon
        },
         {
            title:'Social Media',
            description:'We turn bold ideas into powerful digital solution that connect engage...',
            icon:assets.social_icon
        }
    ]
  return (
    <div className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
    <img src={assets.bgImage2} alt="" className='absolute -top-110 -z-1 -left-70 dark:hidden'  />

    <Title title='How can we help?' desc='From strategy to execuation, we craft digital solutions that move your bussiness forward.'/>
    <div className='flex flex-col md:grid grid-cols-2'>
        {
            servicesData.map((service,index)=>(
                 <ServiceCard key={index} service={service}/>
            ))
        }
    </div>
    </div>
  )
}

export default Services