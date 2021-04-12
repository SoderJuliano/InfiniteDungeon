import React, { useState } from 'react';
import "./combat.css";
import characterFirst from "./img/weaponMaster.png";
import charactSeccond from './img/tanker.png';
import { GiSwordBrandish } from "react-icons/gi";
import { GiBouncingSword } from "react-icons/gi";

const BF = () => {

    const attack = () => {
       // document.getElementsByClassName("charTransitionbattlefild")[0].style.margin = ' 0 500px';
        document.getElementsByClassName("charTransitionbattlefild")[0].style.transform = 'translateX(550px) rotateX(51deg) rotateZ(43deg)';
        document.getElementsByClassName("charTransitionbattlefild")[0].style.transition = 'all 1s 0.3s';
    }
    const Main = () => {


        return (
            <div className="battlefild">

                <div className="midle1">
                    <div className="charTransitionbattlefild">
                        <img className="characterbtfild" src={charactSeccond} alt='img' />
                    </div>
                    <div className="spellsline">
                        <div onClick={() => attack()} className="spellitem"><GiSwordBrandish size="80%" /></div>
                        <div className="spellitem"><GiBouncingSword size="80%" /></div>
                        <div className="spellitem">Empty</div>
                        <div className="spellitem">Empty</div>
                        <div className="spellitem">Empty</div>
                    </div>

                </div>

            </div>

        );
    }
    const render = () => {

        return (
            Main()
        )
    }
    return render();
}
export { BF };