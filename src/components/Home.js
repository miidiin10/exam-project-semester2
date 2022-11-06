import React from 'react'
import { Helmet } from 'react-helmet'


export default function Home() {
  return (
    <div className='home'>
    <Helmet>
        <title>Home Page</title>
        <meta name='description' content='AltSchool Exam Project' />
    </Helmet>
         <h1>Home Page</h1>
         <p>AltSchool Second Semester Exam Project</p>
         <p>Copyright &copy; By Hameed Owoade 2022</p>
    </div>
  )
}
