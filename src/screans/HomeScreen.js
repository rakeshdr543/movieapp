import React, { useState } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';


function HomeScreen() {
    const [searchtext,setSearchtext]=useState('')
    const [url,setUrl]=useState(`https://www.omdbapi.com/?apikey=b1b1c505`)
    const [data,setData]=useState('')
    const [active,setActive]=useState(false)
    const [type,setType]=useState('movie')
 

    const fetchMovies= async ()=>{
        const {data}=await axios.get(url+`&t=${searchtext}`)
        setData(data)
        
    }
    const handleSearch=(e)=>{
        setSearchtext(e.target.value)
    }
    const handleSubmit=(e)=>{
        fetchMovies()
        setUrl(`https://www.omdbapi.com/?apikey=b1b1c505`)
        setActive(true)

    }
    const handleDrop=(e)=>{
      
        setUrl( url+`&type=${e.target.value}`)
        setType(e.target.value)


    }
    return (
        <div>
        <div className='container'>
            <div >
            <ul className='filter'>
                <li>
                <input
                    type='text'
                    placeholder='enter key words'
                    onChange={handleSearch}

                />
                </li>
                <li>
                <div className='dropdown-content' onChange={handleDrop}>   
                    <select name="sortOrder" >
                          <option value="">All</option>
                          <option value="movie">Movies</option>
                          <option value="series">Series</option>
                          <option value="episode">Episodes</option>
                     </select>
                  
                </div>
                </li>
                <li>
                <button onClick={handleSubmit}>Search</button>

                </li>
            </ul>
                
            </div>
            </div>
            <Movie data={data} active={active} type={type} />
           

       
        </div>
    )
}

export default HomeScreen
