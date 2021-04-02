import React, { useState } from 'react';
import "./world.css";
import characterFirst from "./img/warriorpaint1.png";
import { GiVikingHead } from "react-icons/gi";
import { GiTrenchBodyArmor } from "react-icons/gi";
import { GiGloves } from "react-icons/gi";
import { GiLegArmor } from "react-icons/gi";
import { GiBeltArmor } from "react-icons/gi";
import { GiSkullRing } from "react-icons/gi";
import { GiSwordBrandish } from "react-icons/gi";
import { GiSlashedShield } from "react-icons/gi";
import mainHandImg from "./img/itens/swordn13d.png"
import offHand from "./img/itens/woodshild.png"

const World = () => {
    const [level, setLevel] = useState(1);
    const [cname, setName] = useState("character");
    const [characterImg, setCharacter] = useState(characterFirst);
    const [mainHand, setmainHand] = useState(true);

    const MainInWorld = () => {

        return (

            <div className="world">
                <div className="character">
                    <h4 id="title">Infinite Dungeon World...</h4>
                    <h4>{cname}</h4>
                    <h4>level{level}</h4>

                </div>
                <div className="setItens">

                    <div className="dungeon">Enter Dungeon</div>

                    <div className="taver">Taver</div>

                    <div className="duel">Duelist</div>

                    <div className="bag">Bag</div>

                    <div className="friend-list">Friends</div>


                </div>
                <div className="character-equipment">

                    <div className="equip-left">
                        <div className="head">
                            <span id="helnet-span">Helmet</span>
                            <GiVikingHead size="cover" opacity="0.5" />
                        </div>
                        <div className="body">
                            <span id="body-span">Body-armor</span>
                            <GiTrenchBodyArmor size="cover" opacity="0.5" />
                        </div>
                        <div className="arms">
                            <span id="arms-span">Arms-Gloves</span>
                            <GiGloves size="cover" opacity="0.5" />
                        </div>
                        <dv className="waist">
                            <span id="belt-span">Belt</span>
                            <GiBeltArmor size="cover" opacity="0.5" />
                        </dv>
                        <div className="boots">
                            <span id="boots-span">Boots</span>
                            <GiLegArmor size="cover" opacity="0.5" />
                        </div>
                        <div className="relic">
                            <span id="relic-span">Relic</span>
                            <GiSkullRing size="cover" opacity="0.5" />
                        </div>
                    </div>

                    <div className="character-display">
                        <img className="character-img" src={characterImg} alt="Character" />
                    </div>
                </div>
                <div className="equip-right">
                    <div className="main-weapon" >
                        <img id="weapon-slot" src={mainHandImg} alt="Main-Hand" />
                        <GiSwordBrandish id="mainHandIcon" size="cover" opacity="0.7" />
                    </div>
                    <div className="second-weapon">
                        <img id="offhand-slot" src={offHand} alt="Main-Hand" />
                        <GiSlashedShield id="offhand-icon" size="cover" opacity="0.5" />
                    </div>
                </div>

            </div>
        );
    }
    const render = () => {

        return (
            MainInWorld()
        )
    }
    return render();
}
export { World };