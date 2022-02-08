import React,{useState,useEffect} from 'react'
import { FaUpload } from 'react-icons/fa';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getId } from '../api';

const TestContainer=styled.div` 
  background-color: lightblue;
  height: 300px;
`

const InputId=styled.input`

`
const SearchId=styled.button`

`
const OutputName=styled.h3`

`
const TestAPI = () => {
    // /////
    const [inputValue, setInputValue] = useState('')

    function handleSearch(e) {
        // here you can get the inputValue
        // DoWhateverIWantWithSearchValue(inputValue)
    }

    ///////////get:id
    const { id } = useParams()
    const [data, setData] = useState("")
    const loadData = async () => {
        const data=await getId("2")
        setData(data)
    }

    useEffect(() => {      
        loadData()
    }, [id])
    // console.log("this is from testAPI.js: "+id)

    
    return (
       
        <TestContainer>
            <InputId handleChange={(e) => setInputValue(e.target.value)} placeholder="Search for ID">

            </InputId>
            <SearchId primary='true' onClick={handleSearch}>Search

            </SearchId>
            <OutputName>
                Here is the data from api: {data}
            </OutputName>
            
            
        </TestContainer>
    )
}

export default TestAPI
