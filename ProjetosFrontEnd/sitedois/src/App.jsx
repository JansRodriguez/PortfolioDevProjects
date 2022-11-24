import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './NavBar/Navigation';

import './App.css';


import Header from './Layout/Header';
import Typewriter from './Layout/Typewriter';

import Home from './Pages/Home';
import Footer from './Layout/Footer';


const App = ()=>{
    return(
        <Router>
            <Header/>
            <Navbar/>
            {/* <Typewriter/> */}
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </Router>
    )
}

export default App;