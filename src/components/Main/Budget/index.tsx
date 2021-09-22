import BudgetCategoryRow from "./BudgetCategoryRow";
import BudgetGroupHeader from "./BudgetGroupHeader";

const Budget = () => {
  return (
    <>
      {/* Group */}
      <BudgetGroupHeader title="Bills" />

      <BudgetCategoryRow
        title="Electric"
        categoryBudget={500}
        availableAmount={500}
      />
      <BudgetCategoryRow
        title="Water/Stair Maintenance"
        categoryBudget={500}
        availableAmount={500}
      />
      <BudgetCategoryRow
        title="Internet"
        categoryBudget={300}
        availableAmount={300}
      />
      <BudgetCategoryRow
        title="Cellphone"
        categoryBudget={200}
        availableAmount={200}
      />

      {/* Group */}
      <BudgetGroupHeader title="Frequent" />

      <BudgetCategoryRow
        title="Food and Meat"
        categoryBudget={1500}
        availableAmount={0}
      />
      <BudgetCategoryRow
        title="Groceries"
        categoryBudget={900}
        availableAmount={675}
      />
      <BudgetCategoryRow
        title="Transportation"
        categoryBudget={500}
        availableAmount={500}
      />
    </>
  );
};

export default Budget;
