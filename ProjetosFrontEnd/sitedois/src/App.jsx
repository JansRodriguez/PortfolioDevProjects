import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';

import Header from './Layout/Header';

import Home from './Pages/Home';
import Footer from './Layout/Footer';


const App = ()=>{
    return(
        <Router>
            <Header/>
            
            
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </Router>
    )
}

export default App;