import React,{useEffect, useState} from 'react'
import AddFavourite from './AddFavourite';
import { Link } from 'react-router-dom';


function Movie({data,active,type}) {
    const [favourite,setFavourite]=useState(false)
    console.log(data)
    const handleFavourite=()=>{

        setFavourite(!favourite)
       
    }
    const navStyle={
        color:'yellow'
        
    }
    


    useEffect(() => {
        
        setFavourite(false)
        
        return () => {
            //
        }
    }, [data])
    return (
        <div className='center'>
        {active?
        (data.Title ? (
            <div className='card'>
        <div className='card-header'>
        <Link to={`/movieapp/movie/${data.imdbID}`} style={navStyle}>
        <h3 style={{fontWeight:'bolder'}}>{data.Title}</h3>
        </Link>

        </div>
        <div className='card-container'>
        <h3>Duration:<span style={{color:'black'}}><i>{data.Runtime}</i></span></h3>
        <h3>Genre:<span style={{color:'black'}}><i>{data.Genre}</i></span></h3>
        <h3>Release data:<span style={{color:'black'}}><i>{data.Released}</i></span></h3>

        <button onClick={handleFavourite}>{!favourite? 'Favourite':'Not favourite'}</button>
        
        

        </div>
        </div>

        ):<h2>{type} not found</h2>)
        :null
        
        }
        {favourite && <AddFavourite movieId={data.imdbID} favourite={favourite} />}
            
        </div>
    )
}

export default Movie
