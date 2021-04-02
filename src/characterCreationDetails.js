import React, { useState } from 'react';
import "./App.css";
import { GiSwordsPower } from "react-icons/gi";
import characterFirst from "./img/warriorpaint1.png";
import characterSecond from "./img/paladin.png";
import characterTird from "./img/tanker.png";
import { GiSwordTie } from "react-icons/gi";
import { GiRogue } from "react-icons/gi";
import strategist from "./img/icon/man-with-two-swords.png";


const Tela = () =>{

    const [charClass, setClass] = useState('Warrior');
    const [charSimbol, setClassSimbol] = useState(<GiSwordsPower size="cover"/>);

    function status(id){
        if(id=='c1'){
            setClass('Warrior');
            setClassSimbol(<GiSwordsPower size="cover"/>);
            document.getElementById("c1").style.display="block";
            document.getElementById("c2").style.display="none";
            document.getElementById("c3").style.display="none";
            document.getElementById('line1').textContent = 'The warriors are know as the best fighers and the best tankers.';
            document.getElementById('line2').textContent = 'The warriors are the master of battles in dungeons and pvps, using melee weapons.';
        }else if(id=='c2'){
            setClass('Paladin');
            setClassSimbol(<GiSwordTie size="cover"/>);
            document.getElementById("c2").style.display="block";
            document.getElementById("c1").style.display="none";
            document.getElementById("c3").style.display="none";
            document.getElementById('line1').textContent = 'Paladins are the master of ligth and justice, fighting as good tankers, suport and does good damages.';
            document.getElementById('line2').textContent = "Their combat it's around powerful hits and healing skills.";
        }else if(id=='c3'){
            setClass('Rogue');
            setClassSimbol(<GiRogue size="cover"/>);
            document.getElementById("c3").style.display="block";
            document.getElementById("c2").style.display="none";
            document.getElementById("c1").style.display="none";
            document.getElementById('line1').textContent = "Rogue are the class with one of most powerful damage and with the highest dodge rating.";
            document.getElementById('line2').textContent = "Make sure that the enemy don't see you coming and your first hit will have a bonus.";
        }
       
    }

const MainContent = () =>{



    return(
    <div className="main">
    <div className="mainleft">
        <div className="title"><p id="titledesciption">Description</p></div>
        <div className="classtop">
        <h3>{charClass}</h3>  <div className="circle">{charSimbol}</div>
        </div>
        <div className="description">
        <p id='line1'>The warriors are know as the best fighers and the best tankers.</p>
        <p id='line2'>The warriors are the master of battles in dungeons and pvps, using melee weapons.</p>
                        
        </div>
        <button id="goBackButton">Exit</button>
    </div>
    <div className="maincenter">
        <div className="charTransition">
            <img className="char" id="c1" src={characterFirst} alt='img'/>
            <img className="char" id="c2" src={characterSecond} alt='img'/>
            <img className="char" id="c3" src={characterTird} alt='img'/>
        </div>
        
        <div className="nameinput">
            <input id="heroname" placeholder="Hero's name here!" type="text"/>
            <p className="nameatright"></p>
            <button>Create</button>
        </div>
    </div>
    <div className="mainright">
    <div className="title"><p id="titledesciption">Choose your class</p></div>
            
            <div className="classechoosen">
                <div className="first"  onClick={()=> status('c1')}><img src={strategist} alt="strategist" className="strategist"/></div>
                <div className="second" onClick={()=> status('c2')}><GiSwordTie size='cover'/></div>
                <div className="tird"  onClick={()=> status('c3')}><GiRogue size='cover'/></div>
        </div>
        <div className="gender"></div>
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