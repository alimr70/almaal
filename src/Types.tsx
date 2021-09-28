export interface IActions {
  type: string;
  payload: {
    transactionInputValue?: string;
    transactionIsPlus?: boolean;
    transactionShowNumPad?: boolean;
    transactionSelectedCategory?: string;
    transactionSelectedAccount?: string;
    transactionSelectedDate?: string;
    transaction?: ITransaction;
    handleAmount?: number;
    accountId?: string;
    categoryId?: string;
  };
}

export interface ITransaction {
  id: string;
  time: number;
  amount: number;
  isPlus: boolean;
  budgetCategoryId: string;
  accountId: string;
};

export type ITransactionDataState = ITransaction[];

export interface ITransactionUiState {
  inputValue: string;
  isPlus: boolean;
  showNumPad: boolean;
  transactionSelectedCategory: string;
  transactionSelectedAccount: string;
  transactionSelectedDate: string;
}

export interface IBudgetCategory{
  id: string;
  group: string;
  title: string;
  initBudget?: number;
  availableToSpend?: number;
}

export type IBudgetDataState = {
  groups: object;
  categories: IBudgetCategory[];
}

export interface IAccount{
  id: string;
  title: string;
  amount: number;
  type: string;
};

export type IAccountsDataState = IAccount[];

export interface ISavingProfile {
  id: string;
  title: string;
  targetAmount: number;
};

export type IHomeDataState = {
  sadaqah: {
      isOn: boolean;
      PercentageToBeCut: number;
  };
  zakah: {
      isOn: boolean;
  };
  savings: ISavingProfile[];
}