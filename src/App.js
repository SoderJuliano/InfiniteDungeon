import React, { useState } from 'react';
import { UserLogin } from "./UserLogin";
import {CharacterCreation} from "./CharacterCreation";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Panel} from "./Panel";
import {CreateAccount} from "./CreateAccount";
import {World} from "./InWorld";
import {Tela} from "./characterCreationDetails";
import {BF} from "./battlefild";

const App = () => {

  const render = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={UserLogin}></Route>
          <Route exact path="/new-player" component={CharacterCreation}></Route>
          <Route exact path="/panel" component={Panel}></Route>
          <Route exact path="/CreateAccount" component={CreateAccount}></Route>
          <Route exact path="/InWorld" component={World}></Route>
          <Route exact path="/tela" component={Tela}></Route>
          <Route exact path="/battle" component={BF}></Route>
        </Switch>
      </Router>
    )
  }
  return render()
}

export default App;