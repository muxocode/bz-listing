import React from 'react';
import { IContext } from './IContext';
import { AppContext } from './Context';
import { ListCharacter, FilterCharacter } from './views/';
import "./App.css"

export function App(props:{context:IContext}) {
  return (
    <AppContext.Provider value={props.context}>
          <div className="App">
            <FilterCharacter/>
            <ListCharacter/>
          </div>
    </AppContext.Provider>
  );
}
