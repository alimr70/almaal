import { IActions, ITransactionUiState } from "../../../Types";

const TransactionUiReducer = (state: ITransactionUiState, action: IActions) => {
  switch(action.type){
    case "SHOW_NUMPAD":
      return showNumPad(state, action.payload.transactionShowNumPad!);

    case "SET_INPUT_VALUE":
      return changeInputValue(state, action.payload.transactionInputValue!);

    case "TOGGLE_IS_PLUS":
      return toggleIsPlus(state, action.payload.transactionIsPlus!);

    case "CHANGE_SELECTED_CATEGORY":
      return changeSelectedCategory(state, action.payload.transactionSelectedCategory!);

    case "CHANGE_SELECTED_ACCOUNT":
      return changeSelectedAccount(state, action.payload.transactionSelectedAccount!);

    case "CHANGE_SELECTED_DATE":
      return changeSelectedDate(state, action.payload.transactionSelectedDate!);
    
    default:
      return state;
  }
}

const showNumPad = (state: ITransactionUiState, showOrNot: boolean) => {
  return {...state, showNumPad: showOrNot};
}

const changeInputValue = (state: ITransactionUiState, value: string) => {
  if (isNaN(+value)) {
    return state;
  } else {
    return {...state, inputValue: value}
  }
}

const toggleIsPlus = (state: ITransactionUiState, isPlus: boolean) => {
  return {...state, isPlus};
}

const changeSelectedCategory = (state: ITransactionUiState, transactionSelectedCategory: string) => {
  return {...state, transactionSelectedCategory}
}

const changeSelectedAccount = (state: ITransactionUiState, transactionSelectedAccount: string) => {
  return {...state, transactionSelectedAccount}
}

const changeSelectedDate = (state: ITransactionUiState, transactionSelectedDate: string) => {
  return {...state, transactionSelectedDate}
}


export default TransactionUiReducer;