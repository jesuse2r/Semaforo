import React, {useEffect, useState} from "react";



//create your first component


const Home = () => {
    
	const [color,setColor] = useState("red");
    useEffect (()=>{
        if (color=="yellow"){
            console.log("yellow activo");
        }
    
},[color])
    
	return (

        
		<div className="container">
        <div className="semaforo">
        <span onClick={()=>setColor("red")} className={color == "red" ? "luces-circulo red" : "luces-circulo"}> </span>
        <span onClick={()=>setColor("yellow")} className={color == "yellow" ? "luces-circulo yellow" : "luces-circulo"}></span>
        <span onClick={()=>setColor("green")}className={color == "green" ? "luces-circulo green" : "luces-circulo"}></span>
        
    </div>
    <div className="stick">   </div>
        <div className="floor">   </div>
		
        </div>
        
	
		
	);
};

export default Home;
