'use client';
import React, { createContext, useState } from 'react'

const MarksContex = createContext();
const ContexProvider = ({children}) => {
    const [marks, setMarks] = useState(0)
  return (
    <MarksContex.Provider value={{marks,setMarks}}>
      {children}
    </MarksContex.Provider>
  )
}

export default ContexProvider
export {MarksContex}
