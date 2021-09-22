export const setShowNumPad = (showOrNot:boolean) => {
  return {
    type: "SHOW_NUMPAD",
    payload: {
      transactionShowNumPad: showOrNot,
    }
  }
}

export const setInputValue = (value: string) => {
  return {
    type: "SET_INPUT_VALUE",
    payload: {
      transactionInputValue: value,
    }
  }
}