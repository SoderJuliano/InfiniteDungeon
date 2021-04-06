import React, { useState } from 'react';
import "./world.css";



const Bag = () => {


    const [bagSize, setBagSize] = useState(6);

function renderBag(){

    for(let i = 0; i <= bagSize.length; i++){
        document.write("<div id='bg"+i+"'>slot</div>");
    }
}
    const main = () =>{

        return(
            <div className="bagdiv">BAG
                renderBag();
            </div>
            
        )

    }

    const render = () =>{

        return main();
    }
    return render();
}

export {Bag};