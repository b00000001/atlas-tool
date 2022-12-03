function Header() {
  return (
    <header className="flex bg-slate-800">
      <div className="text-9xl px-4">L</div>
      <div className="flex items-center w-full justify-between px-16">
        <div className="text-3xl">
          <p>Atlas Tool</p>
        </div>
        <div className='flex text-3xl w-1/4 justify-between'>
          <p>Community</p>
          <p>Doc.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
