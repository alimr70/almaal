export interface ITransactionState {
  inputValue: string;
  plus: boolean;
  showNumPad: boolean;
}

export interface IActions {
  type: string;
  payload: {
    transactionInputValue?: string;
    transactionPlus?: boolean;
    transactionShowNumPad: boolean;
  };
}