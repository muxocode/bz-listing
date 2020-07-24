import { ICharacter } from "../entities"
import { store } from "./store"
import {CharacterActions, GET_TYPE, SELECT_TYPE, SET_TYPE, FILPER_TYPE, FILPER_CLEAR_TYPE} from "./Character/CharacterActions"
import { CharacterState } from "./Character/CharacterState";
import { IFilter } from "../model/IFilter";

const SetCharacterCollection=(collection:ICharacter[])=>{

    let action:CharacterActions={type:SET_TYPE, payload: collection};
    return store.dispatch(action);
}

const SelectCharacter=(character:ICharacter)=>{

    let action:CharacterActions={type:SELECT_TYPE, payload: character};
    return store.dispatch(action);
}

const Filter=(filter:IFilter<ICharacter>)=>{

    let action:CharacterActions={type:FILPER_TYPE, payload: filter};
    return store.dispatch(action);
}

const ClearFilter=(key:string | string[] | undefined = undefined)=>{

    let action:CharacterActions={type:FILPER_CLEAR_TYPE, payload: key};
    return store.dispatch(action);
}

const SuscribeToCharacter=(listener:(state:CharacterState)=>void)=>{

    let result= store.subscribe(()=>{
        let state=store.getState().character;
        listener(state);
    });

    store.dispatch({type:GET_TYPE});

    return result;
}

export const CreateCharacterRedux=(getCollection:()=>Promise<ICharacter[]>)=>{

    const next = store.dispatch;
    store.dispatch = (action) => {

      let state= store.getState().character;

      if(action.type === GET_TYPE && !state.IsLoaded)
      {
        getCollection().then(x=>{
            SetCharacterCollection(x);
        })
      }

      return next(action);
    }

    return {
        character:{
            Select:SelectCharacter,
            Subscribe:SuscribeToCharacter,
            Filters:{
                Set:Filter,
                Clear:ClearFilter
            }
        }
    };
}

export type ICharacterRedux = ReturnType<typeof CreateCharacterRedux>
