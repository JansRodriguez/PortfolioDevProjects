import './Leiaute.css';

import Typewriter from "typewriter-effect";

export default()=>{
    return(
        <div className="type" >
            <Typewriter options={{
                strings:["Olá, squad...", "Voces estao sumidos!!"],
                autoStart: true,
                loop: true
            }}
            />
        </div>
    )
}