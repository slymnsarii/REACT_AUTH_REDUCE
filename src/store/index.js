import { createContext, useContext, useReducer } from "react";
import { counterInitialState } from "./counter/counter-initial-state";
import { counterReducer } from "./counter/counter-reducer";

//Bütün reducer yapılarının(auth, counter vs.) birleşme yeri --> index.js

//Boş bir merkezi state oluşturuldu
const StoreContext = createContext();

//Component'lerde merkezi state'e erişimi kolaylaştırmak için kendi hook'umuzu yazdık
export const useStore = () => useContext(StoreContext); //alt componentlerde kullanmak icin, kendi hooku'umuzu oluşturuyoruz

//bu bir rafce aslında, app'i sarmalladığım Store.Provider'ı burda yapıp return etmek, amaç App'i sade bırakmak
//özel prop:children; StoreProvider'ın arasını aldığım her şey(child'larini almak) , böylece merkezi state de oluşturduğum
//prop'ları(value içi) her yere dağıtmak

export const StoreProvider = ({ children }) => {
  //useReducer hooku'una reducer ve initalState parametre olarak verilir..
  //useReducer fonksiyonu ise geriye setter ve getter'ları döner
  //       getter           setter
  const [counterState, dispatchCounter] = useReducer(
    //counter dosyalarının merkezi state'le ilişkilendirildiği yer burası
    counterReducer,
    counterInitialState
  );

  return (
    //Alt component'lerde counterState'i counter değerini öğrenmek için, dispatchCounter'i de counter'in değerini değiştirmek için kullanacağız
    <StoreContext.Provider value={{ counterState, dispatchCounter }}>
      {children}
    </StoreContext.Provider>
  );
};
