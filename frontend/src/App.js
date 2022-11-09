import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Header from './components/Header/Header'

import GetSpots from "./components/spots/getSpots";
import GetSingleSpot from "./components/spots/getSpotDetails";
import GetCurrenSpot from "./components/spots/getCurrentSpot";
import CreateSpotModal from "./components/spots/createSpotModal"
import UpdateSpot from "./components/spots/updateSpotModal"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>

      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/spots/create">
            <CreateSpotModal />
          </Route>

          <Route exact path="/spots/current">
            <GetCurrenSpot />
          </Route>

           <Route exact path='/spots/:spotId/edit'>
            <UpdateSpot />
          </Route>

          <Route exact path="/spots/:spotId">
            <GetSingleSpot />
          </Route>

          <Route exact path="/">
            <GetSpots />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
