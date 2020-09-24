import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetailScreen=(math)=> {
    console.log('last',math)
    const [movie,setMovie]=useState({})

    useEffect(() => {
        fetchItems()
        return () => {
            //
        }
    }, [])
    const fetchItems=async ()=>{
        const items=await axios.get(`https://www.omdbapi.com/?apikey=b1b1c505&i=`+math.match.params.id)
        const {data}=items
        setMovie(data)
    }
  


    const {Title,Runtime,Released,Country,Genre,Language,imdbRating}=movie;
    return (
        <div className='container-detail'>
        <div>
        <h2>Movie Title: {Title}</h2>
        <h3>Duration: {Runtime}</h3>
        <h3>Release Date: {Released}</h3>
        <h3>Origin Country: {Country}</h3>
        <h3>Genre: {Genre}</h3>
        <h3>Language: {Language}</h3>
        <h3>IMDB Rating: {imdbRating}</h3>
        </div>
        
            
        </div>
    )
}

export default MovieDetailScreen
