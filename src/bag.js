import React, { useState } from 'react';
import "./world.css";
import {GiNothingToSay} from "react-icons/gi";
import {GiPayMoney} from 'react-icons/gi';



const Bag = () => {

    const [coins, setcoins] = useState(0);
    const [bagSize, setBagSize] = useState(6);
    const itens = [];
for(let i=0;i<=bagSize;i++){
    sessionStorage.getItem('bag'+i)?itens.push(sessionStorage.getItem('bag'+i)):itens.push("Empty slot");
}
function renderBag(){

    }
    const main = () =>{

        return(
            <div className="bagdiv">
                <p><GiNothingToSay/>
                You can slot {bagSize} itens here.
               </p>
               <p className='bagitem'>1 - {itens[0]}</p>
               <p className='bagitem'>2 - {itens[1]}</p>
               <p className='bagitem'>3 - {itens[2]}</p>
               <p className='bagitem'>4 - {itens[3]}</p>
               <p className='bagitem'>5 - {itens[4]}</p>
               <p className='bagitem'>6 - {itens[5]}</p>
               <p id="coins"><GiPayMoney/>
               Coins you have {coins}</p>
            </div>
            
        )

    }

    const render = () =>{

        return main();
    }
    return render();
}

export {Bag};