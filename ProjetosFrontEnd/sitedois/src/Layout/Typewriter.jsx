import './Leiaute.css';

import Typewriter from "typewriter-effect";

export default()=>{
    return(
        <div className="type" >
            <Typewriter options={{
                strings:["Olá, seja bem vindo(a)!!!", "Navegue pelo ambiente e descubra o progresso no react.JS"],
                autoStart: true,
                loop: true
            }}
            />
        </div>
    )
}