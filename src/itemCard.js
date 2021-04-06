import React, { useState } from 'react';
import "./world.css";


const Item = () => {

    //weapons
  
    const [mainWeaponName, setMainWeaponName] = useState('Common Sword');
    const [minDamage, setMinDamage] = useState(10);
    const [maxDamage, setMaxDamage] = useState(20);
    const [speedAttack, setSpeedAttack] = useState(1.0);
    const [statsBonus, setStatsBonus] = useState('+ 10 Strength');
    const [weaponDescription, setWeaponDescription] = useState('Common Sword that are with many adventures.');

    


    const itemKind = () => {
        return(
            <div className="mainweaponinfo">
            <div className="infotitle">{mainWeaponName}</div>
            <div className="infostats">
                <h3>DMG:{minDamage} - {maxDamage}</h3>
                <h3>SPEED: {speedAttack}</h3>
                <h3>Bonus: {statsBonus}</h3>
                <h3>Description: {weaponDescription}</h3>
            </div>
        </div>
        )


    }
  
    const render = () => {
        return itemKind();
    }
    return render();
}

export { Item };