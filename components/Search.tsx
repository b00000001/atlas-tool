function Search() {
  return (
    <section className="flex h-full">
      <div className='flex flex-col justify-center w-full h-full'>
        <div className='flex text-2xl w-1/6 border justify-between'>
          <p>Trending</p>
          <p>Discover</p>
        </div>
        <div>
            <input className='w-1/2' type='search' placeholder='Search by collection name or address...'></input>
        </div>
      </div>
    </section>
  );
}

export default Search;
