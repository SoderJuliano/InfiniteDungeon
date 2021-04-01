import {PaladinInfo} from "./PaladinInfo";
import React, { useState } from 'react';
import {CardInfo} from './CardInfo';
import { GiSwordsPower } from "react-icons/gi";
import { GiSwordTie } from "react-icons/gi";

const CharacterCreation = () => {


    const [card, swicthCard] = useState(false)
    const [needRender, setNeedRender] = useState(false)

    const details = () => { 
            return (
                <CardInfo/>
             )
    }
    const details2 = () => {
        return (
            <PaladinInfo/>
         )
}

    const main = () =>{
        return (
        <div className="character-creation">
            <h1>Infinite Dungeon</h1>
            <h3>Character creation</h3>
            <div className="CharacterCreation">

                <div className="card-class" onClick={() => setNeedRender(true)}>
                    <div className="card-img"></div>
                    <div className="card-content">
                        <h3>Warrior<GiSwordsPower size="30px" /></h3>
                        <p>The warriors are know as the best fighers and the best tankers.</p>
                        <p>The warriors are the master of battles in dungeons and pvps, using melee weapons.</p>
                        
                    </div>
                </div>

                <div className="card-class" onClick={() => swicthCard(true)}>
                    <div className="card-img-2"></div>
                    <div className="card-content">
                        <h3>Paladin<GiSwordTie size="30px"/></h3>
                        <p>Paladins are the master of ligth and justice, fighting as good tankers, suport and does good damages.</p>
                        <p>Their combat it's around powerful hits and healing skills.</p>
                    </div>
                </div>
            </div>
        </div>
    );

    }
    
    const render = () => {

        if(needRender==true){ 
            return(details());
        }else if(card==true){ 
            return(details2());
        }else{
            return(main());
        }
    }
    return render();
}

export { CharacterCreation };