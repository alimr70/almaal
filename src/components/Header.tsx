const Header = () => {
  return(
    <header className="w-full max-w-xl justify-self-center">
    <nav className="w-full py-2 flex justify-between bg-blue-700 justify-self-center">
      <h2 className="ml-2 text-2xl font-bold">Sep 2021</h2>

      <div className="flex items-center">

      <div className="p-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-300"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="p-2 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-300"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </div>

      </div>
    </nav>
    </header>
  );
}

export default Header;