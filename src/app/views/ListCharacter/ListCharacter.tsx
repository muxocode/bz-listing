import React, { useState, useEffect, useRef } from "react"
import {AppContext} from "../../Context"
import { IContext } from "../../IContext"
import { ICharacter } from "../../../entities"
import "./ListCharacter.css"


export const ListCharacter=()=>{

    const [data, SetData]= useState<ICharacter[]>([]);
    const [selected, SetSelected]= useState<ICharacter | undefined>(undefined);
    const [IsSubscription, SetIsSubscription]= useState<boolean>(false);
    const unSubscribe= useRef<()=>void>(()=>{});
    const oContext= useRef<IContext | undefined>();

    useEffect(()=>{
        if(!IsSubscription){
            unSubscribe.current= oContext.current!.redux.character.Subscribe(c=>{
                if(c.IsLoaded)
                {
                    SetData(c.FilteredCharacters());
                    SetIsSubscription(true);
                }
            })
        }
    });

    useEffect(()=>{
        if(selected)
            oContext.current!.redux.character.Select(selected!);
    },[selected]);

    useEffect(() => {
        return () => {
            // Component unmonut
            unSubscribe.current();
        }
    }, [])

    return <AppContext.Consumer>
    {
        (context:IContext | undefined) => {

            debugger;
            oContext.current= context!;
            let selected_item= selected || {id:undefined};

            return <ul className="ListCharacter">
                {
                    data.map(x=>{
                        return <li key={x.id} className={selected_item.id === x.id?"selected":""} onClick={i=>{
                                SetSelected(x);
                            }}>
                            <img src={x.image} alt={x.name}/>
                            <div>
                                <div className="title">{x.name}</div>
                                <div className="description">
                                    episodes: {x.episode.length}
                                </div>
                            </div>                           
                        </li>;
                    })
                }
            </ul>
        }
    }
    </AppContext.Consumer>
}