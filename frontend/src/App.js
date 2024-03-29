import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormModal";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Header from "./components/Header/Header";

import GetSpots from "./components/spots/getSpots";
import GetSingleSpot from "./components/spots/getSpotDetails";
import GetCurrenSpot from "./components/spots/getCurrentSpot";
import CreateSpotModal from "./components/spots/createSpotModal";
import UpdateSpot from "./components/spots/updateSpotModal";
import UserReviews from "./components/reviews/userReviews/index";
import Bookings from "./components/Bookings";
import GetCurrentBookings from "./components/Bookings/GetCurrentBookings.js";
import HomePageMap from "./components/Maps/HomeMap";
// import MapContainer from "./components/Maps";
import Search from "./components/Search/Search";
import Footer from "./components/Navigation/Footer";

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

          <Route exact path="/reviews/current">
            <UserReviews />
          </Route>

          <Route exact path="/spots/current">
            <GetCurrenSpot />
          </Route>

          <Route exact path="/bookings/current">
            <GetCurrentBookings />
          </Route>

          <Route exact path="/spots/:spotId/edit">
            <UpdateSpot />
          </Route>

          <Route exact path="/spots/:spotId">
            <GetSingleSpot />
          </Route>

          {/* <Route path="/bookings">
            <Bookings />
          </Route> */}

          <Route path="/search/:keyword">
            <Search />
          </Route>

          {/* <Route exact path="/map">
            <HomePageMap />
          </Route> */}

          {/* <Route exact path="/googleMap">
            <MapContainer />
          </Route> */}

          <Route exact path="/">
            <GetSpots />
          </Route>

          <Route>
            <h1>Page Could Not Found</h1>
          </Route>
        </Switch>
      )}
           <Footer />
    </>
  );
}

export default App;
