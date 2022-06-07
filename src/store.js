import { rootreducer } from "./redux";
import { createStore } from "redux";

export const store = createStore(rootreducer);