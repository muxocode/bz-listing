import React, { useState, useEffect, useRef } from "react"
import { AppContext } from "../../Context";
import { IContext } from "../../IContext";
import "./FilterCharacter.css"

export const FilterCharacter=()=>{

    const oContext= useRef<IContext | undefined>();

    const [name, setName]= useState<string | undefined>(undefined);
    useEffect(()=>{
        debugger;
        if(name)
            oContext.current!.redux.character.Filters.Set({Key:"name", Filter:x=>x.name.toLowerCase().startsWith(name.toLocaleLowerCase())})
    },[name]);

    return <AppContext.Consumer>
    {
        (context:IContext | undefined) => {

            oContext.current=context!;

            return <div className="FilterCharacter">
                <input placeholder="writte name" onChange={x=>{
                    setName(x.target.value);
                }}/>
            </div>
        }
    }
    </AppContext.Consumer>
}