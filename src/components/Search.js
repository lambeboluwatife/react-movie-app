import { useState } from "react";
const Search = (props) => {
  const [selectedOption, setSelectedOption] = useState();

  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!search) {
      alert("Enter movie name");
    } else if (!selectedOption) {
      alert("Select a genre");
    } else {
      props.onSubmit(search, selectedOption);

    setSearch("");
    setSelectedOption();
    }    
  };
  return (
    <>
      <form id="form">
        <div className="form-content">
          <input
            type="text"
            id="search"
            className="search"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option>Genre</option>
            <option value={28}>Action</option>
            <option value={12}>Adventure</option>
            <option value={16}>Animation</option>
            <option value={35}>Comedy</option>
            <option value={80}>Crime</option>
            <option value={99}>Documentary</option>
            <option value={18}>Drama</option>
            <option value={10751}>Family</option>
            <option value={14}>Fantasy</option>
            <option value={36}>History</option>
            <option value={27}>Horror</option>
            <option value={10402}>Music</option>
            <option value={9648}>Mystery</option>
            <option value={10749}>Romance</option>
            <option value={878}>Science Fiction</option>
            <option value={10770}>TV Movie</option>
            <option value={53}>Thriller</option>
            <option value={10752}>War</option>
            <option value={37}>Western</option>
          </select>

          {/* <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        /> */}
          <input
            className="btn"
            type="submit"
            value="Search"
            onClick={onSubmit}
          />
        </div>
      </form>
    </>
  );
};

export default Search;
