import { createContext, useReducer } from "react"
import { IActions, IHomeDataState } from "../../../Types";
import HomeDataReducer from "./HomeDataReducer";

const initialState: IHomeDataState = {
  // PercentageToBeCut represents either number of percentage or fixed
  sadaqah: {
    isOn: true,
    PercentageToBeCut: 1,
  },
  zakah: {
    isOn: false,
  },
  savings: [
    {
      id: "save-2165416",
      title: "Things to buy",
      targetAmount: 3000,
    },
    {
      id: "save-654984",
      title: "Retirement Savings",
      targetAmount: 1000000
    }
  ]
}

type IHomeDataContext = {
  HomeDataState: IHomeDataState;
  homeDataDispatch: React.Dispatch<IActions>;
}

const defaultDispatch: IHomeDataContext["homeDataDispatch"] = () => initialState // we never actually use this


export const HomeDataStore = createContext<IHomeDataContext>({
  HomeDataState: initialState,
  homeDataDispatch: defaultDispatch, // just to mock out the dispatch type and make it not optioanl
});

export const HomeDataContext: React.FC = ({children}) => {
  const [HomeDataState, homeDataDispatch] = useReducer(HomeDataReducer, initialState);

  return (
    <HomeDataStore.Provider value={{HomeDataState, homeDataDispatch}}>
      {children}
    </HomeDataStore.Provider>
  );
}