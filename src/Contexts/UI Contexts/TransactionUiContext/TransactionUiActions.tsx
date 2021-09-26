export const setShowNumPad = (showOrNot:boolean) => {
  return {
    type: "SHOW_NUMPAD",
    payload: {
      transactionShowNumPad: showOrNot,
    }
  };
};

export const setInputValue = (value: string) => {
  return {
    type: "SET_INPUT_VALUE",
    payload: {
      transactionInputValue: value,
    }
  };
};

export const toggleIsPlus = (isPlus: boolean) => {
  return {
    type: "TOGGLE_IS_PLUS",
    payload: {
      transactionIsPlus: isPlus,
    }
  };
};

export const changeSelectedOption = (stateType: "Category" | "Account", selectedValue: string) => {
  return stateType === "Category"? changeSelectedCategory(selectedValue) : changeSelectedAccount(selectedValue);
}

export const changeSelectedCategory = (transactionSelectedCategory: string) => {
  return {
    type: "CHANGE_SELECTED_CATEGORY",
    payload: {
      transactionSelectedCategory
    }
  };
};

export const changeSelectedAccount = (transactionSelectedAccount: string) => {
  return {
    type: "CHANGE_SELECTED_ACCOUNT",
    payload: {
      transactionSelectedAccount
    }
  };
};

export const changeSelectedDate = (transactionSelectedDate: string) => {
  return {
    type: "CHANGE_SELECTED_DATE",
    payload: {
      transactionSelectedDate
    }
  };
};