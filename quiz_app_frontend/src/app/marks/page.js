'use client';
import React, { useContext } from 'react'
import { MarksContex } from '../ContexProvider'
import Header from '../headers';
import Link from 'next/link';

const Page = () => {
    const {marks,setMarks} = useContext(MarksContex)
    console.log(marks)
    const handleclick=()=>{
        setMarks(0)
    }
  return (
    < div className='w-full'>
    <Header/>

    <div className='text-center text-4xl '>your socre is {marks} out of 10</div>
    <div className=" mt-30 w-full flex justify-center items-center"><Link href="/" onClick={()=>handleclick()} className="text-center bg-amber-700 text-white p-3 rounded-2xl w-45 h-12">Play Again</Link></div>
    
    </div>
  )
}

export default Page
