import { createStore } from "redux"
import {reducer} from "../reducers/reducers"
 import { devToolsEnhancer } from "redux-devtools-extension";


const store = createStore(
reducer,
devToolsEnhancer()
)
export {store}