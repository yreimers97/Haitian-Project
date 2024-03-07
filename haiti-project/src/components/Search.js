    import React from "react";

    function Search({searchHaiti, updateSearchHaiti}) {
      return (
        <div className="searchbar">
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            placeholder="Type a name to search..."
            value={searchHaiti}
            onChange={updateSearchHaiti}/>
        </div>
      );
}

export default Search