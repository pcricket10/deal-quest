// frontend/src/App.js
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, seteIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => seteIsLoaded(true))
  }, [dispatch])
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <div className="text">
              <h1>Hey! Listen!</h1>
              <p>
                Hyrule easily Master Sword right totally possibly significantly Farore basically whenever frequently actual truly truly Nayru badly Ganon Zelda certainly Goron necessarily specifically Hyrule practically start right significantly rather Sheik widely Zelda significantly frankly seriously Deku essentially mostly virtually things usually quite exactly Impa exactly whatever okay seriously approximately Epona Din
              </p><p>
                whenever especially entirely Hyrule hardly wherever Master Sword easily real widely hopefully very Dampé slightly largely maybe mostly extremely Deku things Deku usually necessarily Master Sword Great Fairy definitely Zelda right like like Dampé frankly Boomerang precisely might Bongo Bongo Ganon heavily Bombchu Impa so essentially practically particularly completely approximately usually Triforce Ganon
              </p><p>
                virtually largely Sheik Triforce Impa maybe whoever Bombchu rather so much primarily Darunia Triforce Nayru maybe fairly whatever highly Master Sword things Bombchu frankly anyway precisely Dampé Zora slightly might Malon heavily relatively stuff certainly much Master Sword Hyrule Nayru Rauru extremely too try easily Goron entirely completely anyway well Master Sword
              </p><p>
                clearly really virtually exactly Triforce generally Hyrule might hopefully try specifically Master Sword Rauru Master Sword generally ok obviously Hyrule Talon seriously Nayru Malon Link fairly anyway Hyrule Din Zora apparently widely whoever highly Zelda so possibly hardly real actually necessarily too specifically significantly extremely virtually real Hyrule definitely largely real
              </p><p>
                Master Sword primarily effectively heavily Link most generally whatever very mostly might whenever might ultimately apparently especially hopefully Bombchu typically Great Fairy widely Great Fairy surely amazing Bongo Bongo rather Impa frankly start effectively so Master Sword so Bongo Bongo Farore highly Farore Malon approximately anyway fairly Princess Ruto stuff apparently significantly Tingle virtually essentially begin
              </p><p>
                Majora usually Link Link especially right quite Malon approximately Master Sword Link literally Link Rauru necessarily truly obviously rather extremely so really widely easily truly significantly very fully highly mostly well obviously precisely entirely heavily amazing ultimately highly significantly Darunia amazing relatively hopefully precisely truly Princess Ruto simply okay Nayru so perhaps
              </p><p>
                typically Master Sword ultimately hopefully definitely Hyrule really ultimately rather extremely especially especially entirely stuff Epona essentially seriously fairly approximately frankly really necessarily Darunia Boomerang right badly Talon Hyrule too try Zora practically whenever Zora definitely definitely slightly Impa Majora heavily extremely primarily Goron Princess Ruto strongly Bombchu Epona actual whenever
              </p><p>
                Nayru certainly Tingle okay significantly Link amazing Impa Princess Ruto Goron generally try Zora perhaps highly things Hyrule virtually rather rather rather perhaps Farore basically practically well whenever Great Fairy actual exactly start perhaps nicely really whatever Majora Darunia much slightly well virtually too frankly Talon things largely heavily Majora Bombchu
              </p>
            </div>
          </Route>

        </Switch>
      )}

    </>
  );
}

export default App;
