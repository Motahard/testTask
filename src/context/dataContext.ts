import { createContext } from "react";
import {IDataStateFunctions} from "../models/IApi";
import {initialState} from "../models";

const dataContext = createContext<IDataStateFunctions>(initialState);

export default dataContext;
