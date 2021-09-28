export const takeSadaqahAmountFromIncome = (handleAmount: number) => {
  return {
    type: "SET_SADAQAH_PERCENTAGE",
    payload: {
      handleAmount,
    }
  };
};