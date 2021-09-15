const Main = () => {
  return (
    <main className="h-full w-full max-w-xl justify-self-center flex flex-col overflow-x-auto">
      <Home />
      {/* <Accounts /> */}
      {/* <Transaction /> */}
      {/* <Budget /> */}
      {/* <Reports /> */}
    </main>
  );
};

const Home = () => {
  return (
    <>
      <div className="m-3 p-5 bg-blue-900">
        <p className="text-blue-200">Available Balance To Spare</p>
        <h1 className="text-4xl text-center">300</h1>
      </div>
      <div className="m-3 p-3 text-xl bg-gray-700 flex justify-between">
        <p>Zakat</p>
        <p className="text-2xl font-bold">2,500</p>
      </div>
      <div className="m-3 p-3 text-xl bg-gray-700 flex justify-between">
        <p>Allah's Right</p>
        <p className="text-2xl font-bold">30</p>
      </div>
      <div className="m-3 p-3 text-xl bg-gray-700 flex justify-between">
        <p>Savings</p>
        <p className="text-2xl font-bold"></p>
      </div>
      <div className="m-3 p-3 text-xl bg-gray-700 flex justify-between">
        <p>Budget</p>
        <p className="text-2xl font-bold">5,000</p>
      </div>
    </>
  );
};

const Accounts = () => {
  return (
    <>
      <div className="m-1 p-3 text-xl bg-gray-700 flex justify-between">
        <p>Monthly Paycheck</p>
        <p className="text-2xl font-bold">5,000</p>
      </div>

      <div className="m-1 p-3 text-xl bg-gray-700 flex justify-between">
        <p>Retirement Savings</p>
        <p className="text-2xl font-bold">0</p>
      </div>

      <div className="m-1 p-3 text-xl bg-gray-700 flex justify-between">
        <p>Stuff to buy</p>
        <p className="text-2xl font-bold">1,500</p>
      </div>

      <div className="m-auto mb-4">
        <button className="px-5 py-3 font-bold bg-green-600 rounded-full">
          Transfer Balance Between Accounts
        </button>
      </div>
    </>
  );
};

const Transaction = () => {
  return (
    <>
      <div className="m-1 text-xl bg-gray-700 flex justify-between">
        <div className="pl-2 flex flex-col font-bold text-2xl">
          <div className="flex items-baseline">
            <input type="radio" name="operation" id="plus" value="plus" />
            <label htmlFor="plus">+</label>
          </div>
          <div className="flex items-baseline">
            <input type="radio" name="operation" id="minus" value="minus" />
            <label htmlFor="minus">-</label>
          </div>
        </div>
        <input className="p-3" type="number" name="amount" id="amount" />
      </div>

      <div className="m-1 p-3 text-xl bg-gray-700 flex justify-between">
        <p>Transfer</p>
        <p>Select Account</p>
      </div>

      <div className="m-1 p-3 text-xl bg-gray-700 flex justify-between">
        <p>Category</p>
        <p>Select Category</p>
      </div>

      <div className="m-1 p-3 text-xl bg-gray-700 flex justify-between">
        <p>Account</p>
        <p>Monthly payroll</p>
      </div>

      <div className="m-1 p-3 text-xl bg-gray-700 flex justify-between">
        <p>Date</p>
        <p>14 September 2021</p>
      </div>

      <div className="m-auto mb-4">
        <button className="px-5 py-3 font-bold bg-green-600 rounded-full">
          Save Transaction
        </button>
      </div>
    </>
  );
};

const Budget = () => {
  return (
    <>
      {/* Section */}
      <div className="p-3 text-xl bg-gray-700 flex justify-between">
        <p>Bills</p>
        <p className="text-xs font-bold pt-2">Available to Spend</p>
      </div>

      <div className="flex flex-col p-3 text-xl bg-gray-600">
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

      <div className="flex flex-col p-3 text-xl bg-gray-600">
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

      <div className="flex flex-col p-3 text-xl bg-gray-600">
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

      <div className="flex flex-col p-3 text-xl bg-gray-600">
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
      <div className="p-3 text-xl bg-gray-700 flex justify-between">
        <p>Frequent</p>
        <p className="text-xs font-bold pt-2">Available to Spend</p>
      </div>

      <div className="flex flex-col p-3 text-xl bg-gray-600">
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

      <div className="flex flex-col p-3 text-xl bg-gray-600">
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

      <div className="flex flex-col p-3 text-xl bg-gray-600">
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

const Reports = () => {
  return (
    <>
      <div className="m-1 p-3 text-xl bg-gray-700 flex justify-between">
        Sorry This Section is still being built. It needs a lot of work and it
        maybe available in the main app.
      </div>
    </>
  );
};

export default Main;
