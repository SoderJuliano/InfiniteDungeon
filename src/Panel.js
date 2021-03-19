import React, { useState } from 'react';
import "./App.css";
import { BsPersonFill } from "react-icons/bs";
import { CgEnter } from "react-icons/cg";
import { BoxLoading  } from 'react-loadingg';
import {TransitionWorld} from "./World";
import mp3 from "./y2.mp3";

  
const Panel = () => {

    const [needLoading, setNeedLoading] = useState(false)
    const [level, setLevel] = useState(1);
    const loading = () => {
        return (<div>
             <BoxLoading  />
            <audio autoPlay loop><source src={mp3}/></audio>
            <TransitionWorld/>
            </div>);
    }
    const main = () => {
        return (
            <div className="panel-account">
                <h1>Infinite Dungeon</h1>
                <div className="panel-head">
                    <h2>Your Account level are </h2><div className="level-span">1</div>
                </div>
                <div className="character-panel">
                    <div className="character-select">
                        <h3><BsPersonFill size="60px" />Character Name</h3><h2>level {level}</h2>
                        <button onClick={() => setNeedLoading(true)}>Enter Game <CgEnter size="30" /></button>

                    </div>

                </div>

            </div>
        )
    }
    const render = () => {

        return (
            needLoading ? loading() : main()
        )
    }
    return render();
}
export { Panel };