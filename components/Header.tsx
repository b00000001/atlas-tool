function Header() {
  return (
    <header className='flex justify-between'>
      <div className="border flex text-2xl justify-between w-1/12">
        <p>Title</p>
        <p>Logo</p>
      </div>
      <div className='text-2xl flex'>
        <p>Community</p>
        <p>Doc.</p>
      </div>
    </header>
  );
}

export default Header;
