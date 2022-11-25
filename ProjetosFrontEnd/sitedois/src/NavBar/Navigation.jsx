import {Link} from "react-router-dom";
import './Navigation.css';

export default()=>{
    return(
        <ul className="navbar">
            <li >
                <Link to='/'>Home</Link>
            </li>
            <li >
                <Link to='/Elements'>Elementos</Link>
            </li>
        </ul>
    )
}   