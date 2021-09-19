import React, { useState } from "react";
function Search({ setSearchn}) {
  return (
    <div style={{marginTop: '20px'}}>
      <input
      
        type="search"
        placeholder="Search Movie"
        onChange={(e) => setSearchn(e.target.value.toLowerCase())}
      />
    </div>
  );
}

export default Search ;
