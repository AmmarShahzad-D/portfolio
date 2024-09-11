import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";
export default function Contact() {
  return (
    <section>
      <div className="grid grid-cols-2  gap-4 m-16 items-center ">
        <div className="first">
          <h1 className='text-4xl font-bold w-1/2 my-5 ' >Love to hear from you,
            <span className='text-purple-800'>Drop me a line 👋</span> </h1>
          <p className='text-xl w-[600px]  text-zinc-600 my-6 ' >With expertise in diverse technologies and frameworks, I deliver top-quality results for your project. Lets collaborate and bring your ideas to life. Reach out to me directly or fill out the form.</p>
          <div className="socials flex jusity-between align-start my-6  ">
            <div className="linkdin"><CiLinkedin className="text-4xl mx-2 hover:text-purple-800 cursor-pointer duration-100 " /></div>
            <div className="github"><IoLogoGithub className="text-4xl mx-2 hover:text-purple-800 cursor-pointer duration-100 " /></div>
            <div className="email"><MdOutlineMail className="text-4xl mx-3 hover:text-purple-800 cursor-pointer duration-100 " /></div>
          </div>
        </div>

        <div className="email-section">
          <form action="" className='flex flex-col justify-center items-start  w-full  ' >
            <label htmlFor=""   className='my-3' >Name</label>
            <input type="name" name="" id="" className='border border-solid  w-full py-2 ' />
            <label htmlFor=""   className='my-3' >Email</label>
            <input type="email" name="" id="" className='border border-solid  w-full py-2 ' />
            <label htmlFor=""   className='my-3' >Message</label>
            <textarea name="" id="" rows={'5'} cols={'5'} className='border border-solid  w-full  py-2  ' ></textarea>
            <button  className='w-full  py-3 my-6 bg-purple-800 px-4 text-white'  >Drop a message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
