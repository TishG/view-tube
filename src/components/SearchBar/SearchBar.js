import React from "react";
import "./SearchBar.css";

const SearchBar = ({ handleChange, handleSubmit, input }) => {
  //disable page refresh and call handleSubmit(input) that will be executed inside the App component
  const onSubmit = (e, input) => {
    e.preventDefault();
    handleSubmit(input);
  };
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="search-form-container d-flex justify-content-center align-items-center col-lg-8">
          <input
            value={input}
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Search..."
            aria-placeholder="Search..."
            className="pl-1 text-white"
          />
          <button className="ml-1 btn btn-sm btn-secondary d-flex justify-content-center align-items-center">
            <span>
              <i className="fas fa-search" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
