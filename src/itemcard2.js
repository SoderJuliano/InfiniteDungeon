import React, { useState } from 'react';
import "./world.css";


const ItemOff = () => {

    //weapons
    const [itemkind, setItemKind] = useState(2); // sword 1 // shild 2 // others // noitem0
    const [offWeaponName, setoffWeaponName] = useState('Common wood shield');
    const [minDamageOffhand, setMinDamageOffhand] = useState(10);
    const [maxoffhandDamage, setoffhandMaxDamage] = useState(20);
    const [speedAttackOffHand, setSpeedAttackOffHand] = useState(1.0);
    const [statsBonusOffHand, setStatsBonusOffHand] = useState('+ 10 Strength');
    const [weaponDescriptionOffHand, setWeaponDescriptionOffHand] = useState('Common shild made from pieces of wood.');
    const [defence, setDefence] = useState(10);
    const [armor, setArmor] = useState(10);
    
    const itemKind = () => {
        return(
            <div className="mainweaponinfo">
            <div className="infotitle">{offWeaponName}</div>
            <div className="infostats">
                <h3>DMG:{minDamageOffhand} - {maxoffhandDamage}</h3>
                <h3>SPEED: {speedAttackOffHand}</h3>
                <h3>Bonus: {statsBonusOffHand}</h3>
                <h3>Description: {weaponDescriptionOffHand}</h3>
            </div>
        </div>
        )


    }
    const itemKind2 = () => {
        return(
            <div className="mainweaponinfo2">
            <div className="infotitle">{offWeaponName}</div>
            <div className="infostats">
                <h3>Armor: {armor}</h3>
                <h3>Defence:{defence}</h3>
                <h3>Bonus: {statsBonusOffHand}</h3>
                <h3>Description: {weaponDescriptionOffHand}</h3>
            </div>
        </div>
        )


    }
    const render = () => {
        if(itemkind==2){
            return itemKind2();
        }else{
            return itemKind();
        }
    }
    return render();
}

export { ItemOff };