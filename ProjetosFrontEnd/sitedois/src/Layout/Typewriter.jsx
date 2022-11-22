import Typewriter from "typewriter-effect";

export default()=>{
    return(
        <div className="header" style={{width:'100%', height:'100px', backgroundColor:'blue'}}>
            <Typewriter options={{
                strings:["Olá...", "Sejam bem-vindos!!"],
                autoStart: true,
                loop: true
            }}
            />
        </div>
    )
}