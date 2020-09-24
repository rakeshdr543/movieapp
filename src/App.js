import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import HomeScreen from './screans/HomeScreen';
import Navbar from './components/Navbar';
import Favourites from './screans/Favourites';
import { Provider } from 'react-redux';
import store from './store';
import MovieDetailScreen from './screans/MovieDetailScreen';

function App() {
  return (
    <div className="App">
    
     
      <BrowserRouter>
      <Provider store={store}>
      <Navbar/>
      <Route path='/' exact component={HomeScreen}/>
      <Route path='/favourite' component={Favourites}/>
      <Route path='/movie/:id' component={MovieDetailScreen}/>
      </Provider>

      </BrowserRouter>
       
      
    </div>
  );
}

export default App;
