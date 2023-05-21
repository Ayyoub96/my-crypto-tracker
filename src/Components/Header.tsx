const Header = () => {
    return (
      <header className="bg-gray-900">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between p-4">
            <h1 className="text-white text-lg">
              <a href="/">Crypto Tracker</a>
            </h1>
            <ul className="flex space-x-4 text-white">
              <li>
                <a className="font-semibold" href="/">
                  Cryptocurrencies
                </a>
              </li>
              <li>
                <a className="font-semibold" href="/watchlist">
                  Watchlist
                </a>
              </li>
              <li>
                <a className="font-semibold" href="/statistics">
                  Statistics
                </a>
              </li>
              <li>
                <a className="font-semibold" href="/tools">
                  Tools
                </a>
              </li>
              <li>
                <a className="font-semibold" href="/news">
                  News
                </a>
              </li>
              <li>
              <div className="relative">
  <input
    placeholder="Search currencies"
    className="bg-gray-800 text-white py-1 px-2 pl-8 rounded"
    disabled
  />
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
    fontSize="1rem"
    className="text-white h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
  </svg>
</div>


              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  
  