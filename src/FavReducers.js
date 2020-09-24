import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from './FavConstants'

function favReducer(state={favMovies:[]},action){
    switch (action.type){
        case ADD_TO_FAVOURITE:
            const item=action.payload;
            const movie=state.favMovies.find(x=>x.movie===item.movie);
            if(movie){
                return{
                    favMovies:
                    state.favMovies.map(x=>x.movie===movie.movie ? item:x)
                }
            }
            return {favMovies:[...state.favMovies,item]};

        case REMOVE_FROM_FAVOURITE:
            return {favMovies:state.favMovies.filter(x=>x.movie !== action.payload)};


        default:
            return state;
        
        

    }

}
export {favReducer}