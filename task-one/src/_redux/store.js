//connector reducer to actions
import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger, promise } from "./middleware";

//Insert Reducers
import register from "../_reducers/registerR";
import species from "../_reducers/speciesR";
import users from "../_reducers/usersR";
import pets from "../_reducers/petsR";
import matches from "../_reducers/matchesR";

//combine all Reducers
const reducers = combineReducers({
  register,
  species,
  users,
  pets,
  matches
});

const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
