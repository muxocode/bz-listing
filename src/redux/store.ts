import { combineReducers, createStore } from "redux";

import { CharacterReducer } from "./Character/CharacterReducer"

const rootReducer = combineReducers({
  character: CharacterReducer
})

export type storeType = ReturnType<typeof rootReducer>
export const store= createStore(rootReducer);