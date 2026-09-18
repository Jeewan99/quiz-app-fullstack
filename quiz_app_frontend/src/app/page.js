'use client';

import Header from "./headers";
import Link from "next/link";
import React, { useContext, useEffect } from 'react'
import { MarksContex } from "./ContexProvider";

export default function Home() {
  const {marks,setMarks} = useContext(MarksContex)
  
  useEffect(()=>{
    setMarks(0);
  },[])
  return (
    <>
        <div className="h-full w-full flex flex-col items-center ">
         <Header/>
          <div className=" w-full flex justify-center items-center flex-col">
            <div className="w-full rounded-b-md font-sans flex justify-center items-center flex-col">
                 <h2 className="text-4xl font-bold mt-15">Ready to <p className="text-red-500 inline">test</p> your knowledge?</h2><br/>
                 <p className="w-full text-left mt-10 max-w-md">
                 Challenge yourself with fun, fast-paced quizzes across your favorite topics.
               10 Quick Questions • ⏱️ 30 Seconds Each •hit start, and see where you rank on the leaderboard</p>
            </div>
            <div className=" mt-30"><Link href="/questions/" className=" bg-amber-700 text-white p-3 rounded-2xl w-45 h-12">START</Link></div>
          </div>
        </div>
    </>
  );
}
