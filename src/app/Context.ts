import React from "react"
import { IContext } from "./IContext";

export const AppContext = React.createContext<IContext | undefined>(undefined);
