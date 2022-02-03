import React,{useState,useEffect} from 'react'
import styled from 'styled-components'


const TestContainer=styled.div` 
  background-color: lightblue;
  height: 300px;
`

const TestAPI = () => {
    const [data,setData]=useState('')
    useEffect(()=>{
    (async function(){
        const {text}=await ( await fetch('/api')).json()
        setData(text)
    })()
    })
    return (
        <TestContainer>Here is the data from api: {data}
            
        </TestContainer>
    )
}

export default TestAPI
