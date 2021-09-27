import { createContext, useReducer } from "react";
import { IActions, IBudgetDataState } from "../../../Types";
import BudgetDataReducer from "./BudgetDataReducer";

const initialState: IBudgetDataState = {
  groups: {
    "789515-849": "Bills",
    "5412315": "Frequent"
  },
  categories: [
    {
      id: "cat-income",
      group:"builtIn",
      title: "Income",
    },
    {
      id: "cat-sadaqah",
      group:"builtIn",
      title: "Sadaqah",
    },
    // {
    //   id: "cat-zakah",
    //   group:"builtIn",
    //   title: "Zakah",
    // },
    {
      id: "cat-investment",
      group:"builtIn",
      title: "Investment",
    },
    {
      id: "cat-489432",
      group:"789515-849",
      title: "Electric",
      initBudget: 500,
      availableToSpend: 500,
    },
    {
      id: "cat-4544632",
      group:"789515-849",
      title: "Water/Stair Maintenance",
      initBudget: 500,
      availableToSpend: 500,
    },
    {
      id: "cat-45441664",
      group:"789515-849",
      title: "Internet",
      initBudget: 300,
      availableToSpend: 300,
    },
    {
      id: "cat-544916548",
      group:"789515-849",
      title: "Cellphone",
      initBudget: 200,
      availableToSpend: 200,
    },
    {
      id: "cat-54d1f6489a",
      group:"5412315",
      title: "Food and Meat",
      initBudget: 1500,
      availableToSpend: 0,
    },
    {
      id: "cat-231d65fs",
      group:"5412315",
      title: "Groceries",
      initBudget: 900,
      availableToSpend: 675,
    },
    {
      id: "cat-5613df6s1",
      group:"5412315",
      title: "Transportation",
      initBudget: 500,
      availableToSpend: 500,
    },
  ]
};

type IBudgetContext = {
  BudgetDataState: IBudgetDataState;
  budgetDataDispatch: React.Dispatch<IActions>;
}

const defaultDispatch: IBudgetContext["budgetDataDispatch"] = () => initialState // we never actually use this

export const BudgetDataStore = createContext<IBudgetContext>({
  BudgetDataState: initialState,
  budgetDataDispatch: defaultDispatch, // just to mock out the dispatch type and make it not optioanl
});

export const BudgetDataContext: React.FC = ({children}) => {
  const [BudgetDataState, budgetDataDispatch] = useReducer(BudgetDataReducer, initialState);
  
  return (
    <BudgetDataStore.Provider value={{BudgetDataState, budgetDataDispatch}}>
      {children}
    </BudgetDataStore.Provider>
  );
}