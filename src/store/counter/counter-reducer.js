import { COUNTER_DOWN, COUNTER_SET, COUNTER_UP } from "../types";
import { counterInitialState } from "./counter-initial-state";

//biz burda sadece action göndericez, state'i counterInitialState objesini verdiğim için bana mevcut state geliyor
export const counterReducer = (state = counterInitialState, action) => {
  if (action.type === COUNTER_UP) {
    const newState = { ...state, counter: state.counter + 1 }; //...state:mevcut state'i güncelleme gibi eskiyi tutma,
    //counter: state.counter + 1:mevcut state'in değerini 1 arttır ve bunu da counter'a at
    //counter:counter+1 yerine counter: state.counter + 1 deriz çünkü yukarda counter diye bir şey yok ama mecvut state'in içindeki counter deriz
    //oluşturulan yeni state return edildiğinde mevcut state(counterInitialState) güncellenmiş olur
    //ama auth ile birleştirilip bu biraz değişecek
    return newState;
  } else if (action.type === COUNTER_DOWN) {
    const newState = { ...state, counter: state.counter - 1 };
    return newState;
  } else if (action.type === COUNTER_SET) {
    const newState = { ...state, counter: action.payload };
  }

  return state;
  //Bu satır hiç bir if case'ne girmediğinde geriye mevcut state'i göndersin diye yazıldı,
  //eğer olmazsa tüm state uçar
};
