
import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';

const ContactUs = () => {
     const [result, setResult] = React.useState("");
     const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "29bf6f37-011c-4181-9df0-e86df6417d8b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        setResult("")
        toast.success("Form Submitted Successfully")
       
      event.target.reset();
    } else {
        toast.error("Error", data)
       
    setResult('')
    }
  };
  return (
    <div className=' flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Reach out to us' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iusto aut aperiam.'/>
        <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full '>
        <div>
            <p className='mb-2 text-sm font-medium'>Your name</p>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                <img src={assets.person_icon} alt="" />
                <input name='name' type="text"placeholder='Enter your name' className='w-full outline-none p-3 bg-transparent' required />
            </div>
        </div>

             <div>
            <p className='mb-2 text-sm font-medium'>Email id</p>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                <img src={assets.email_icon} alt="" />
                <input name='email' type="text"placeholder='Enter your name' className='w-full outline-none p-3'required />
            </div>
        </div>

        <div className='sm:col-span-2'>
            <p className='mb-2 text-sm font-medium' placeholder='Enter your message'>Message</p>
            <textarea name='message' rows={8} className='w-full p-3 text-sm outline-none rounded-lg border border-gay-300 dark:border-gray-600'required/>
        </div>

        <button type='Submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all '>
           {result?result:'Submit'}   <img src={assets.arrow_icon} alt="" className='w-4' />
        </button>

        </form>
     

    </div>
  )
}

export default ContactUs