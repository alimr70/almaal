const Budget = () => {
  return (
    <>
      {/* Section */}
      <div className="container-div">
        <p>Bills</p>
        <p className="text-xs font-bold pt-2">Available to Spend</p>
      </div>

      <div className="budget-container-div">
        <div className="flex justify-between">
          <p>Electric</p>
          <p>500</p>
        </div>
        <div className="relative h-3 bg-gray-400 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
            style={{ width: "100%" }}></div>
        </div>
        <span className="text-sm font-bold text-gray-500">Funded</span>
      </div>

      <div className="budget-container-div">
        <div className="flex justify-between">
          <p>Water/Stair Maintenance</p>
          <p>500</p>
        </div>
        <div className="relative h-3 bg-gray-400 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
            style={{ width: "100%" }}></div>
        </div>
        <span className="text-sm font-bold text-gray-400">Funded</span>
      </div>

      <div className="budget-container-div">
        <div className="flex justify-between">
          <p>Internet</p>
          <p>300</p>
        </div>
        <div className="relative h-3 bg-gray-400 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
            style={{ width: "100%" }}></div>
        </div>
        <span className="text-sm font-bold text-gray-400">Funded</span>
      </div>

      <div className="budget-container-div">
        <div className="flex justify-between">
          <p>Cellphone</p>
          <p>200</p>
        </div>
        <div className="relative h-3 bg-gray-400 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
            style={{ width: "100%" }}></div>
        </div>
        <span className="text-sm font-bold text-gray-400">Funded</span>
      </div>

      {/* Section */}
      <div className="container-div">
        <p>Frequent</p>
        <p className="text-xs font-bold pt-2">Available to Spend</p>
      </div>

      <div className="budget-container-div">
        <div className="flex justify-between">
          <p>Food and Meat</p>
          <p>0</p>
        </div>
        <div className="relative h-3 bg-gray-400 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
            style={{ width: "0" }}></div>
        </div>
        <span className="text-sm font-bold text-gray-400">
          Needed eventually 1,500
        </span>
      </div>

      <div className="budget-container-div">
        <div className="flex justify-between">
          <p>Groceries</p>
          <p>900</p>
        </div>
        <div className="relative h-3 bg-gray-400 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-yellow-500 rounded-full"
            style={{ width: "75%" }}></div>
        </div>
        <span className="text-sm font-bold text-gray-400">
          More needed this month 300
        </span>
      </div>

      <div className="budget-container-div">
        <div className="flex justify-between">
          <p>Transportation</p>
          <p>500</p>
        </div>
        <div className="relative h-3 bg-gray-400 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
            style={{ width: "100%" }}></div>
        </div>
        <span className="text-sm font-bold text-gray-400">Funded</span>
      </div>
    </>
  );
};

export default Budget;