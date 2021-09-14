const Main = () => {
  return (
    <main className="h-full w-full max-w-xl justify-self-center flex flex-col">
      {/* <Home /> */}
      {/* <Accounts /> */}
      <Transaction />
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

export default Main;
