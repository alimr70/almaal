import { IActions, ITransactionState } from "../../Types";

const TransactionReducer = (state: ITransactionState, action: IActions) => {
  switch(action.type){
    case "SHOW_NUMPAD":
      return showNumPad(state, action.payload.transactionShowNumPad);

    case "SET_INPUT_VALUE":
      return changeInputValue(state, action.payload.transactionInputValue!)

    default:
      return state;
  }
}

const showNumPad = (state: ITransactionState, showOrNot: boolean) => {
  return {...state, showNumPad: showOrNot};
}

const changeInputValue = (state: ITransactionState, value: string) => {
  if (isNaN(+value)) {
    return state;
  } else {
    return {...state, inputValue: value}
  }
}

export default TransactionReducer;