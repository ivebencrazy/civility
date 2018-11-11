import { Func, isObject } from "@civility/utilities"
import { Middleware } from "redux"
import { Store } from "../../store/store"


export type middlewareFunc = (store: Store, next: Func, action: any) => Func

export function createMiddleware(middleware: middlewareFunc): Middleware {
  return (store: Store) => {
    if (!isObject(store)) {
      throw Error(store + " is not a valid value for store")
    }

    return (next: Func) => (action: any) => middleware(store, next, action)
  }
}
