import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';
import { removeFromFav } from '../FavActions';

function Favourites(props) {
    const [fav,setFav]=useState(true)
    
    const {favMovies}=Cookie.getJSON('favMovies')||[];

    console.log('testdata',favMovies)
    const dispatch = useDispatch()
    const handleFav=(movieId)=>{
        dispatch(removeFromFav(movieId));
        setFav(!fav)

    }
 
    return (
        <div className='container-fav'>
            
                {
                    favMovies.length===0 ?
                    <h3>No favourite movie added</h3>
                    :
                    favMovies.map(item=>(
                        
       
            <div className='card'>
        <div className='card-header'>
        <h3>{item.name}</h3>
        </div>
        <div className='card-container'>
        <h3>Duration:<span style={{color:'black'}}><i>{item.duration}</i></span></h3>
        <h3>Genre:<span style={{color:'black'}}><i>{item.genre}</i></span></h3>
        <h3>Release data:<span style={{color:'black'}}><i>{item.released}</i></span></h3>
        <button onClick={()=>handleFav(item.movie)}>{fav?'Remove from favourite':'Removed from favourite'}</button>
        </div> 
        </div>
    ))
}
</div>
)}

export default Favourites
