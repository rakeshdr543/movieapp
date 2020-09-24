import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { favReducer } from './FavReducers';

const favMovies=Cookie.getJSON('favMovies')||[];

const initialState={
    favmovies:{favMovies}
};

const reducer=combineReducers({
    favMovies:favReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;