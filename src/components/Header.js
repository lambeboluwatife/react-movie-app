import { useState } from "react";
const Header = (props) => {
  
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!search) {
      alert("Enter movie name");
    }

    props.onSubmit(search)

    setSearch("");
  };
  return (
    <header>
      <h3>Movie App</h3>
      <form id="form" onSubmit={onSubmit}>
        <input
          type="text"
          id="search"
          className="search"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;
