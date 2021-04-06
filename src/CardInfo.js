import React, { useState } from 'react';
import { App } from "./radarGraph";
import "./App.css";
import { CharacterCreation } from './CharacterCreation';
import { GiSwordsPower } from "react-icons/gi";
import { GiAxeSword } from "react-icons/gi";
import { GiShieldBash } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { GrCheckboxSelected } from "react-icons/gr";
import { Redirect } from 'react-router-dom';

// gera um card cim informações
const CardInfo = () => {

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
            App / >
            <
            div className = "fullBody-warrior0" >
            <
            h3 > < GiSwordsPower size = "30px" / > Strategist < /h3> <
            h3 > < GiAxeSword size = "30px" / > Weapons Master < /h3> <
            h3 > < GiShieldBash size = "30px" / > Tank < /h3>

            <
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

export { CardInfo };