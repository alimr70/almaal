import { IActions, IBudgetDataState } from "../../../Types";

const BudgetDataReducer = (state: IBudgetDataState, action: IActions) => {
  switch(action.type){
    case "ADD_Budget":
      return state;

    default:
      return state;
  }
}

export default BudgetDataReducer;