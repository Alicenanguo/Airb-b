import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session.js";
import spotReducer from "./spots.js";
import reviewsReducer from "./reviews";
import bookingReducer from "./bookings";
import mapsReducer from "./maps";

const rootReducer = combineReducers({
  session: sessionReducer,
  spots: spotReducer,
  reviews: reviewsReducer,
  booking: bookingReducer,
  maps: mapsReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
