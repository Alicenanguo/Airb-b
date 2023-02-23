import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory,NavLink } from "react-router-dom";
import { searchThunk } from "../../store/spots";
import "./Navigation.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [keyword, setKeyword] = useState("");
  const [search,setSearch] = useState([])




  const onSubmit = async (e) => {
    e.preventDefault();
    if (!keyword.length) {
      return;
    }

    const res = await dispatch(searchThunk(keyword));
    if (res.ok) {
      history.push(`/search/${keyword}`);
    }
    setKeyword("");
  };

  return (

    <div className="searchBar-container">
      <form onSubmit={onSubmit} className="searchBar-form">
        <input
          className="searchBar-input"
          placeholder="Search for anything"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          // required={true}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              // console.log("press enter")
              const result = e.target.value
              history.push(`/search/${keyword}`);

            }
          }}
         ></input>
        <button className="searchBar-button" type="submit" onClick={onSubmit}>
          <NavLink to={`/search/${keyword}`}>
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </NavLink>
        </button>
      </form>
      </div>

  );
};
export default SearchBar;
