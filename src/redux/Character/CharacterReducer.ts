import { CharacterState } from "./CharacterState"
import { CharacterActions, SELECT_TYPE, SET_TYPE, FILPER_TYPE, FILPER_CLEAR_TYPE } from "./CharacterActions"
import { ICharacter } from "../../entities"

const initialState: CharacterState = new CharacterState();
  
export function CharacterReducer(
    state = initialState,
    action: CharacterActions
  ): CharacterState {
    debugger;
    switch (action.type) {
      case SELECT_TYPE: {
        state.Selected= action.payload as ICharacter;
        break;
      }
      case SET_TYPE: {
        state.Characters= action.payload as ICharacter[];
        state.IsLoaded=true;
        break;
      }
      case FILPER_TYPE: {
        if(!state.Filters)
          state.Filters=[];

        let old_filter= state.Filters.findIndex(x=>x.Key===action.payload.Key);

        if(old_filter>-1)
          state.Filters.splice(old_filter)
        
        state.Filters.push(action.payload);

        break;
      }
      case FILPER_CLEAR_TYPE: {

        if(state.Filters)
        {
          let remove_indexes:string[]=[];
          let payload= action.payload;

          if(!payload){
            remove_indexes=state.Filters.map(x=>x.Key);
          }
          else if(typeof payload === "string")
          {
            remove_indexes=[payload];
          }
          else
          {
            remove_indexes= payload;
          }

          remove_indexes.forEach(x=>{
            let old_filter= state.Filters!.findIndex(i=>i.Key===x);
            state.Filters!.splice(old_filter);
          })

        }
        break;
      }
    }

    return state
  }