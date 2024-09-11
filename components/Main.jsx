import React from 'react'
import Button from './Button'

export default function Main() {
  return (
    <div className='w-full md:w-1/2 min-h-screen md:m-32 '>
      <div className="name text-blue-700 text-3xl">CALL ME ALI</div>
      <div className="profession text-5xl my-6 md:text-6xl leading-7">A  <span className='text-purple-800 text-4xl md:text-6xl leading-3'>Full Stack Web Developer</span> Who Hepls Enterpreneur Start their Digital Business</div>
      <div className='text-zinc-400'>As a full-stack web developer, I work with a wide range of technologies and frameworks, ensuring that I can deliver top-quality results for your project. </div>
      <Button value="CONTACT ME" />
      <div className='flex'>
        <p className=''><span className='text-purple-800'  > <b>10+ </b>  </span>projects Completed</p>
        <p className='mx-5'><span className='text-purple-800'  > <b>2+ </b>  </span>Year of Experiecne</p>
      </div>
      <div></div>
    </div>
  )
}
