import React, { useState } from 'react';
import { App2 } from "./radarPala";
import "./App.css";
import { CharacterCreation } from './CharacterCreation';
import { GiSwordTie } from "react-icons/gi";
import { ImHammer2 } from "react-icons/im";
import { GiHealing } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { GrCheckboxSelected } from "react-icons/gr";
import { Redirect } from 'react-router-dom';


// exporta info sobre o paladino
const PaladinInfo = () => {

    const [needRender, setNeedRender] = useState(false)
    const [needRedirect, setNeedRedirect] = useState(false)

    const details = () => {
        return ( <
            CharacterCreation / >
        )
    }
    const bntSubmit = () => {
        console.log('sas'); // aqui da pra enviar um json
        return <Redirect to = "/panel" / > ;
    }
    const main = () => {
        return ( <
            div className = "character-creation" >
            <
            h1 > Infinite Dungeon < /h1> <
            h3 > Character creation < /h3> <
            div className = "CharacterCreation" >

            <
            div className = "card-class" >
            <
            div className = "card-img" > < /div> <
            div className = "card-content" >
            <
            h3 > Warrior < /h3> <
            p > The warriors are know as the best fighers and the best tankers. < /p> <
            p > The warriors are the master of battles in dungels and pvps, using melee weapons. < /p> <
            /div> <
            /div>

            <
            div className = "card-class" >
            <
            div className = "card-img-2" > < /div> <
            div className = "card-content" >
            <
            h3 > Paladin < /h3> <
            p > Paladins are the master of ligth and justice, fighting as good tankers, suport and does good damages. < /p> <
            p > Their combat it 's around powerful hits and healing skills.</p> <
            p > description < /p> <
            /div> <
            /div> <
            /div> <
            div className = "special-details" > Especial details <
            div className = "center-details" >
            <
            div className = "special-detail-head" > < /div> <
            App2 / >
            <
            div className = "fullBody-warrior0" >
            <
            h3 > < GiSwordTie size = "30px" / > Leader in Battle < /h3> <
            h3 > < ImHammer2 size = "30px" / > Punisher < /h3> <
            h3 > < GiHealing size = "30px" / > Holy Healer < /h3> <
            /div> <
            /div> <
            div className = "botton-details" >
            <
            h3 onClick = {
                () => setNeedRender(true) } > < GiCancel / > Close < /h3> <
            h3 onClick = {
                () => setNeedRedirect(true) } > < GrCheckboxSelected / > Select < /h3> <
            /div> <
            /div> <
            /div>
        )
    }
    const render = () => {
        if (needRedirect == true) {
            return (bntSubmit());
        } else {
            return (
                needRender ? details() : main()
            )
        }

    }
    return render();

}

export { PaladinInfo };