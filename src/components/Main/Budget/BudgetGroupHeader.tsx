const BudgetGroupHeader: React.FC<{title: string}> = ({title}) => {
  return (
    <>
      <div className="budget-group-header">
        <p>{title}</p>
        <p className="text-xs font-bold pt-2">Available to Spend</p>
      </div>
    </>
  );
}

export default BudgetGroupHeader;