import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


const TransitionWorld = ()=>{
    const goToWorld = () => {
        return <Redirect to="/InWorld" />
    }
    const [stage, setNextStage] = useState(false);

const World =() => {
    
    return (
     <div className="world">Teste
     <button onClick={()=>{setNextStage(true)}}>Skip for now</button>
     </div>
     
    );
  
}
const render = () => {
    return(
        stage ? goToWorld(): World()
    )
}
return render();
}
export {TransitionWorld};