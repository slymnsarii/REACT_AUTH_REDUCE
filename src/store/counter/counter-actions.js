import { COUNTER_DOWN, COUNTER_SET, COUNTER_UP } from "../types";

export const counterUp = () => ({ type: COUNTER_UP }); //burasi bir obje(süslü içi)(1 arttıracağım için payload'a gerek yok)

export const counterDown = () => ({ type: COUNTER_DOWN });

export const counterSet = (value) => ({ type: COUNTER_SET, payload: value }); //benim gönderdiğim değeri ayarlayacak
