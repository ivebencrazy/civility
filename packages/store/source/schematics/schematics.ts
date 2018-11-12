import { Func } from "@civility/utilities";
import { IArrayActionState } from "../reducers/createArrayReducers";
import { IMapActionState, IMapReducerState } from "../reducers/createMapReducers";

export type mapReducer = (state: IMapReducerState, action: IMapActionState) => IMapReducerState
export type arrayReducer = (state: any[], action: IArrayActionState) => any[]

export interface IScheme {
  async?: boolean
  reducer: mapReducer | arrayReducer | Func
  request?: any
  response?: any
}

export interface ISchematic {
  [key: string]: IScheme
}
