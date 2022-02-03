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
        const {body}=await(await (await fetch('/api')).json())
        setData(body)
    })()
    })
    return (
        <TestContainer>{data}
            
        </TestContainer>
    )
}

export default TestAPI
