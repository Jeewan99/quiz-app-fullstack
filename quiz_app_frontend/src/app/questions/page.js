'use client';
import { useState ,useEffect, useContext} from 'react';
import Header from '../headers';
import { MarksContex } from '../ContexProvider'
import axios from 'axios';
import Link from 'next/link';

export default function QuestionCard() {
 const {marks,setMarks} = useContext(MarksContex)
 const [question, setQuestion] = useState([])
 const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [shownext,setshownext] = useState(false)
  const [loading,setLoading]= useState(true)
  const length = 0
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const answers = [
    { id: 1, text: "Kathmandu" },
    { id: 2, text: "Dhankuta" },
    { id: 3, text: "Damak" },
    { id: 4, text: "Dharan" }
  ];
   useEffect(()=>{
    const getData = async ()=>{
      try{
        
         const response = await axios.get(apiUrl);
      
       setQuestion(response.data)
       console.log(response.data)
      
      }catch(e){

      }finally{
        setLoading(false)
      }
    }
    getData();
  },[])
 
  const questions = question[questionIndex]

if(loading){
  return <h1>loading....</h1>
}
const onclickhandle=(ans)=>{
  
  setSelectedAnswerId(ans.id)
  if(ans.iscorrect){
    setMarks(marks+1)
    if(questionIndex === question.length-1){
         setshownext(true)
    }else{
         setQuestionIndex(questionIndex+1)
    }
     
  }else{
      if(questionIndex === question.length-1){
       setshownext(true)
    }else{
         setQuestionIndex(questionIndex+1)
    }
    
  }

}
const onnextclick=()=>{

}
  return (
    <>
    <Header/>
    <div className="w-full max-w-md mx-auto p-4 flex flex-col gap-3">
   
      <h3 className="font-bold text-xl mb-2 text-gray-800">
        {questions.text}
      </h3>

      {question[questionIndex].answersa.map((answer) => {
        
        const isSelected = selectedAnswerId === answer.id;

        return (
          <>
          <button
            key={answer.id}
            
            onClick={() => onclickhandle(answer)}
            className={`w-full p-3.5 rounded-xl border text-left font-medium transition-all ${
              isSelected
              ? 'bg-blue-400 text-white bg-blue-500 shadow-md' // Active Selected Style
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100' // Default Unselected Style
            }`}
            >
            {answer.text}
          </button>
          
            </>
          

        );
        
      })}
       {shownext && <Link href="/marks" className="w-40 h-10  pt-1.5 rounded-xl border  font-medium transition-all bg-blue-600 text-white text-center   shadow-md"> See Score</Link>}
    </div>
    </>
    
  );
}