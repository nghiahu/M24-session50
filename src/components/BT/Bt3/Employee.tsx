import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Employee() {
    const [searchParam,setSearchParam] = useSearchParams();
    const [studentName,setStudentName] = useState<string>('')
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setStudentName(e.target.value)
    }
    const handleClick=()=>{
        setSearchParam({StudentName: studentName})
        
    }
    const stName = searchParam.get("StudentName")
  return (
    <>
    Bài 3
    <div>Employee <br />
    <input type="text" id='name' onChange={handleChange}/> <br />
    <button onClick={handleClick}>Tìm kiếm</button>
    <br />
    Bài 4
    <p> studentName: {stName}</p>
    </div>
    </>
  )
}
