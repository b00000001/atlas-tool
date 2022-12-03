function Search() {
  return (
    <section className="flex py-4 h-full">
      <div className="flex flex-col justify-between w-full">
        <div className="flex text-2xl w-1/6 justify-between font-bold h-1/4">
          <p>Trending</p>
          <p>Discover</p>
        </div>
        <div className="flex items-center h-100">
          <div className="w-4/6 h-full">
            <input
              className="w-11/12 border-2 border-blue-900 bg-gray-900 rounded px-2 h-full"
              type="search"
              placeholder="Search by collection name or address..."
            ></input>
          </div>
          <div className="w-1/2 text-xl">
            <ul className="flex justify-end">
              <li className="px-2">
                <button className="bg-blue-400 rounded flex justify-center hover:bg-sky-700">
                  <p className="px-2 py-2">1m</p>
                </button>
              </li>
              <li className='px-2'>
                <button className="bg-blue-400 rounded flex justify-center hover:bg-sky-700">
                  <p className="px-2 py-2">5m</p>
                </button>
              </li>
              <li className='px-2'>
                <button className="bg-blue-400 rounded flex justify-center hover:bg-sky-700">
                  <p className="px-2 py-2">15m</p>
                </button>
              </li>
              <li className='px-2'>
                <button className="bg-blue-400 rounded flex justify-center hover:bg-sky-700">
                  <p className="px-2 py-2">30m</p>
                </button>
              </li>
              <li className='px-2'>
                <button className="bg-blue-400 rounded flex justify-center hover:bg-sky-700">
                  <p className="px-2 py-2">1h</p>
                </button>
              </li>
              <li className='px-2'>
                <button className="bg-blue-400 rounded flex justify-center hover:bg-sky-700">
                  <p className="px-2 py-2">12h</p>
                </button>
              </li>
              <li className='px-2'>
                <button className="bg-blue-400 rounded flex justify-center hover:bg-sky-700">
                  <p className="px-2 py-2">1d</p>
                </button>
              </li>
              <li className='px-2'>
                <button className="bg-blue-400 rounded flex justify-center hover:bg-sky-700">
                  <p className="px-2 py-2">7d</p>
                </button>
              </li>
              <li className='px-2'>
                <button className="bg-blue-400 rounded flex justify-center hover:bg-sky-700">
                  <p className="px-2 py-2">14d</p>
                </button>
              </li>
              <li className='px-2'>
                <button className="bg-blue-400 rounded flex justify-center hover:bg-sky-700">
                  <p className="px-2 py-2">30d</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
