import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";

const SearchForm = () => {
  const query = "test";

  return (
    <>
      <Form action="/" scroll={false} className="search-form">
        <input
          defaultValue={query}
          name="query"
          placeholder="Search for startups"
          className="search-input"
        ></input>

        <div className="flex gap-2">
          {query && <SearchFormReset />}
          <button type="submit" className="search-btn text-white">
            S
          </button>
        </div>
      </Form>
    </>
  );
};
export default SearchForm;
