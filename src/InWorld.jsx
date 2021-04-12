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
import mainHandImg from "./img/itens/swordn13d.png";
import offHand from "./img/itens/woodshild.png";
import { GiSwapBag } from "react-icons/gi";
import dungeon from "./img/icon/world/dungeon.PNG";
import { GiThreeFriends } from "react-icons/gi";
import { SiCondaForge } from "react-icons/si";
import { GiDuel } from "react-icons/gi";
import {Item} from "./itemCard.js";
import {ItemOff} from "./itemcard2.js";
import {Bag} from "./bag.js";

const World = () => {

    const [level, setLevel] = useState(1);
    const [cname, setName] = useState("character");
    const [characterImg, setCharacter] = useState(characterFirst);
    const [mainHand, setmainHand] = useState(true);
    const [offHandItem, setoffHand] = useState(true);
    const [showBag, setShowBag] = useState(false);
    const [showoffhand, setshowoffhand] = useState("none");
    const [showmainhand, setshowmainhand] = useState("none");
    const [bagslot, setbagslot] = useState(sessionStorage.getItem('slotfree'));

    const MainInWorld = () => {

let mainHandW = {type: 1, id: 1, image:mainHandImg, name:'Common Sword'};
let offHandW = {type:2, id:2, image: offHand, name:'Common wood shield'};

const needBag = () => {
        if(!showBag){
            document.getElementsByClassName("bagdiv")[0].style.display = "block";   
            setShowBag(true); 
        }else{
            document.getElementsByClassName("bagdiv")[0].style.display = "none";
            setShowBag(false);
        }
        
}
const ToBag = () => {
    if(bagslot=='' || bagslot==null || bagslot>=0){
        if(parseInt(bagslot)>0){
            sessionStorage.setItem('bag'+bagslot, offHandW.name);
            sessionStorage.setItem('slotfree', parseInt(bagslot)+1);
            setbagslot(parseInt(bagslot)+1);
        }else{
            sessionStorage.setItem('bag0', offHandW.name);
            sessionStorage.setItem('slotfree', 1);
            setbagslot(1);
        }
        document.getElementById("offhand-slot").style.display = 'none';
        document.getElementById("offhand-icon").style.display = 'block';
        document.getElementById("optionItem").style.display = "none";
        setshowoffhand("none");
        setoffHand(false);
    }


}
const tobagMainHand = () => {
    if(bagslot=='' || bagslot==null || bagslot>=0){
        if(parseInt(bagslot)>0){
            sessionStorage.setItem('bag'+bagslot, mainHandW.name);
            sessionStorage.setItem('slotfree', parseInt(bagslot)+1);
            setbagslot(parseInt(bagslot)+1);
        }else{
            sessionStorage.setItem('bag0', mainHandW.name);
            sessionStorage.setItem('slotfree', 1);
            setbagslot(1);
        }
    document.getElementById("weapon-slot").style.display = 'none';
    document.getElementById("mainHandIcon").style.display = 'block';
    document.getElementById("optionItem2").style.display = "none";
    setshowmainhand("none");
    setmainHand(false);
    }
}
const openoption = () =>{
document.getElementById("optionItem").style.display = "block";
}
const openoption2 = () =>{
    document.getElementById("optionItem2").style.display = "block";
    }
const cancelO = () =>{
    document.getElementById("optionItem").style.display = "none";
}
const cancel = (id) =>{
    document.getElementById(id).style.display = "none";
}
const displayItem = () => { 
    offHandItem?setshowoffhand("block"):setshowoffhand("none")
    document.getElementsByClassName("mainweaponinfo2")[0].style.display = showoffhand;
    document.getElementsByClassName("bagdiv")[0].style.display = "none";
    setShowBag(false);
}
const setdisplayItem = () => { 
    mainHand?setshowmainhand("block"):setshowmainhand("none")
    document.getElementsByClassName("mainweaponinfo")[0].style.display = showmainhand;
    document.getElementsByClassName("bagdiv")[0].style.display = "none";
    setShowBag(false);
}

        return (

            <div className="world">
                <div className="character">
                    <h4 id="title">Infinite Dungeon World...</h4>
                    <h4>{cname}</h4>
                    <h4>level{level}</h4>

                </div>
                <div className="setItens">

                    <div className="dungeon"><img className='iconD' src={dungeon} alt="Enter dungeon" /></div>

                    <div className="dungeon"><SiCondaForge size="90%" /></div>

                    <div className="dungeon"><GiDuel size="90%" /></div>

                    <div className="dungeon" onClick={()=> needBag()}><GiSwapBag size='cover' /></div>

                    <div className="dungeon"><GiThreeFriends size="90%" /></div>


                </div>
                <div className="blockElements">
                    <div className="character-equipment">

                        <div className="equip-left">
                            <div className="second-weapon" onMouseLeave={()=>{document.getElementsByClassName("mainweaponinfo2")[0].style.display = "none"}} onMouseOver={()=>displayItem()} onClick={()=>openoption()}>
                                <img id="offhand-slot" src={offHand} alt="Main-Hand"/>
                                <GiSlashedShield id="offhand-icon" size="cover" opacity="0.5" />
                            </div>
                            <ItemOff/>
                        </div>
                        <div id="optionItem">
                                   <button id="storeB" onClick={()=>ToBag()}>Store</button>
                                   <button id="cancelB" onClick={()=>cancelO()}>Cancel</button>
                        </div>

                        <div className="character-display">
                            <img className="character-img" src={characterImg} alt="Character" />
                        </div>
                        <div className="equip-right">
                            <div className="main-weapon" onMouseOver={()=>setdisplayItem()} onClick={()=>openoption2()}  onMouseLeave={()=>{document.getElementsByClassName("mainweaponinfo")[0].style.display = "none"}}>
                                <img id="weapon-slot" src={mainHandW.image} alt="Main-Hand" />
                                <GiSwordBrandish id="mainHandIcon" size="cover" opacity="0.7" />
                            </div>
                           <Item />
                        </div>
                        <div id="optionItem2">
                                   <button id="storeB" onClick={()=>tobagMainHand()}>Store</button>
                                   <button id="cancelB" onClick={()=>cancel("optionItem2")}>Cancel</button>
                        </div>
                    </div>
                    <div className="under">
                        <div className="body">
                            <span id="helnet-span">Helmet</span>
                            <GiVikingHead size="80%" opacity="0.5" />
                        </div>
                        <div className="body">
                            <span id="body-span">Body-armor</span>
                            <GiTrenchBodyArmor size="80%" opacity="0.5" />
                        </div>
                        <div className="body">
                            <span id="arms-span">Arms-Gloves</span>
                            <GiGloves size="80%" opacity="0.5" />
                        </div>
                        <div className="body">
                            <span id="belt-span">Belt</span>
                            <GiBeltArmor size="80%" opacity="0.5" />
                        </div>
                        <div className="body">
                            <span id="boots-span">Boots</span>
                            <GiLegArmor size="80%" opacity="0.5" />
                        </div>
                        <div className="body">
                            <span id="relic-span">Relic</span>
                            <GiSkullRing size="80%" opacity="0.5" />
                        </div>
                    </div>
                </div>

                <Bag/>

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