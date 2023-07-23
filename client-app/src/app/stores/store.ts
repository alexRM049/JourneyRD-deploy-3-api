import { createContext, useContext } from "react";
import DestinyStore from "./destinyStore";
import CommonStore from "./commonStore";

interface Store{
    destinyStore: DestinyStore;
    commonStore: CommonStore;
}

export const store: Store = {
    destinyStore: new DestinyStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}