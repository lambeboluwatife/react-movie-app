const Header = () => {
  return (
    <header>
      <h3>Movie App</h3>
      <form id="form">
        <input
          type="text"
          id="search"
          className="search"
          placeholder="search"
        />
      </form>
    </header>
  );
};

export default Header;
