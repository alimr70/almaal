import { useEffect, useState } from "react";

interface IBudgetCategoryRowProps {
  title: string;
  categoryBudget: number;
  availableAmount: number;
}

const BudgetCategoryRow: React.FC<IBudgetCategoryRowProps> = ({
  title,
  categoryBudget,
  availableAmount,
}) => {
  const [progressberPercentage, setProgressberPercentage] = useState(0);
  const [progressberColor, setProgressberColor] = useState("yellow");

  useEffect(() => {
    setProgressberPercentage(
      getProgressbarStylePercentage(availableAmount, categoryBudget)
    );
    setProgressberColor(getProgressbarStyleColor(progressberPercentage));
  }, [availableAmount, categoryBudget, progressberPercentage]);

  return (
    <>
      <div className="budget-category-row">
        <div className="flex justify-between">
          <p>{title}</p>
          <p>{availableAmount}</p>
        </div>
        <div className="relative h-3 bg-gray-400 rounded-full">
          <div
            className={`absolute top-0 left-0 h-full bg-${progressberColor}-500 rounded-full`}
            style={{
              width: `${progressberPercentage}%`,
            }}></div>
        </div>
        <span className="text-sm font-bold text-gray-400">
          Category initial budget: {categoryBudget}
        </span>
      </div>
    </>
  );
};

const getProgressbarStylePercentage = (
  availableAmount: IBudgetCategoryRowProps["availableAmount"],
  categoryBudget: IBudgetCategoryRowProps["categoryBudget"]
) => {
  const progressBarPercentage = (availableAmount / categoryBudget) * 100;
  const progressbarStylePercentage =
    progressBarPercentage > 100 ? 100 : progressBarPercentage;
  return progressbarStylePercentage;
};

const getProgressbarStyleColor = (percntage: number) => {
  return percntage === 100 ? "green" : "yellow";
};

export default BudgetCategoryRow;
