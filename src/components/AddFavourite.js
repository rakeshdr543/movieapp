import React, { useEffect } from 'react';
import { addToFavourite } from '../FavActions';
import {useDispatch} from 'react-redux';


function AddFavourite({movieId,favourite}) {

    console.log('favourite movie',movieId)
    const  dispatch = useDispatch();
    useEffect(() => {
        if(movieId){
            dispatch(addToFavourite(movieId,favourite))
        }
        return () => {
            //
        }
    }, [])
    return (
        <div>
           
        </div>
    )
}

export default AddFavourite
