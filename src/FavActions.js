import axios from 'axios';
import Cookie from 'js-cookie';
import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from './FavConstants';

const addToFavourite=(movieId,favourite)=>async (dispatch,getState)=>{
    const {data}=await axios.get("http://www.omdbapi.com/?apikey=b1b1c505&i="+movieId);
    dispatch({
        type:ADD_TO_FAVOURITE,payload:{
            movie:movieId,
            name:data.Title,
            duration:data.Runtime,
            released:data.Released,
            genre:data.Genre,
            rating:data.imdbRating,
            favourite


        }
    });
    const {favMovies}=getState();
    Cookie.set('favMovies',JSON.stringify(favMovies));

}

const removeFromFav=(movieId)=>(dispatch,getState)=>{
    dispatch({type:REMOVE_FROM_FAVOURITE,payload:movieId})
    const {favMovies}=getState();
    Cookie.set('favMovies',JSON.stringify(favMovies));


}

export {addToFavourite,removeFromFav}