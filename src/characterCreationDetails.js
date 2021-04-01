import React, { useState } from 'react';
import "./App.css";
import { GiSwordsPower } from "react-icons/gi";
import warrior1 from "./img/warriorpaint1.png";

const Tela = () =>{

    const [charClass, setClass] = useState('Warrior');


const MainContent = () =>{

    return(
    <div className="main">
    <div className="mainleft">
        <div className="title"><p id="titledesciption">Description</p></div>
        <div className="classtop">
        <h3>{charClass}</h3>  <div className="circle"><GiSwordsPower size="cover"/></div>
        </div>
        <div className="description">
        <p>The warriors are know as the best fighers and the best tankers.</p>
        <p>The warriors are the master of battles in dungeons and pvps, using melee weapons.</p>
                        
        </div>
        <button id="goBackButton">Sair</button>
    </div>
    <div className="maincenter">
        <div className="char" src={warrior1} alt='img'/>
       
        <div className="nameinput">
            <input type="text"/>
            <p className="nameatright"></p>
            <button>Create</button>
        </div>
        <div className="mainright">
            <div className="gender"></div>
            <div className="classechoosen">
                <div className="first"></div>
                <div className="seccon"></div>
                <div className="tird"></div>
            </div>
        </div>
    </div>

</div>
)
    

}
  
const render = () =>{

    return MainContent();

}
return render();
}

export {Tela}