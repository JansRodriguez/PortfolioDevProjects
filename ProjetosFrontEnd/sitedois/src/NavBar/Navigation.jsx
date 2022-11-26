import {Link} from "react-router-dom";

import './Navigation.css';

export default()=>{
    return(
        <nav className="navbar" >
            <>
                <img src="../public/_img/um.png" alt="" srcset="" />
            </>
            
            <li className="primeiro" >
                <Link to='/' style={{textDecoration:'none', color:'rgb(163, 138, 106)'}}>Home</Link>
            </li>
            <li className="segundo">
                <Link to='/Elements' style={{textDecoration: 'none', color:'rgb(163, 138, 106)'}}>Elementos</Link>
            </li>
        </nav>
    )
}   