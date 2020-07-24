import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './app';
import * as serviceWorker from './serviceWorker';
import { InitContainer } from './ioc/Container';
import { IGetService, IErrorHandler } from './model';
import { ICharacter } from './entities';
import { TYPES } from './ioc';
import {CreateCharacterRedux} from "./redux"
import "reflect-metadata";

InitContainer().then(x=>{

  debugger;

  let oService= x.get<IGetService<ICharacter>>(TYPES.Services.IGetService.ICharacter);
  let redux= CreateCharacterRedux(()=>{return oService.Get()});
  let errorHandler= x.get<IErrorHandler>(TYPES.IErrorHandler);

  ReactDOM.render(
    <React.StrictMode>
      <App context={{
        redux,
        errorHandler
      }}/>
    </React.StrictMode>,
    document.getElementById('root')
  );

})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
